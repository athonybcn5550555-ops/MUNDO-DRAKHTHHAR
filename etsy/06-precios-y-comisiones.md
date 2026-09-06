# 06 · Precios y comisiones

## Comisiones que aplica Etsy a un vendedor en España

Valores verificados el 6-sep-2026 en las páginas de ayuda de Etsy (detalle y
fuentes en `07-investigacion-mercado.md`, apartado 3.2). Etsy los cambia;
contrástalos en Finanzas > Comisiones antes de fijar precios definitivos.

| Concepto | Valor usado | Cuándo se cobra |
|---|---|---|
| Publicación | 0,20 USD (≈ 0,18 €) | Al publicar, al renovar (cada 4 meses) y en cada venta. |
| Transacción | 6,5 % | Sobre el precio de venta. |
| Procesamiento de pago (España) | 4 % + 0,30 € | Por pedido. |
| Tasa operativa regulatoria (España) | 0,88 % (desde el 22-jun-2026) | Sobre el precio de venta. No se aplica a vendedores de EE. UU. |
| Offsite Ads | 15 % (tope 100 USD/pedido) | Solo en ventas atribuidas. Opcional hasta 10 000 USD/año; 12 % y obligatorio por encima. |
| IVA | Lo recauda Etsy | En descargas digitales a compradores de la UE, Etsy muestra el precio con IVA incluido, lo recauda y lo remite. En EE. UU. recauda el impuesto de ventas estatal. |

## Neto por venta (salida real del script)

Vendedor en España, tienda en EUR, venta orgánica:

| Precio | Comisiones | Neto | % neto |
|---|---|---|---|
| 5,00 € | 1,05 € | 3,95 € | 79,0 % |
| 9,00 € | 1,51 € | 7,49 € | 83,3 % |
| 15,00 € | 2,19 € | 12,81 € | 85,4 % |
| 19,00 € | 2,64 € | 16,36 € | 86,1 % |
| 25,00 € | 3,33 € | 21,67 € | 86,7 % |
| 49,00 € | 6,06 € | 42,94 € | 87,6 % |

Vendedor en España, tienda en USD, venta atribuida a Offsite Ads:

| Precio | Comisiones | Neto | % neto |
|---|---|---|---|
| 9,00 $ | 2,90 $ | 6,10 $ | 67,7 % |
| 15,00 $ | 4,49 $ | 10,51 $ | 70,1 % |
| 25,00 $ | 7,12 $ | 17,88 $ | 71,5 % |
| 49,00 $ | 13,46 $ | 35,54 $ | 72,5 % |

Comparación con un vendedor de EE. UU. (3 % + 0,25 $, sin tasa regulatoria):
a 25 $ se queda con 22,18 $ (88,7 %) frente a 21,62 $ (86,5 %) desde España.

Conclusiones:

- Por debajo de 9 € la parte fija (0,30 € + publicación) pesa demasiado.
  No vender herramientas sueltas a menos de 9 €.
- Entre 15 € y 29 € el neto se estabiliza en torno al 85–87 %.
- Si una venta viene de Offsite Ads se pierde un 15 % adicional. El precio
  debe soportarlo sin entrar en pérdidas.

## Bandas de precio recomendadas

| Tipo | Precio | Razón |
|---|---|---|
| Herramienta de una función | 9–14 € | Compra impulsiva, compite con plantillas. |
| Herramienta completa (varias funciones, lote) | 19–29 € | Precio ancla de la tienda. Aquí debe estar la mayoría del catálogo. |
| Pack de 3–5 herramientas | 39–49 € | Sube el ticket medio; descuento del 30–40 % sobre la suma. |

Reglas:

1. Precios psicológicos terminados en 9 (9, 14, 19, 29, 49) para el mercado
   anglosajón. Etsy muestra el precio en la moneda del comprador.
2. Lanzar con precio real y una oferta de lanzamiento del 15–20 % durante
   las primeras 2 semanas, no con precio bajo permanente. Subir precio
   después es lo que genera reseñas negativas.
3. Revisar precios cuando haya 20 ventas: si la conversión supera el 3 %,
   subir un escalón.

## Cómo usar la calculadora

```
python3 etsy/calculadora_precio.py                  # tabla, vendedor en España, EUR
python3 etsy/calculadora_precio.py 19 29 49         # precios concretos
python3 etsy/calculadora_precio.py --pais us        # comisiones de vendedor en EE. UU.
python3 etsy/calculadora_precio.py 19 --ads         # venta atribuida a Offsite Ads
python3 etsy/calculadora_precio.py 19 --moneda USD  # tienda que cobra en USD
```

Edita los parámetros de la cabecera del script cuando verifiques las
comisiones en el panel.
