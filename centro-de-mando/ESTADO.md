# Estado · 2026-09-17 (barrido de la mañana)

## Sin nada urgente que decidir hoy
No hay renovaciones de dominio a menos de 60 días vista confirmadas.
Ningún fallo técnico nuevo grave — el hueco de siempre (bloqueo de red a
dos dominios concretos) sigue, y hoy además `WebSearch` ha ido peor de lo
normal. Como contrapartida, hoy se ha podido avanzar trabajo real nuevo:
la primera prueba en navegador de verdad de "Etsy Profit Book".

## Aviso activo
- **`add_repo` no existe como herramienta en esta sesión** (confirmado
  hoy con `ToolSearch`, igual que en sesiones anteriores). No bloquea el
  trabajo: el acceso de lectura/escritura al repo viene concedido de
  fábrica (confirmado hoy con `get_me` y `list_branches`, y escribiendo
  varios archivos en `centro-de-mando/`).
- **Conector `centro-de-mando` (Centro de Mando local) sin conectar hoy**
  — mismo error que en la mayoría de días anteriores:
  `CLIENT_HTTP_NOT_IMPLEMENTED` al llamar a
  `estado_de_las_tareas`/`parte_de_hoy`. No se ha podido ver hoy qué
  tareas automáticas de Antonio han fallado en su ordenador (la última
  foto en vivo conocida sigue siendo la del 09-16: 14 tareas, 13 bien,
  "ElegTuPatinete - actualizar precios" rota con código 1).
- **`drakhthar.com` sigue sin confirmar.** Quinto día seguido con el
  mismo bloqueo: `WebFetch` a `drakhthar.com/aldric.html` y a
  `laiayjudit.com` → `EGRESS_BLOCKED` en ambos. Detalle en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.
- **`WebSearch` ha funcionado peor que en días anteriores.** La mayoría
  de las búsquedas de hoy (WHOIS de `drakhthar.com`, "Puzzle Games
  Press" en Amazon, niche research KDP de libros de actividades) han
  devuelto solo enlaces genéricos de Wikipedia sin relación con la
  consulta, o un error "Web search error: unavailable" a media
  respuesta. No se ha podido añadir ningún dato de mercado nuevo y
  fiable hoy — no se ha inventado nada para rellenar el hueco.
- Sigue abierto (sin cambios) el aviso de canibalización SEO señalado el
  09-08: `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md`.
  Sigue bloqueado por lo mismo: sin dominio confirmado ni acceso a Search
  Console.

## Trabajo nuevo de hoy
- **QA real en navegador de "Etsy Profit Book"** (nuevo hoy —
  `centro-de-mando/pendientes/2026-09-17-informe-qa-etsy-profit-book-primera-prueba-real.md`):
  esta sesión trae Chromium + Playwright preinstalados, algo que
  sesiones anteriores no tenían. Se ha probado la app de verdad en un
  navegador: carga sin errores de JavaScript, peso real medido (60.857
  bytes), confirmado que no hace ninguna petición de red (100% offline),
  aviso nuevo para grabación (modal "Quick guide" que hay que cerrar
  antes de grabar capturas/vídeo), y probado el importador de CSV de
  principio a fin con un archivo sintético (no un export real de Etsy):
  el mecanismo funciona (mapeo de columnas, vista previa, import sin
  duplicar), pero el autodetectado de columnas confundió dos campos con
  mi CSV de prueba — sigue haciendo falta probarlo con un export real de
  Etsy 2026 antes de darlo por bueno. Avanza varios puntos de la
  checklist ya abierta el 09-11, no la cierra del todo.

## Decisiones pendientes
- Sigue sin resolver la decisión ya señalada el 2026-09-07 sobre el
  informe `2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`:
  falta la checklist final (imágenes/vídeo, pruebas en Windows limpio,
  VirusTotal, verificación de comisiones UK/CA/AU **en el propio panel de
  Etsy de Antonio**, alta NIF-IVA) antes de publicar el primer listing, y
  sigue pendiente la pregunta directa a Antonio de si fusionar
  `claude/tienda-etsy-v49wjl` a la rama de trabajo diario.
- Sigue sin resolver si `drakhthar.com` es de Antonio (ver aviso activo
  arriba) — desatasca dos frentes a la vez (contabilidad de dominios y el
  informe de canibalización SEO).
- La causa real del fallo intermitente de "ElegTuPatinete - actualizar
  precios" sigue sin diagnóstico específico (última confirmación en vivo:
  09-16, código 1) — ver guía genérica ya entregada el 09-13. Hoy no se
  ha podido comprobar si sigue rota (sin acceso al Centro de Mando
  local).
- Sigue sin resolver (desde el 09-14): ¿confirma Antonio si los coloring
  books de `drakhthar-gifts` están publicados o parados, y bajo qué
  marca? Sin dato de mercado nuevo hoy que añadir a esta decisión (ver
  aviso de `WebSearch` degradado arriba).
- No se ha podido leer `parte_de_hoy` ni `estado_de_las_tareas` hoy (ver
  aviso activo) — puede haber avisos o decisiones nuevas del Centro de
  Mando local que esta sesión no ha visto.

## Frentes abiertos
- No se puede actualizar el contador exacto hoy (sin acceso a
  `parte_de_hoy` esta sesión). Última cifra conocida: 3 (09-12).

## Tareas automáticas del equipo local de Antonio
Sin datos en vivo hoy (conector `centro-de-mando` sin conectar). Última
foto conocida (09-16, en vivo): 14 tareas programadas, 13 bien, 1 rota
("ElegTuPatinete - actualizar precios", código 1).

## Borradores pendientes de aprobación (todos, con ruta)
- `centro-de-mando/pendientes/2026-09-17-informe-qa-etsy-profit-book-primera-prueba-real.md`
  — **nuevo hoy.** Informe de QA: primera prueba real en navegador
  (Chromium/Playwright) de "Etsy Profit Book" — ver "Trabajo nuevo de
  hoy" arriba. No publica nada, no fija precio.
- `centro-de-mando/pendientes/2026-09-16-informe-kdp-grayscale-coloring.md`
  — informe: el nicho "grayscale photo coloring" está creciendo y poco
  saturado en KDP 2026 (con fuentes reales y precio orientativo
  15,99–19,99 $); relevante para la decisión ya abierta sobre
  `drakhthar-gifts`. No propone publicar nada.
- `centro-de-mando/pendientes/2026-09-15-informe-kdp-estrategia-series-y-puzzle-games-press.md`
  — informe: cuarto intento de localizar "Puzzle Games Press" en
  Amazon/Etsy, sin resultado; dato de mercado sobre publicar low-content
  como serie de marca.
- `centro-de-mando/pendientes/2026-09-14-informe-kdp-coloring-books-tendencia-y-catalogo.md`
  — informe: la tendencia 2025-2026 de "Bold & Easy Coloring Books" en
  KDP conecta con los coloring books ya existentes en el catálogo
  `drakhthar-gifts`. Pide a Antonio confirmar estado de publicación.
- `centro-de-mando/pendientes/2026-09-13-informe-diagnostico-elegtupatinete-codigo1.md`
  — guía genérica (con fuentes públicas) de causas típicas del código de
  salida 1 en Task Scheduler y pasos concretos para localizar la causa
  real la próxima vez que falle la tarea de ElegTuPatinete.
- `centro-de-mando/pendientes/2026-09-12-video-guion-etsy-profit-book.md`
  — guion de vídeo publicitario escena a escena (30-40 s) para "Etsy
  Profit Book", basado solo en funciones ya verificadas en el código
  real. No incluye precio ni capturas reales. No se ha grabado ningún
  vídeo. **Actualizar con el aviso nuevo de hoy**: hay que cerrar el
  modal "Quick guide" antes de grabar la Escena 3 en adelante.
- `centro-de-mando/pendientes/2026-09-11-etsy-listado-etsy-profit-book-borrador.md`
  — borrador de listing (título, tags, descripción) para "Etsy Profit
  Book" (producto 2 del catálogo DrakhtharSoftware). Checklist parcialmente
  avanzada hoy (ver informe de QA de hoy): peso de archivo ya medido,
  import probado con datos sintéticos — sigue faltando prueba con datos
  reales, Windows, capturas y vídeo reales.
- `centro-de-mando/pendientes/2026-09-10-informe-dominio-drakhthar-encontrado.md`
  — informe: candidato de dominio `drakhthar.com` encontrado por búsqueda
  pública, pendiente de que Antonio confirme si es suyo.
- `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md`
  — informe: qué es la canibalización SEO detectada el 09-08 y plan de
  solución estándar, a la espera de identificar dominio/páginas concretos.
- `centro-de-mando/pendientes/2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`
  — informe: el primer producto de la tienda Etsy (Fee & Price Calculator)
  está construido, probado y con el listing redactado; checklist real de
  lo que falta antes de publicar.
- `centro-de-mando/pendientes/2026-09-07-informe-niche-research-kdp.md`
  — informe: nichos de bajo contenido para KDP señalados por varias
  fuentes públicas (puzles/mazes/sudoku para mayores) que **no encajan**
  con el catálogo infantil/educativo ya hecho de `drakhthar-gifts`. Ver en
  cambio los informes de coloring books (09-14, 09-15 y 09-16).
- (De sesiones anteriores, en la rama sin fusionar `claude/tienda-etsy-v49wjl`,
  no en `pendientes/`): `productos/etsy-fee-calculator/paquete/10-textos-listing.md`
  con el listing completo del primer producto de Etsy, listo para
  copiar/pegar en cuanto Antonio apruebe publicar (incluye también el
  guion de sus 10 imágenes y de su vídeo); `etsy/09-cinco-productos.md`
  con el research completo de los 5 productos.
- `productos/etsy-profit-book/index.html` — producto 2 de 5 del catálogo
  Etsy, con primera prueba real en navegador hecha hoy (ver informe de
  QA), aún sin probar con datos reales de Etsy ni en Windows, con listing
  y guion de vídeo redactados, ambos pendientes de aprobación.

## Pagos/renovaciones
- Sin renovaciones a menos de 60 días vista confirmadas. Próximo pago
  conocido: **2027-07-16**, laiayjudit.com (~16 $, renovación automática
  vía Shopify) — muy lejos, no urgente.
- Repetido hoy el intento de verificar por WHOIS/RDAP público
  `drakhthar.com` y `laiayjudit.com`, y de localizar el dominio de
  ElegTuPatinete: sin éxito, mismo bloqueo de red (`EGRESS_BLOCKED`) que
  días anteriores. Detalle completo en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.

## Datos de contabilidad que faltan por confirmar (Antonio)
- ElegTuPatinete: dominio, proveedor, coste anual y fecha de renovación —
  no indexado públicamente, no se puede confirmar por WHOIS.
- **`drakhthar.com` — ¿es tuyo?** Si sí: proveedor, coste anual y fecha de
  renovación.
- Si `drakhthar-gifts` (63 PDFs de actividades) está publicado en algún
  sitio o parado, y bajo qué marca ("Puzzle Games Press" no aparece en
  búsquedas públicas de Amazon/Etsy, reconfirmado ya varias veces con
  queries distintas) — relevante también para los informes de coloring
  books (09-14, 09-15 y 09-16).
- Precio final de "Etsy Profit Book" (producto 2) — sigue sin fijar, solo
  el rango orientativo del research (24–29 $) y la banda general ya
  acordada (9–29 € suelto / 39–49 € pack).

## Correos
- Sigue sin acceso a Gmail en esta sesión hoy: no hay herramientas
  `mcp__Gmail__*` cargadas ni configuradas (comprobado hoy con
  `ToolSearch`, sin resultados de Gmail). No se ha podido revisar bandeja
  ni preparar borradores de respuesta.

## Herramientas disponibles hoy / no disponibles
- **Disponibles:** GitHub (lectura y escritura vía API, confirmado hoy
  leyendo y escribiendo varios archivos en `centro-de-mando/`),
  `WebSearch` (funciona como herramienta pero ha dado resultados pobres
  hoy — ver aviso activo), `WebFetch` (funciona como herramienta, pero
  bloqueada por el proxy en los dos dominios concretos que interesan), y
  **novedad de hoy: Chromium + Playwright preinstalados**, usados para la
  primera prueba real en navegador de "Etsy Profit Book" (ver "Trabajo
  nuevo de hoy").
- **No disponibles hoy:**
  - `add_repo`: sigue sin existir como herramienta en esta sesión (no
    aparece en la búsqueda de herramientas disponibles vía `ToolSearch`).
    El acceso de lectura/escritura al repo sigue viniendo concedido de
    fábrica, así que no bloquea el trabajo.
  - Conector `centro-de-mando` (`estado_de_las_tareas`, `parte_de_hoy`):
    sin conectar hoy (`CLIENT_HTTP_NOT_IMPLEMENTED`).
  - `WebFetch`: bloqueada (`EGRESS_BLOCKED`) hoy en `drakhthar.com` y
    `laiayjudit.com`, igual que en sesiones anteriores.
  - Gmail: sin herramientas `mcp__Gmail__*` cargadas en esta sesión.

## Huecos sin cubrir
- Vídeos publicitarios: sin herramienta de generación/edición conectada
  (se puede escribir el guion, pero no grabar/montar). El navegador
  disponible hoy permite ver la app en pantalla, pero no genera vídeo.
- Etsy: sin conector para publicar de verdad (solo se puede preparar
  contenido, no subirlo).
- Contabilidad: sin conector real. Registro manual en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.
- Libros KDP: los 63 PDFs de `drakhthar-gifts` existen pero su estado de
  publicación real no está confirmado todavía.
- Dominio de "ElegTuPatinete": no se ha podido confirmar públicamente, ni
  hoy ni en sesiones anteriores.
- Canibalización SEO: sigue sin poder diagnosticarse en detalle sin
  confirmación de dominio (candidato `drakhthar.com`) ni acceso a Search
  Console.
- Gmail: sin herramientas cargadas esta sesión, no se ha podido revisar
  correo.
- "Etsy Profit Book": mecanismo de import confirmado hoy con datos
  sintéticos, pero sigue faltando la prueba con un CSV real de Etsy 2026,
  prueba en Windows/móvil, capturas y vídeo reales (ver checklist en el
  informe de QA de hoy y en el borrador del 09-11).
- Causa real del fallo intermitente de "ElegTuPatinete - actualizar
  precios": sin diagnóstico específico, sin acceso hoy al log detallado
  ni siquiera al estado general (Centro de Mando local caído hoy).
- `parte_de_hoy` y `estado_de_las_tareas` del Centro de Mando local sin
  conectar hoy.
- `WebSearch` hoy ha dado resultados pobres para consultas de niche
  research y WHOIS — puede que una sesión futura con el buscador
  funcionando con normalidad consiga más.

## Frente: tienda Etsy "DrakhtharSoftware" (software de escritorio)
Catálogo previsto (`etsy/09-cinco-productos.md`):
1. Etsy Fee & Price Calculator — construido, probado, listing redactado.
   Pendiente de aprobación para publicar (ver informe del 2026-09-07 y
   checklist correspondiente).
2. Etsy Profit Book — QA real iniciada hoy (`productos/etsy-profit-book/index.html`,
   rama `claude/tienda-etsy-v49wjl`). Listing redactado el 09-11 y guion
   de vídeo redactado el 09-12; hoy se ha confirmado en navegador real
   que carga sin errores, pesa 60.857 bytes, es 100% offline y el
   importador de CSV funciona de principio a fin (con datos sintéticos).
   Sigue pendiente de pruebas con datos reales, Windows/móvil y
   capturas/vídeo reales antes de considerarse listo.
3. Listing Image Prep
4. Reseller Ledger
5. Paycheck Budget

Decisiones D1–D6 siguen resueltas desde el 2026-09-07 (sin cambios hoy):
D1 nombre de tienda (lo lleva Antonio), D2 catálogo confirmado, D3 Windows
primero, D4 sin firma de código (hash SHA-256 + VirusTotal + vídeo), D5 sin
licencia, entrega directa del ZIP, D6 banda de precio 9–29 € suelto / 39–49 €
pack, sujeto a confirmación final antes de publicar con precio real.

## Frente: `drakhthar-gifts` (63 PDFs de regalo ya terminados)
Sin cambios de fondo respecto a días anteriores. Marca confirmada por
Antonio: "Puzzle Games Press". Sigue sin aparecer ningún listado público
bajo esa marca en Amazon ni Etsy. Sigue pendiente de que Antonio confirme
(1) si estos 63 PDFs ya están publicados bajo "Puzzle Games Press" en
KDP/Etsy o siguen sin publicar, y (2) si hace falta revisar los 63 antes
de publicar cualquiera, por los errores de portada ya encontrados el
2026-09-07 (ej. "Coloring Book - Ocean World" con el texto de plantilla
"Dinosaurios (Niños) · Serie 04" sin depurar). Sin dato de mercado nuevo
hoy que añadir a esta decisión (ver aviso de `WebSearch` degradado
arriba) — sigue valiendo lo señalado en los informes de estrategia de
series (09-15), "Bold & Easy" (09-14) y "grayscale coloring" (09-16).
