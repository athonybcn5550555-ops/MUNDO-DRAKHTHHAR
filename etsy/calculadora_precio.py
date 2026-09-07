#!/usr/bin/env python3
"""Calcula el neto de una venta digital en Etsy.

Uso:
    python3 calculadora_precio.py                    # tabla, vendedor en España, sin ads
    python3 calculadora_precio.py 15 25 49           # precios concretos
    python3 calculadora_precio.py --pais us          # comisiones de vendedor en EE. UU.
    python3 calculadora_precio.py 19 --ads           # venta atribuida a Offsite Ads

Comisiones verificadas el 2026-09-06 (ver 07-investigacion-mercado.md, 3.2).
Cambian con el tiempo: contrástalas en Finanzas > Comisiones antes de fijar precios.
Los importes se tratan en una sola moneda (la de la tienda); la parte fija del
procesamiento se convierte con TIPO_CAMBIO cuando la tienda cobra en USD.
"""
import sys

LISTING_FEE_USD = 0.20       # por listing y por cada venta de un listing multi-cantidad
TRANSACTION_PCT = 0.065      # 6,5 % del precio
OFFSITE_ADS_PCT = 0.15       # 15 % si < 10 000 USD/año (12 % y obligatorio por encima); tope 100 USD
TIPO_CAMBIO = 1.10           # USD por EUR, supuesto; ajústalo

PAISES = {
    # procesamiento % , parte fija (en moneda local), tasa regulatoria %
    "us": {"proc_pct": 0.03, "proc_fijo": 0.25, "fijo_moneda": "USD", "regulatoria": 0.0},
    "es": {"proc_pct": 0.04, "proc_fijo": 0.30, "fijo_moneda": "EUR", "regulatoria": 0.0088},  # 0,88 % desde 22-jun-2026
}


def neto(precio: float, pais: str = "es", offsite_ads: bool = False, moneda: str = "EUR") -> dict:
    p = PAISES[pais]
    # convertir importes fijos a la moneda de la tienda
    listing = LISTING_FEE_USD if moneda == "USD" else LISTING_FEE_USD / TIPO_CAMBIO
    if p["fijo_moneda"] == moneda:
        fijo = p["proc_fijo"]
    elif moneda == "USD":
        fijo = p["proc_fijo"] * TIPO_CAMBIO
    else:
        fijo = p["proc_fijo"] / TIPO_CAMBIO
    transaccion = precio * TRANSACTION_PCT
    procesamiento = precio * p["proc_pct"] + fijo
    regulatoria = precio * p["regulatoria"]
    ads = min(precio * OFFSITE_ADS_PCT, 100.0 if moneda == "USD" else 100.0 / TIPO_CAMBIO) if offsite_ads else 0.0
    total = listing + transaccion + procesamiento + regulatoria + ads
    return {"precio": precio, "comisiones": total, "neto": precio - total,
            "pct_neto": (precio - total) / precio * 100 if precio else 0.0}


def main(argv: list[str]) -> None:
    ads = "--ads" in argv
    pais = argv[argv.index("--pais") + 1].lower() if "--pais" in argv else "es"
    moneda = argv[argv.index("--moneda") + 1].upper() if "--moneda" in argv else ("USD" if pais == "us" else "EUR")
    skip = set()
    for flag in ("--pais", "--moneda"):
        if flag in argv:
            skip.add(argv.index(flag) + 1)
    precios = [float(a) for i, a in enumerate(argv) if not a.startswith("--") and i not in skip]
    precios = precios or [5, 9, 15, 19, 25, 29, 49, 99]
    print(f"Vendedor: {pais.upper()} · moneda de tienda: {moneda} · "
          + ("venta atribuida a Offsite Ads" if ads else "venta orgánica"))
    print(f"{'Precio':>8} {'Comis.':>8} {'Neto':>8} {'% neto':>7}")
    for p in precios:
        r = neto(p, pais, ads, moneda)
        print(f"{r['precio']:>8.2f} {r['comisiones']:>8.2f} {r['neto']:>8.2f} {r['pct_neto']:>6.1f}%")


if __name__ == "__main__":
    main(sys.argv[1:])
