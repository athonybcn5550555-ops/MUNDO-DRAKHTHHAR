# Estado · 2026-09-23 (barrido de la mañana)

## Lo más urgente hoy
Nada que exija una decisión de dinero hoy. Sí hay algo que merece
atención: **el estado de las tareas rotas del ordenador de Antonio ha
cambiado de forma confusa** desde el 09-20 (3 tareas que estaban rotas
ahora están bien, pero han aparecido/persisten 2 rotas distintas con el
mismo código de error, y las dos herramientas del conector no coinciden
entre sí hoy). No hay renovaciones de dominio a menos de 60 días vista
confirmadas. **No hubo barrido de esta Routine el 09-21 ni el 09-22** (sin
archivos nuevos de esas fechas en `pendientes/`) — hoy es el primer
barrido desde el 09-20.

## Aviso activo — el más importante de hoy
- **Cambio de estado en las tareas programadas.** El 09-20 estaban rotas
  (código `2147946720` / `0x800710E0`): Carruseles TikTok, ElegTuPatinete
  - actualizar precios, Informe tráfico webs, TikTok - seguimiento diario.
  Hoy, datos en vivo: las 3 primeras están **bien**; "TikTok - seguimiento
  diario" sigue rota y ha aparecido rota **"Actualizar Publicado Hoy"**
  (mismo código). Además, `parte_de_hoy` (resumen de anoche) y
  `estado_de_las_tareas` (estado en vivo ahora) **no coinciden** sobre qué
  falló: `parte_de_hoy` dice que anoche fallaron "Informe tráfico webs",
  "Quick Share Relaunch" y "Carruseles TikTok", pero esas dos primeras
  aparecen "bien" en la consulta en vivo de ahora. Detalle completo,
  hipótesis de por qué pueden no contradecirse realmente (instantáneas
  distintas en el tiempo) y qué pedirle a Antonio en
  `centro-de-mando/pendientes/2026-09-23-informe-diagnostico-tareas-programadas-cambio-de-estado.md`
  (nuevo hoy).
- **"Quick Share Relaunch" sigue sin identificar — 4º día seguido**
  (09-20 a 09-23). Mencionado por `parte_de_hoy` con error otra vez hoy,
  pero sigue sin aparecer en las 14 tareas de `estado_de_las_tareas`.
- **`drakhthar.com` sigue sin confirmar.** Mismo bloqueo de red
  (`EGRESS_BLOCKED`) al intentar `WebFetch` a `drakhthar.com/aldric.html`
  hoy, y `WebSearch` de WHOIS sigue sin encontrar el registro específico
  de `drakhthar.com` ni de `laiayjudit.com` (solo páginas genéricas de
  herramientas WHOIS). Detalle en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.
- **0 artículos y 0 vídeos publicados anoche** (según "PUBLICADO HOY",
  dato en vivo de hoy).
- 2 decisiones pendientes de revisar hoy (sin detalle adicional en el
  resumen que da la herramienta) y 12 frentes abiertos, sin frentes
  nuevos, según `parte_de_hoy`.
- Sigue abierto (sin cambios) el aviso de canibalización SEO señalado el
  09-08, bloqueado por lo mismo: sin dominio confirmado ni acceso a
  Search Console.
- Sin acceso a Gmail hoy (ver "Herramientas" abajo) — puede haber correos
  nuevos que esta sesión no ha visto, y no se ha podido revisar la
  bandeja desde el 09-20 como muy tarde (posiblemente antes, si tampoco
  hubo acceso en sesiones previas).

## Trabajo nuevo de hoy
- **Informe: cambio de estado en las tareas programadas rotas** (nuevo
  hoy —
  `centro-de-mando/pendientes/2026-09-23-informe-diagnostico-tareas-programadas-cambio-de-estado.md`):
  compara el estado de hoy con el del 09-20, señala la discrepancia entre
  `parte_de_hoy` y `estado_de_las_tareas`, y repite las causas típicas
  públicas del código `0x800710E0` (privilegios de administrador, modo
  batería, cuenta sin contraseña, configuración de reintento).
- **Informe de niche research KDP: "maze books" (laberintos) infantiles**
  (nuevo hoy —
  `centro-de-mando/pendientes/2026-09-23-informe-kdp-maze-books.md`): con
  datos reales de hoy (tamaño de mercado, nivel de saturación por
  sub-nicho, franja de edad más rentable, estrategia tema+edad), relevante
  para la misma decisión abierta sobre `drakhthar-gifts`. Formato nuevo,
  no existe todavía entre los 63 PDFs ya hechos. No propone publicar
  nada.
- Repetido el intento diario de verificar dominios (mismo bloqueo, ver
  `DOMINIOS-Y-GASTOS.md`).

## Decisiones pendientes
- Sigue sin resolver la decisión ya señalada el 2026-09-07 sobre el
  informe `2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`:
  falta la checklist final (imágenes/vídeo, pruebas en Windows limpio,
  VirusTotal, verificación de comisiones UK/CA/AU **en el propio panel de
  Etsy de Antonio**, alta NIF-IVA) antes de publicar el primer listing, y
  sigue pendiente la pregunta directa a Antonio de si fusionar
  `claude/tienda-etsy-v49wjl` a la rama de trabajo diario.
- Sigue sin resolver si `drakhthar.com` es de Antonio — desatasca dos
  frentes a la vez (contabilidad de dominios y el informe de
  canibalización SEO).
- Nuevo hoy: ¿confirma Antonio qué está pasando con "TikTok - seguimiento
  diario" y "Actualizar Publicado Hoy" en su Historial del Programador de
  tareas, y si arregló él mismo las otras 3 que hoy aparecen bien?
- Sigue sin resolver (desde el 09-14): ¿confirma Antonio si los coloring
  books de `drakhthar-gifts` están publicados o parados, y bajo qué
  marca? Nuevo dato de mercado hoy (informe "maze books") a sumar a los
  ya entregados (09-14 a 09-20) para cuando Antonio tome esta decisión.
- Las "2 decisiones pendientes de revisar hoy" que señala `parte_de_hoy`
  no traen detalle en el resumen de la herramienta — probablemente
  coinciden con alguna de las ya listadas aquí, pero no se puede confirmar
  cuáles exactamente desde esta sesión.
- Checklist de "Etsy Profit Book" (ver informe de QA del 09-17): sigue
  faltando prueba con un CSV real de Etsy 2026, prueba en Windows/móvil y
  capturas/vídeo reales. Estos pasos necesitan un export real de Antonio
  o acceso a Windows/móvil — no se ha podido avanzar más hoy sin ese
  dato.
- Sigue sin identificar "Quick Share Relaunch" (4º día).

## Frentes abiertos
Según `parte_de_hoy` (dato en vivo de hoy): **12 frentes abiertos**, sin
frentes nuevos desde la última vez. No se puede desglosar la lista
completa desde el resumen que da la herramienta.

## Tareas automáticas del equipo local de Antonio
**Datos en vivo de hoy** (conector `centro-de-mando` conectado):
14 tareas programadas, **2 rotas** (mismo código `2147946720` /
`0x800710E0`): "TikTok - seguimiento diario" y "Actualizar Publicado
Hoy". Las otras 12 bien, incluidas 3 que el 09-20 estaban rotas
(Carruseles TikTok, ElegTuPatinete - actualizar precios, Informe tráfico
webs). Ver informe nuevo de hoy para el detalle completo y la
discrepancia con `parte_de_hoy`.

## Borradores pendientes de aprobación (todos, con ruta)
- `centro-de-mando/pendientes/2026-09-23-informe-diagnostico-tareas-programadas-cambio-de-estado.md`
  — **nuevo hoy.** Seguimiento del cambio de estado en las tareas rotas y
  discrepancia entre las dos fuentes del conector.
- `centro-de-mando/pendientes/2026-09-23-informe-kdp-maze-books.md`
  — **nuevo hoy.** Informe de niche research KDP: laberintos infantiles,
  con datos reales de hoy. No propone publicar nada.
- `centro-de-mando/pendientes/2026-09-20-informe-diagnostico-4-tareas-rotas-mismo-codigo.md`
  — diagnóstico de las 4 tareas rotas del 09-20 (ya parcialmente
  superado, ver el informe nuevo de hoy).
- `centro-de-mando/pendientes/2026-09-20-informe-kdp-word-search-puzzle-books.md`
  — informe de niche research KDP: sopas de letras infantiles.
- `centro-de-mando/pendientes/2026-09-19-informe-kdp-dot-to-dot-connect-the-dots.md`
  — informe de niche research KDP: "dot to dot / connect the dots".
- `centro-de-mando/pendientes/2026-09-18-informe-kdp-spot-the-difference.md`
  — informe de niche research KDP: "spot the difference".
- `centro-de-mando/pendientes/2026-09-17-informe-qa-etsy-profit-book-primera-prueba-real.md`
  — informe de QA: primera prueba real en navegador de "Etsy Profit
  Book". No publica nada, no fija precio.
- `centro-de-mando/pendientes/2026-09-16-informe-kdp-grayscale-coloring.md`
  — informe: nicho "grayscale photo coloring" en KDP 2026, precio
  orientativo 15,99–19,99 $.
- `centro-de-mando/pendientes/2026-09-15-informe-kdp-estrategia-series-y-puzzle-games-press.md`
  — informe: intentos de localizar "Puzzle Games Press" en Amazon/Etsy,
  sin resultado; dato de mercado sobre publicar low-content como serie.
- `centro-de-mando/pendientes/2026-09-14-informe-kdp-coloring-books-tendencia-y-catalogo.md`
  — informe: tendencia "Bold & Easy Coloring Books" en KDP, conecta con
  el catálogo `drakhthar-gifts`.
- `centro-de-mando/pendientes/2026-09-13-informe-diagnostico-elegtupatinete-codigo1.md`
  — guía genérica de causas típicas del código de salida 1 en Task
  Scheduler.
- `centro-de-mando/pendientes/2026-09-12-video-guion-etsy-profit-book.md`
  — guion de vídeo publicitario escena a escena para "Etsy Profit Book".
  Pendiente actualizar con el aviso del 09-17 (cerrar modal "Quick
  guide" antes de la Escena 3).
- `centro-de-mando/pendientes/2026-09-11-etsy-listado-etsy-profit-book-borrador.md`
  — borrador de listing para "Etsy Profit Book". Checklist parcial,
  falta prueba con datos reales, Windows, capturas y vídeo reales.
- `centro-de-mando/pendientes/2026-09-10-informe-dominio-drakhthar-encontrado.md`
  — informe: candidato de dominio `drakhthar.com`, pendiente de
  confirmación de Antonio.
- `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md`
  — informe: qué es la canibalización SEO detectada el 09-08 y plan de
  solución, a la espera de identificar dominio/páginas concretos.
- `centro-de-mando/pendientes/2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`
  — informe: primer producto Etsy (Fee & Price Calculator) construido,
  probado y listing redactado; checklist real de lo que falta.
- `centro-de-mando/pendientes/2026-09-07-informe-niche-research-kdp.md`
  — informe: nichos de bajo contenido para mayores (puzles/mazes/sudoku)
  que **no encajan** con el catálogo infantil ya hecho. Ver en cambio los
  informes de actividades infantiles (09-14 a 09-23).
- (De sesiones anteriores, en la rama sin fusionar `claude/tienda-etsy-v49wjl`,
  no en `pendientes/`): `productos/etsy-fee-calculator/paquete/10-textos-listing.md`
  con el listing completo del primer producto de Etsy, listo para
  copiar/pegar en cuanto Antonio apruebe publicar; `etsy/09-cinco-productos.md`
  con el research completo de los 5 productos.
- `productos/etsy-profit-book/index.html` — producto 2 de 5 del catálogo
  Etsy, con primera prueba real hecha el 09-17, aún sin probar con datos
  reales de Etsy ni en Windows, con listing y guion de vídeo redactados,
  ambos pendientes de aprobación.

## Pagos/renovaciones
- Sin renovaciones a menos de 60 días vista confirmadas. Próximo pago
  conocido: **2027-07-16**, laiayjudit.com (~16 $, renovación automática
  vía Shopify) — muy lejos, no urgente.
- Repetido hoy el intento de verificar por WHOIS/RDAP público
  `drakhthar.com` y `laiayjudit.com`: sin éxito, mismo bloqueo de red
  (`EGRESS_BLOCKED`) que días anteriores. Detalle completo en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.

## Datos de contabilidad que faltan por confirmar (Antonio)
- ElegTuPatinete: dominio, proveedor, coste anual y fecha de renovación —
  no indexado públicamente, no se puede confirmar por WHOIS.
- **`drakhthar.com` — ¿es tuyo?** Si sí: proveedor, coste anual y fecha de
  renovación.
- Si `drakhthar-gifts` (63 PDFs de actividades) está publicado en algún
  sitio o parado, y bajo qué marca ("Puzzle Games Press" no aparece en
  búsquedas públicas de Amazon/Etsy).
- Precio final de "Etsy Profit Book" (producto 2) — sigue sin fijar, solo
  el rango orientativo del research (24–29 $) y la banda general ya
  acordada (9–29 € suelto / 39–49 € pack).
- ¿Qué es "Quick Share Relaunch"? Mencionado hoy (4º día) por
  `parte_de_hoy` como tarea con error, pero no aparece en
  `estado_de_las_tareas`.
- Nuevo: ¿arregló Antonio directamente las 3 tareas que estaban rotas el
  09-20 y hoy están bien? ¿Qué está fallando en "TikTok - seguimiento
  diario" y "Actualizar Publicado Hoy" según el Historial del Programador
  de tareas en su equipo?

## Correos
- Sigue sin acceso a Gmail en esta sesión hoy: no hay herramientas
  `mcp__Gmail__*` cargadas ni configuradas (comprobado hoy con
  `ToolSearch`, sin resultados de Gmail). No se ha podido revisar bandeja
  ni preparar borradores de respuesta.

## Herramientas disponibles hoy / no disponibles
- **Disponibles:** GitHub (lectura y escritura vía API, confirmado hoy
  leyendo y escribiendo varios archivos en `centro-de-mando/`),
  `WebSearch` (hoy ha dado resultados reales y útiles para niche research
  KDP y para reconfirmar el diagnóstico del código de error del Task
  Scheduler, aunque sigue sin resolver las consultas WHOIS concretas),
  `WebFetch` (funciona como herramienta, pero bloqueada por el proxy en
  `drakhthar.com`), conector `centro-de-mando` (`estado_de_las_tareas`,
  `parte_de_hoy`) — ha respondido en vivo hoy.
- **No disponibles hoy:**
  - `add_repo`: sigue sin existir como herramienta en esta sesión. El
    acceso de lectura/escritura al repo sigue viniendo concedido de
    fábrica (el repositorio ya aparece en el ámbito de la sesión), así
    que no ha bloqueado el trabajo, pero el PASO 0 pedido por las
    instrucciones no se ha podido ejecutar literalmente.
  - `WebFetch`: bloqueada (`EGRESS_BLOCKED`) hoy en `drakhthar.com`.
  - Gmail: sin herramientas `mcp__Gmail__*` cargadas en esta sesión.

## Huecos sin cubrir
- Vídeos publicitarios: sin herramienta de generación/edición conectada
  (se puede escribir el guion, pero no grabar/montar).
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
- "Etsy Profit Book": mecanismo de import confirmado con datos
  sintéticos (09-17), pero sigue faltando la prueba con un CSV real de
  Etsy 2026, prueba en Windows/móvil, capturas y vídeo reales.
- Causa real de las tareas rotas de hoy ("TikTok - seguimiento diario",
  "Actualizar Publicado Hoy"): sin diagnóstico específico desde aquí —
  necesita que Antonio revise el Historial del Programador de tareas en
  su propio equipo.
- Identidad de "Quick Share Relaunch": mencionada con error 4 días
  seguidos, sin poder identificarla desde esta sesión.
- No hubo barrido de esta Routine el 09-21 ni el 09-22 — sin poder saber
  desde aquí por qué (fuera del alcance de esta sesión diagnosticarlo).

## Frente: tienda Etsy "DrakhtharSoftware" (software de escritorio)
Catálogo previsto (`etsy/09-cinco-productos.md`):
1. Etsy Fee & Price Calculator — construido, probado, listing redactado.
   Pendiente de aprobación para publicar (ver informe del 2026-09-07 y
   checklist correspondiente).
2. Etsy Profit Book — QA real iniciada el 09-17
   (`productos/etsy-profit-book/index.html`, rama
   `claude/tienda-etsy-v49wjl`). Listing redactado el 09-11 y guion de
   vídeo redactado el 09-12; confirmado en navegador real que carga sin
   errores, pesa 60.857 bytes, es 100% offline y el importador de CSV
   funciona de principio a fin (con datos sintéticos). Sigue pendiente de
   pruebas con datos reales, Windows/móvil y capturas/vídeo reales antes
   de considerarse listo.
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
"Dinosaurios (Niños) · Serie 04" sin depurar). Datos de mercado
acumulados para cuando se tome esta decisión: estrategia de series
(09-15), "Bold & Easy" (09-14), "grayscale coloring" (09-16), "spot the
difference" (09-18), "dot to dot" (09-19), "word search" (09-20) y "maze
books" (09-23, nuevo hoy).
