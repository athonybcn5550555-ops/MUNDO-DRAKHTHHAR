# Fee & Price Calculator (for Etsy sellers) · producto 1

Nombre del programa: "Fee & Price Calculator". "Etsy" solo aparece como descripción ("for Etsy sellers") y en el listing, nunca en el nombre del ejecutable ni bajo el icono, para no infringir las normas de marca de Etsy (verificar en su política de marca).

Aplicación de un solo archivo HTML. Funciona sin conexión en cualquier
navegador (Windows, Mac, Linux, iPhone, Android). Los datos se guardan en el
navegador del comprador y se exportan e importan con un botón.

## Estado

Versión 1.2, 6 de septiembre de 2026. Interruptor "producto digital" por tarjeta que oculta y anula envío, embalaje e impresión bajo demanda. Idiomas: inglés, español, francés, alemán e italiano, con detección automática y selector en la cabecera. Corregido el botón de la guía inicial, que era invisible en la 1.0. Probada en Chromium con Playwright:
sin errores de consola, cifras iguales a `etsy/calculadora_precio.py`,
persistencia tras recargar, sin desbordamiento horizontal en móvil (390 px).

SHA-256 de `index.html`: `04d252dad0afe87cb65ede1d23ec34a65b0131c16dcb99cc94b0cdf3e3264e56`

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

## Manual de uso integrado

Nueve secciones por idioma, unas 1.500 palabras cada una: qué hace la app,
configurar la tienda, cada comisión explicada una por una, añadir productos,
el buscador de precio, copias y exportaciones, un ejemplo resuelto con
cifras, preguntas y problemas, y una revisión anual. Botón para escuchar el
manual entero o una sección suelta, con la voz del sistema en el idioma
seleccionado, resaltando la frase que se está leyendo. Se detiene al cerrar,
al cambiar de idioma o al pulsar Escape.

Las locuciones se encadenan frase a frase porque algunos navegadores cortan
las lecturas largas.

## Pruebas automáticas (Playwright, Chromium)

`tests/test_manual.js` comprueba el manual: nueve secciones en los cinco
idiomas, lectura completa y por secciones, voz correcta según el idioma,
resaltado, parada, cambio de idioma durante la lectura y cierre con Escape.

`tests/test_contrast.js` recorre cada botón, selector y campo de todas las
pantallas y calcula el contraste real del texto sobre su fondo, componiendo
las capas semitransparentes. Detecta controles invisibles: encontró y evitó
que se publicaran tres botones con texto blanco sobre fondo blanco.

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

`tests/test_soak.js` simula 120 días de uso real: cada día entre 2 y 6
acciones al azar (añadir, editar con valores válidos e inválidos, duplicar,
borrar, marcar digital, cambiar Offsite Ads, IVA, país e idioma, usar el
buscador), copia de seguridad semanal, restauración mensual, y cierre y
reapertura diaria comprobando que el estado es idéntico. Cada día contrasta
el beneficio mostrado de todos los productos con un cálculo independiente
escrito aparte. Además pulsa cada botón y campo una vez, y hace una prueba
de estrés con 150 productos. Resultado: 0 fallos; 60 productos ocupan 9 KB;
acción mediana 32 ms; con 150 productos, escribir un precio 30 ms y cambiar
de idioma 201 ms.

## Pendiente para versión 1.5

- Verificar en el panel de Etsy las tarifas de procesamiento de Reino Unido,
  Canadá y Australia y pasar esos perfiles a "verificado".
- Aviso visual de desplazamiento horizontal en la tabla de comisiones en móvil.
- Revisar las traducciones con un hablante nativo antes de publicar cada idioma.
