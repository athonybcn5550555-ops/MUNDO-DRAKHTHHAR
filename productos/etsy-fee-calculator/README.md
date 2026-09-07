# Etsy Fee & Price Calculator · producto 1

Aplicación de un solo archivo HTML. Funciona sin conexión en cualquier
navegador (Windows, Mac, Linux, iPhone, Android). Los datos se guardan en el
navegador del comprador y se exportan e importan con un botón.

## Estado

Versión 1.0, 6 de septiembre de 2026. Probada en Chromium con Playwright:
sin errores de consola, cifras iguales a `etsy/calculadora_precio.py`,
persistencia tras recargar, sin desbordamiento horizontal en móvil (390 px).

SHA-256 de `index.html`: `c6d1270082f61d3e373f83978087f7cf618a52e4375882f524c0d3ff1e92df51`

## Qué hace (mapeado a las quejas de la competencia, ver etsy/09)

| Queja de la competencia | Respuesta en la app |
|---|---|
| Tablas de comisiones desactualizadas | Perfil por país con fecha de verificación visible; todas las cifras editables. Perfiles verificados: EE. UU., España, Francia, Italia, Alemania. Reino Unido, Canadá, Australia y "otro" se marcan "check in Shop Manager". |
| Offsite Ads mal calculado | Se aplica sobre precio + envío, con selector 15 % / 12 % y tope de 100 USD por pedido. |
| Etsy Ads ignorado | Campo de coste medio por pedido. |
| IVA sobre comisiones (UE y Reino Unido sin NIF-IVA) | Interruptor con porcentaje. |
| Solo para un país / una moneda | Símbolo de moneda editable, tasa de conversión del 2,5 % opcional. |
| Una sola fila de producto | Tarjetas ilimitadas, duplicar y borrar, exportación CSV. |
| Sin cálculo inverso | "Price finder": precio necesario para un beneficio o margen objetivo, y ventas mensuales necesarias. |
| Rota en móvil | Diseño responsive probado a 390 px. |
| Sin instrucciones | Guía de tres pasos en la primera apertura, reabrible. |
| Datos que se pierden | Guardado automático, exportar e importar copia de seguridad, imprimir a PDF. |

Costes contemplados por producto: materiales, horas × tarifa, embalaje,
envío real, coste de impresión bajo demanda, gastos generales por unidad.

## Entrega en Etsy

ZIP con:
1. `Etsy-Fee-Price-Calculator.html` (este archivo renombrado).
2. `Start-Here.pdf`: "descarga desde un navegador, no desde la app de Etsy",
   doble clic para abrir, cómo hacer copia de seguridad, contacto.
3. `LICENSE.txt`: uso personal y comercial en los equipos del comprador; no
   revender ni redistribuir.

El PDF de inicio y la licencia se generan en la fase de listing.

## Pendiente para versión 1.1

- Verificar en el panel de Etsy las tarifas de procesamiento de Reino Unido,
  Canadá y Australia y pasar esos perfiles a "verificado".
- Aviso visual de desplazamiento horizontal en la tabla de comisiones en móvil.
- Variante en español si se decide abrir listings en ese idioma.
