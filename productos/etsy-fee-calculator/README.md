# Fee & Price Calculator (for Etsy sellers) · producto 1

Nombre del programa: "Fee & Price Calculator". "Etsy" solo aparece como descripción ("for Etsy sellers") y en el listing, nunca en el nombre del ejecutable ni bajo el icono, para no infringir las normas de marca de Etsy (verificar en su política de marca).

Aplicación de un solo archivo HTML. Funciona sin conexión en cualquier
navegador (Windows, Mac, Linux, iPhone, Android). Los datos se guardan en el
navegador del comprador y se exportan e importan con un botón.

## Estado

Versión 1.2, 6 de septiembre de 2026. Interruptor "producto digital" por tarjeta que oculta y anula envío, embalaje e impresión bajo demanda. Idiomas: inglés, español, francés, alemán e italiano, con detección automática y selector en la cabecera. Corregido el botón de la guía inicial, que era invisible en la 1.0. Probada en Chromium con Playwright:
sin errores de consola, cifras iguales a `etsy/calculadora_precio.py`,
persistencia tras recargar, sin desbordamiento horizontal en móvil (390 px).

SHA-256 de `index.html`: `8d07651b0875cf54e92472a7b548aa758364a1d3e743cb2b5c944845583d58b0`

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

## Pruebas automáticas (Playwright, Chromium)

`tests/test_full.js` ejecuta 39 comprobaciones de casos límite, todas en verde:
entrada con coma o punto decimal y formatos europeo y anglosajón; texto no
numérico marcado en rojo y tratado como 0; negativos bloqueados; precio 0 y
precios enormes sin NaN; objetivos inalcanzables en el buscador; exportar e
importar copia de seguridad reales; archivo corrupto rechazado; copia de una
versión antigua migrada; CSV con separador y decimal según idioma y BOM para
Excel; nombres de producto con HTML escapados; no se puede borrar el último
producto; cambio de país conserva productos; impresión; foco de teclado,
Enter y Escape en la guía; pantalla de 320×480 con guía desplazable; 360 px
sin scroll horizontal; arranque sin localStorage; cero errores de consola.

Fallos reales encontrados y corregidos en la 1.4: la guía no se podía cerrar
en pantallas pequeñas (ventana no desplazable); la guía no recibía el foco;
"6,5" con coma se leía como 6; texto no numérico pasaba a 0 sin aviso; los
importes no seguían el formato del idioma (ahora "16,36 €" en español y
"$16.36" en inglés); el CSV no abría bien en Excel en español.

## Pendiente para versión 1.5

- Verificar en el panel de Etsy las tarifas de procesamiento de Reino Unido,
  Canadá y Australia y pasar esos perfiles a "verificado".
- Aviso visual de desplazamiento horizontal en la tabla de comisiones en móvil.
- Revisar las traducciones con un hablante nativo antes de publicar cada idioma.
