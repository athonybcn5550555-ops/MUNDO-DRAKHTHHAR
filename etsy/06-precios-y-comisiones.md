# 06 · Precios y comisiones

## Comisiones que aplica Etsy a un vendedor en España

Valores usados en `calculadora_precio.py`. **Todos deben verificarse** en el
Panel de vendedor (Finanzas > Comisiones) porque Etsy los cambia.

| Concepto | Valor usado | Cuándo se cobra |
|---|---|---|
| Publicación | 0,20 USD (≈ 0,18 €) | Al publicar, al renovar (cada 4 meses) y en cada venta. |
| Transacción | 6,5 % | Sobre el precio de venta. |
| Procesamiento de pago (España) | 4 % + 0,30 € | Por pedido. |
| Tasa operativa regulatoria (España) | 0,4 % | Sobre el precio de venta. |
| Offsite Ads | 15 % | Solo en ventas atribuidas a anuncios externos de Etsy. Opcional hasta superar 10 000 USD/año. |
| IVA | Lo recauda Etsy | En descargas digitales a compradores de la UE, Etsy añade y remite el IVA (verificar mecánica). |

## Neto por venta (salida real del script)

Venta orgánica:

| Precio | Comisiones | Neto | % neto |
|---|---|---|---|
| 5,00 € | 1,02 € | 3,98 € | 79,5 % |
| 9,00 € | 1,46 € | 7,54 € | 83,8 % |
| 14,00 € | 2,01 € | 11,99 € | 85,7 % |
| 19,00 € | 2,55 € | 16,45 € | 86,6 % |
| 29,00 € | 3,64 € | 25,36 € | 87,4 % |
| 49,00 € | 5,82 € | 43,18 € | 88,1 % |

Venta atribuida a Offsite Ads:

| Precio | Comisiones | Neto | % neto |
|---|---|---|---|
| 9,00 € | 2,81 € | 6,19 € | 68,8 % |
| 19,00 € | 5,40 € | 13,60 € | 71,6 % |
| 29,00 € | 7,99 € | 21,01 € | 72,4 % |
| 49,00 € | 13,17 € | 35,83 € | 73,1 % |

Conclusiones:

- Por debajo de 9 € la parte fija (0,30 € + publicación) pesa demasiado.
  No vender herramientas sueltas a menos de 9 €.
- Entre 14 € y 29 € el neto se estabiliza en torno al 86–87 %.
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
python3 etsy/calculadora_precio.py            # tabla de ejemplo
python3 etsy/calculadora_precio.py 19 29 49   # precios concretos
python3 etsy/calculadora_precio.py 19 --ads   # venta atribuida a Offsite Ads
```

Edita los parámetros de la cabecera del script cuando verifiques las
comisiones en el panel.
