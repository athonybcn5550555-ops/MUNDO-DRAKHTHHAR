# Estado · 2026-09-12 (barrido de la mañana)

## Aviso activo
- **"ElegTuPatinete - actualizar precios" ha vuelto a romperse (código
  1).** Confirmado en vivo con `estado_de_las_tareas`: hoy 12/13 tareas
  programadas están "bien" y esa es la única "ROTA". Esto es justo el
  patrón que se avisó el 09-11: la tarea desapareció como rota el 09-08,
  volvió a fallar el 09-10, se vio "bien" el 09-11, y hoy (09-12) vuelve
  a fallar. Parece un fallo intermitente, no resuelto de raíz — vale la
  pena que Antonio lo mire directamente en el Programador de tareas de
  Windows (log/causa del código 1) en vez de asumir que "ya se arregló".
- **Discrepancia en "frentes abiertos" — sigue sin explicación.** El
  `parte_de_hoy` de hoy dice "no hay frentes nuevos desde la última vez"
  y "de lo ya sabido siguen abiertos **3 frentes**" (el 09-11 decía 2, el
  09-10 decía 18). Esta sesión sigue sin poder confirmar el desglose ni
  si el contador es estable — se deja constancia otra vez en vez de
  suponer una explicación.
- **`drakhthar.com` sigue sin confirmar.** Repetido hoy el intento de
  entrar a la web (`WebFetch`, error `EGRESS_BLOCKED`) y de buscar el
  registro WHOIS por `WebSearch` (solo páginas genéricas de herramientas
  WHOIS de terceros, sin el registro real). Sigue sin confirmarse que sea
  de Antonio. Detalle en
  `centro-de-mando/pendientes/2026-09-10-informe-dominio-drakhthar-encontrado.md`
  y en `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.
- Sigue abierto (sin cambios) el aviso de canibalización SEO señalado el
  09-08: `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md`.
  Sigue bloqueado por lo mismo: sin dominio confirmado ni acceso a Search
  Console.

## Decisiones pendientes
- El `parte_de_hoy` de hoy dice "hay 2 decisión que toca revisar hoy para
  saber si acertamos", sin detalle accesible desde esta sesión. Pendiente
  de que Antonio las traslade o de que el Centro de Mando local las
  exponga con más detalle.
- Sigue sin resolver la decisión ya señalada el 2026-09-07 sobre el
  informe `2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`:
  falta la checklist final (imágenes/vídeo, pruebas en Windows limpio,
  VirusTotal, verificación de comisiones UK/CA/AU, alta NIF-IVA) antes de
  publicar el primer listing.
- Sigue sin resolver si `drakhthar.com` es de Antonio (ver aviso activo
  arriba) — desatasca dos frentes a la vez (contabilidad de dominios y el
  informe de canibalización SEO).
- **Nueva hoy:** confirmar/investigar la causa real del fallo intermitente
  de "ElegTuPatinete - actualizar precios" (código 1) — ver aviso activo.

## Frentes abiertos
- El parte de hoy cuenta **3 frentes abiertos** (ver discrepancia con los
  datos de días anteriores en "Aviso activo" — no se puede confirmar el
  desglose desde esta sesión).

## Tareas automáticas del equipo local de Antonio
Consultado en vivo hoy (`estado_de_las_tareas`): **13 tareas**, **12
"bien"** y **1 rota** ("ElegTuPatinete - actualizar precios", código 1 —
ver aviso activo). Lista completa: Actualizar Publicado Hoy · Centro de
Mando - turno de noche · ElegTuPatinete - actualizar precios (ROTA) ·
Escribir artículo diario patinetes · Informe tráfico webs (cada 3 días) ·
KDP Inteligencia - captura única · Publicar IA para esto automático ·
Publicar artículos automático · Servidor MCP Centro de Mando · TikTok -
seguimiento diario · Túnel MCP Centro de Mando · Vigilancia nichos KDP ·
Vigilante webs Antonio.

## Borradores pendientes de aprobación (todos, con ruta)
- `centro-de-mando/pendientes/2026-09-12-video-guion-etsy-profit-book.md`
  — **nuevo hoy.** Guion de vídeo publicitario escena a escena (30-40 s)
  para "Etsy Profit Book", basado solo en funciones ya verificadas en el
  código real (ver borrador de listing del 09-11). No incluye precio
  (sigue sin fijar) ni capturas reales (el producto sigue sin probar). No
  se ha grabado ni generado ningún vídeo — solo el texto del guion.
- `centro-de-mando/pendientes/2026-09-11-etsy-listado-etsy-profit-book-borrador.md`
  — borrador de listing (título, tags, descripción) para "Etsy Profit
  Book" (producto 2 del catálogo DrakhtharSoftware). El producto sigue
  sin pruebas reales (sin suite de tests, sin probar en Windows limpio,
  sin capturas ni vídeo) — el archivo incluye su propia checklist antes
  de publicar.
- `centro-de-mando/pendientes/2026-09-10-informe-dominio-drakhthar-encontrado.md`
  — informe: candidato de dominio `drakhthar.com` encontrado por búsqueda
  pública, pendiente de que Antonio confirme si es suyo. Sin novedad hoy
  más allá de reconfirmar que sigue sin poder verificarse (ver aviso
  activo).
- `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md`
  — informe: qué es la canibalización SEO detectada el 09-08 y plan de
  solución estándar, a la espera de identificar dominio/páginas concretos.
- `centro-de-mando/pendientes/2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`
  — informe: el primer producto de la tienda Etsy (Fee & Price Calculator)
  está construido, probado y con el listing redactado; checklist real de
  lo que falta antes de publicar.
- `centro-de-mando/pendientes/2026-09-07-informe-niche-research-kdp.md`
  — informe: nichos de bajo contenido para KDP señalados por varias
  fuentes públicas. No se ha repetido la búsqueda hoy (mismo patrón
  reconfirmado ya cuatro veces: solo blogs/guías de terceros vendiendo
  "listas de nichos", sin datos verificables de Amazon) — no se añade
  nada nuevo por no tener fuente fiable distinta, tal y como pide la
  regla de oro.
- (De sesiones anteriores, en la rama sin fusionar `claude/tienda-etsy-v49wjl`,
  no en `pendientes/`): `productos/etsy-fee-calculator/paquete/10-textos-listing.md`
  con el listing completo del primer producto de Etsy, listo para
  copiar/pegar en cuanto Antonio apruebe publicar; `etsy/09-cinco-productos.md`
  con el research completo de los 5 productos.
- `productos/etsy-profit-book/index.html` — producto 2 de 5 del catálogo
  Etsy, WIP sin probar todavía (sin suites de test), con listing y ahora
  también guion de vídeo redactados, ambos pendientes de aprobación.

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
  búsquedas públicas de Amazon/Etsy, reconfirmado ya varias veces).
- Precio final de "Etsy Profit Book" (producto 2) — sigue sin fijar, solo
  el rango orientativo del research (24–29 $) y la banda general ya
  acordada (9–29 € suelto / 39–49 € pack). El guion de vídeo de hoy
  tampoco lo fija, a propósito.

## Correos
- Sigue sin acceso a Gmail en esta sesión hoy: no hay herramientas
  `mcp__Gmail__*` cargadas. No se ha podido revisar bandeja ni preparar
  borradores de respuesta.

## Herramientas disponibles hoy / no disponibles
- **Disponibles:** GitHub (lectura y escritura vía API, confirmado hoy
  leyendo y escribiendo en `centro-de-mando/`), `estado_de_las_tareas` y
  `parte_de_hoy` del Centro de Mando local, `WebSearch` (funciona),
  `WebFetch` (presente pero bloqueada por el proxy de red en todos los
  dominios de Antonio probados hoy).
- **No disponibles hoy:**
  - `add_repo`: sigue sin existir como herramienta en esta sesión (no
    aparece en la búsqueda de herramientas disponibles). El acceso de
    lectura/escritura al repo sigue viniendo concedido de fábrica
    (confirmado hoy mismo leyendo y escribiendo en `centro-de-mando/`),
    así que no bloquea el trabajo, pero el guion diario sigue pidiendo un
    paso que esta sesión no puede ejecutar literalmente.
  - `WebFetch`: bloqueada (`EGRESS_BLOCKED`) hoy en `drakhthar.com`. No se
    ha podido comprobar directamente ninguna web de Antonio.
  - Gmail: sin herramientas `mcp__Gmail__*` cargadas en esta sesión.
  - Herramientas locales `mcp__centro-de-mando__escribir_articulo_de_patinetes_ahora`
    y `mcp__centro-de-mando__publicar_articulos_pendientes_ahora`
    aparecen listadas pero **no se han usado**: la primera generaría
    contenido fuera del flujo de borrador/aprobación de este repo y la
    segunda publica de verdad — ambas quedan fuera de la regla de oro de
    esta Routine (nunca publicar, y todo el contenido nuevo pasa por
    `centro-de-mando/pendientes/`).

## Huecos sin cubrir
- Vídeos publicitarios: sin herramienta de generación/edición conectada
  (se puede escribir el guion, como el de hoy, pero no grabar/montar).
- Etsy: sin conector para publicar de verdad (solo se puede preparar
  contenido, no subirlo).
- Contabilidad: sin conector real. Registro manual en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.
- Libros KDP: los 63 PDFs de `drakhthar-gifts` existen (según lo
  investigado el 2026-09-07) pero su estado de publicación real no está
  confirmado todavía.
- Dominio de "ElegTuPatinete": no se ha podido confirmar públicamente, ni
  hoy ni en sesiones anteriores.
- Canibalización SEO: sigue sin poder diagnosticarse en detalle sin
  confirmación de dominio (candidato `drakhthar.com`) ni acceso a Search
  Console.
- Gmail: sin herramientas cargadas esta sesión, no se ha podido revisar
  correo.
- "Etsy Profit Book": listing y guion de vídeo ya redactados, pero sigue
  faltando toda la parte de pruebas reales (ver checklist en los
  borradores).
- **Nuevo hoy:** causa real del fallo intermitente de "ElegTuPatinete -
  actualizar precios" — sin acceso al log de Windows desde esta sesión.

## Frente: tienda Etsy "DrakhtharSoftware" (software de escritorio)
Catálogo previsto (`etsy/09-cinco-productos.md`):
1. Etsy Fee & Price Calculator — construido, probado, listing redactado.
   Pendiente de aprobación para publicar (ver informe del 2026-09-07 y
   checklist correspondiente).
2. Etsy Profit Book — WIP sin probar (`productos/etsy-profit-book/index.html`,
   rama `claude/tienda-etsy-v49wjl`). Listing redactado el 09-11 y guion
   de vídeo redactado hoy, ambos pendientes de pruebas reales antes de
   poder considerarse listos.
3. Listing Image Prep
4. Reseller Ledger
5. Paycheck Budget

Decisiones D1–D6 siguen resueltas desde el 2026-09-07 (sin cambios hoy):
D1 nombre de tienda (lo lleva Antonio), D2 catálogo confirmado, D3 Windows
primero, D4 sin firma de código (hash SHA-256 + VirusTotal + vídeo), D5 sin
licencia, entrega directa del ZIP, D6 banda de precio 9–29 € suelto / 39–49 €
pack, sujeto a confirmación final antes de publicar con precio real.

## Frente: `drakhthar-gifts` (63 PDFs de regalo ya terminados)
Sin cambios respecto a días anteriores. Marca confirmada por Antonio:
"Puzzle Games Press". Sigue sin aparecer ningún listado público bajo esa
marca en Amazon ni Etsy. Sigue pendiente de que Antonio confirme (1) si
estos 63 PDFs ya están publicados bajo "Puzzle Games Press" en KDP/Etsy o
siguen sin publicar, y (2) si hace falta revisar los 63 antes de publicar
cualquiera, por los errores de portada ya encontrados el 2026-09-07 (ej.
"Coloring Book - Ocean World" con el texto de plantilla "Dinosaurios
(Niños) · Serie 04" sin depurar).
