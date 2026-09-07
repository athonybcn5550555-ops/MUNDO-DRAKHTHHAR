#!/usr/bin/env python3
"""Extrae datos de páginas de listing de Etsy guardadas con "Guardar como".

Uso:
    python3 parsear_listing.py campo/b1-listing-1.html [más archivos...]
    python3 parsear_listing.py campo/*.html --json > campo/resultado.json

No necesita librerías externas. Estrategia, en orden:
  1. JSON-LD (<script type="application/ld+json">): título, precio, valoración
     media, número de reseñas y, si Etsy lo incluye, las reseñas con estrellas.
  2. Heurística sobre el texto: bloques cercanos a "out of 5 stars" para
     recuperar reseñas que no estén en el JSON-LD.
La estructura de Etsy cambia; si un archivo devuelve poco, mándamelo y ajusto.
"""
import html
import json
import re
import sys
from html.parser import HTMLParser


class _Texto(HTMLParser):
    """Convierte HTML en líneas de texto, guardando los JSON-LD aparte."""

    def __init__(self):
        super().__init__()
        self.lineas = []
        self.jsonld = []
        self._en_script = False
        self._es_ld = False
        self._buf = []
        self._skip = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "script":
            self._en_script = True
            self._es_ld = a.get("type", "").strip() == "application/ld+json"
            self._buf = []
        elif tag in ("style", "noscript", "svg"):
            self._skip += 1
        elif tag in ("p", "div", "li", "h1", "h2", "h3", "span", "br", "td"):
            self.lineas.append("\n")

    def handle_endtag(self, tag):
        if tag == "script":
            if self._es_ld:
                self.jsonld.append("".join(self._buf))
            self._en_script = False
            self._es_ld = False
        elif tag in ("style", "noscript", "svg") and self._skip:
            self._skip -= 1

    def handle_data(self, data):
        if self._en_script:
            if self._es_ld:
                self._buf.append(data)
            return
        if self._skip:
            return
        self.lineas.append(data)


def _json_walk(obj, out):
    if isinstance(obj, dict):
        out.append(obj)
        for v in obj.values():
            _json_walk(v, out)
    elif isinstance(obj, list):
        for v in obj:
            _json_walk(v, out)


def parsear(ruta):
    raw = open(ruta, encoding="utf-8", errors="replace").read()
    p = _Texto()
    p.feed(raw)
    res = {"archivo": ruta, "titulo": None, "precio": None, "moneda": None,
           "valoracion": None, "num_resenas": None, "resenas": [], "fuente": []}

    # 1. JSON-LD
    for bloque in p.jsonld:
        try:
            data = json.loads(bloque)
        except json.JSONDecodeError:
            continue
        nodos = []
        _json_walk(data, nodos)
        for n in nodos:
            t = n.get("@type")
            if t in ("Product", "ProductGroup") and not res["titulo"]:
                res["titulo"] = n.get("name")
                res["fuente"].append("jsonld")
            if t == "AggregateRating":
                res["valoracion"] = n.get("ratingValue")
                res["num_resenas"] = n.get("reviewCount") or n.get("ratingCount")
            if t in ("Offer", "AggregateOffer") and res["precio"] is None:
                res["precio"] = n.get("price") or n.get("lowPrice")
                res["moneda"] = n.get("priceCurrency")
            if t == "Review":
                rating = n.get("reviewRating", {})
                res["resenas"].append({
                    "estrellas": rating.get("ratingValue"),
                    "fecha": n.get("datePublished"),
                    "texto": (n.get("reviewBody") or n.get("description") or "").strip(),
                    "origen": "jsonld",
                })

    # 2. Heurística de texto para reseñas no incluidas en JSON-LD
    texto = html.unescape("".join(p.lineas))
    lineas = [l.strip() for l in texto.split("\n")]
    lineas = [l for l in lineas if l]
    vistos = {r["texto"] for r in res["resenas"]}
    patron = re.compile(r"(\d(?:\.\d)?) out of 5 stars", re.I)
    for i, l in enumerate(lineas):
        m = patron.search(l)
        if not m:
            continue
        # la reseña suele ser el bloque de texto más largo en las 6 líneas siguientes
        cand = [x for x in lineas[i + 1:i + 7] if len(x) > 25 and not patron.search(x)]
        if not cand:
            continue
        cuerpo = max(cand, key=len)
        if cuerpo in vistos or "Purchased item" in cuerpo:
            continue
        vistos.add(cuerpo)
        res["resenas"].append({"estrellas": float(m.group(1)), "fecha": None,
                               "texto": cuerpo, "origen": "texto"})

    if not res["titulo"]:
        m = re.search(r"<title>(.*?)</title>", raw, re.S | re.I)
        res["titulo"] = html.unescape(m.group(1)).strip() if m else None
    return res


def resumen(r):
    print(f"\n=== {r['archivo']}")
    print(f"Título:      {r['titulo']}")
    print(f"Precio:      {r['precio']} {r['moneda'] or ''}")
    print(f"Valoración:  {r['valoracion']}  ({r['num_resenas']} reseñas)")
    print(f"Reseñas extraídas: {len(r['resenas'])}")
    malas = [x for x in r["resenas"] if x["estrellas"] is not None and float(x["estrellas"]) <= 3]
    print(f"De 1 a 3 estrellas: {len(malas)}")
    for x in malas[:15]:
        print(f"  [{x['estrellas']}★] {x['texto'][:220]}")


def main(argv):
    como_json = "--json" in argv
    rutas = [a for a in argv if not a.startswith("--")]
    if not rutas:
        print(__doc__)
        return
    resultados = [parsear(r) for r in rutas]
    if como_json:
        print(json.dumps(resultados, ensure_ascii=False, indent=2))
    else:
        for r in resultados:
            resumen(r)


if __name__ == "__main__":
    main(sys.argv[1:])
