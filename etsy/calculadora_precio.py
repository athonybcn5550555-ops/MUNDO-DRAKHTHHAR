#!/usr/bin/env python3
"""Calcula el neto de una venta digital en Etsy para un vendedor en España.

Uso:
    python3 calculadora_precio.py            # tabla con precios de ejemplo
    python3 calculadora_precio.py 19 29 49   # precios concretos en EUR
    python3 calculadora_precio.py 19 --ads   # simula venta atribuida a Offsite Ads

Las comisiones cambian. Verifica cada valor en el Panel de vendedor de Etsy
(Finanzas > Comisiones) antes de fijar precios definitivos.
"""
import sys

# --- Parámetros (EUR). Marcados "verificar" los que dependen de Etsy. ---
LISTING_FEE = 0.18          # verificar: 0,20 USD por listing, cobrado al publicar/renovar/vender
TRANSACTION_PCT = 0.065     # verificar: 6,5 % del precio de venta
PROCESSING_PCT = 0.04       # verificar: Etsy Payments España, 4 % ...
PROCESSING_FIXED = 0.30     # verificar: ... + 0,30 EUR por pedido
REGULATORY_PCT = 0.004      # verificar: tasa operativa regulatoria España, 0,4 %
OFFSITE_ADS_PCT = 0.15      # verificar: 15 % solo en ventas atribuidas a Offsite Ads (12 % si > 10k USD/año)


def neto(precio: float, offsite_ads: bool = False) -> dict:
    transaccion = precio * TRANSACTION_PCT
    procesamiento = precio * PROCESSING_PCT + PROCESSING_FIXED
    regulatoria = precio * REGULATORY_PCT
    ads = precio * OFFSITE_ADS_PCT if offsite_ads else 0.0
    total = LISTING_FEE + transaccion + procesamiento + regulatoria + ads
    return {
        "precio": precio,
        "listing": LISTING_FEE,
        "transaccion": transaccion,
        "procesamiento": procesamiento,
        "regulatoria": regulatoria,
        "offsite_ads": ads,
        "comisiones": total,
        "neto": precio - total,
        "pct_neto": (precio - total) / precio * 100 if precio else 0.0,
    }


def main(argv: list[str]) -> None:
    ads = "--ads" in argv
    precios = [float(a) for a in argv if not a.startswith("--")] or [5, 9, 14, 19, 24, 29, 39, 49]
    cab = f"{'Precio':>8} {'Comis.':>8} {'Neto':>8} {'% neto':>7}"
    print(("Venta atribuida a Offsite Ads" if ads else "Venta orgánica") + "\n" + cab)
    for p in precios:
        r = neto(p, ads)
        print(f"{r['precio']:>8.2f} {r['comisiones']:>8.2f} {r['neto']:>8.2f} {r['pct_neto']:>6.1f}%")


if __name__ == "__main__":
    main(sys.argv[1:])
