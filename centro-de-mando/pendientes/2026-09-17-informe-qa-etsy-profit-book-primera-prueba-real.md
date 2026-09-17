Estado: PENDIENTE DE APROBACIÓN

Informe de QA técnico — primera prueba real en un navegador (Chromium vía Playwright) de "Etsy Profit Book" (producto 2, `productos/etsy-profit-book/index.html`, rama `claude/tienda-etsy-v49wjl`); avanza varios puntos de la checklist ya abierta en el borrador de listing del 2026-09-11 y en el guion de vídeo del 2026-09-12, sin publicar ni grabar nada.

# QA · Etsy Profit Book — primera prueba real en navegador (2026-09-17)

## Por qué este informe hoy

Las herramientas de búsqueda/navegación web (`WebSearch`, `WebFetch`) han
fallado hoy para las tareas habituales de la rutina (verificación de
`drakhthar.com`/`laiayjudit.com`, niche research nuevo — ver detalle en
`ESTADO.md` de hoy). Esta sesión sí tiene disponible un navegador
Chromium con Playwright preinstalado, algo que las sesiones anteriores
señalaban como hueco ("sin navegador disponible"). Se ha usado para
avanzar de verdad la checklist de calidad que "Etsy Profit Book" tiene
pendiente desde el 09-11, en vez de repetir búsquedas web que hoy no dan
resultado.

**Importante — qué NO es esta prueba:** no es una prueba en Windows (el
navegador corre sobre Linux dentro de este entorno), y el CSV usado para
probar el importador es **sintético, inventado para la prueba**, no un
export real de Etsy 2026. No sustituye la prueba con datos reales que
sigue pendiente.

## Método

Se ha descargado el HTML real del repositorio (rama
`claude/tienda-etsy-v49wjl`, mismo commit que el borrador del 09-11) y se
ha abierto con Chromium controlado por Playwright, capturando errores de
consola/JavaScript y peticiones de red.

## Resultados (todos observados directamente, ninguno supuesto)

1. **Carga sin errores.** Cero errores de JavaScript y cero errores de
   consola al cargar la app y usarla (import, cambio de pestañas,
   ajustes). No se ha detectado ningún fallo de ejecución.
2. **Peso real del archivo: 60.857 bytes** (medido directamente del
   archivo descargado del repositorio — coincide exactamente con el
   tamaño que reporta la API de GitHub). El listing del 09-11 dejaba este
   dato pendiente de medir; ya se puede usar.
3. **100% offline, confirmado de verdad:** tras recargar la página, cero
   peticiones de red que no sean al propio archivo local. Respalda la
   frase del listing "Nothing is uploaded anywhere" con una prueba real,
   no solo con lectura de código.
4. **Aviso nuevo para el guion de vídeo/capturas:** al primer arranque
   aparece automáticamente una ventana modal "Quick guide" que bloquea
   el resto de la pantalla hasta pulsar su botón de cierre. Quien grabe
   capturas o vídeo real tiene que cerrarla primero (o mostrarla a
   propósito como parte del guion, si se decide). No estaba documentado
   en el guion del 09-12.
5. **Datos de ejemplo:** se cargan solos al primer uso (84 pedidos
   generados), tal y como describe el código, y con ellos el dashboard sí
   pinta un gráfico real (SVG, no `<canvas>` — dato para quien filme el
   guion, la Escena 3 debe grabarse tras cerrar el aviso), la nota
   "Fee defaults were verified on 2026-09-06 for the US, Spain, France,
   Italy and Germany" aparece en Ajustes exactamente con esa fecha (igual
   que reportaba el borrador del 09-11), y el resumen fiscal por
   trimestre calcula y muestra totales reales (25/23/36/0 pedidos por
   trimestre con los datos de ejemplo, 84 en total).
6. **Importador de CSV — mecanismo confirmado, precisión del
   autodetectado a vigilar:** se ha creado un CSV de prueba (2 filas,
   cabeceras en inglés plausibles tipo "Order ID, Sale Date, Item Total,
   Shipping, Discount Amount, Tax Amount, Order Value") y se ha importado
   de principio a fin:
   - El selector de archivo se abre, el mapeador de columnas aparece con
     vista previa, y al confirmar el mapeo los 2 pedidos se añaden sin
     duplicar los 84 de ejemplo (total correcto: 86).
   - **Hallazgo a tener en cuenta:** el autodetectado de columnas
     confundió "Item total" con "Order total" en mi CSV de prueba (mapeó
     la columna `Order Value` al campo interno "Item total" y la columna
     `Item Total` al campo interno "Order total" — justo al revés de lo
     que un vendedor esperaría por el nombre). El mapeo manual permite
     corregirlo antes de importar (por eso existe la vista previa), pero
     confirma que **antes de publicar sigue haciendo falta probar con un
     export real de pedidos de Etsy 2026** para saber si el autodetectado
     acierta con las cabeceras reales de Etsy (que no conozco, no las he
     inventado) — este punto de la checklist del 09-11 sigue abierto, no
     se cierra con esta prueba sintética.

## Qué punto de la checklist del 09-11 queda así

- [x] Medir el peso real del archivo HTML → **60.857 bytes, hecho hoy.**
- [~] Probar el import real → **mecanismo confirmado end-to-end con datos
      sintéticos; sigue pendiente probarlo con un CSV real de pedidos de
      Etsy 2026** (necesita que Antonio exporte uno de su panel).
- [ ] Probar en Windows limpio, y en móvil/tablet → sigue sin hacer (el
      navegador de esta sesión es Chromium sobre Linux, no Windows).
- [ ] Capturas de pantalla reales y vídeo → sigue sin hacer, pero ahora
      se sabe que hay que cerrar el aviso "Quick guide" antes de grabar.
- [ ] Pasar por VirusTotal, confirmar precio final → sin cambios, siguen
      pendientes de Antonio.

## Lo que NO se ha hecho

No se ha publicado nada en Etsy, no se ha tocado el precio, no se ha
inventado ningún dato de negocio, y el CSV usado es explícitamente de
prueba (inventado para verificar el mecanismo), nunca presentado como
dato real de ventas.
