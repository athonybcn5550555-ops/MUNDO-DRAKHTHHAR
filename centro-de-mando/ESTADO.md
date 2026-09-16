# Estado · 2026-09-16 (barrido de la mañana)

## Sin nada urgente que decidir hoy
No hay renovaciones de dominio a menos de 60 días vista confirmadas. Hay
un aviso técnico importante (recuperación parcial del conector local, ver
abajo) y las decisiones ya pendientes de días anteriores siguen abiertas.

## Aviso activo
- **Recuperación parcial del conector `centro-de-mando` (Centro de Mando
  local).** Tras tres días seguidos (09-13 a 09-15) sin conectar,
  `estado_de_las_tareas` **ha funcionado hoy** y devuelve datos en vivo:
  14 tareas programadas, 13 "bien" y 1 rota (`ElegTuPatinete - actualizar
  precios`, código de salida 1 — igual que en la última foto conocida del
  09-12, que tenía 13 tareas). `parte_de_hoy`, en cambio, **sigue sin
  conectar hoy** (error 502 `origin_bad_gateway` de Cloudflare, distinto
  del `CLIENT_HTTP_NOT_IMPLEMENTED` de los tres días anteriores, pero
  mismo resultado: sin datos). Es decir: el servicio está parcialmente
  recuperado, no del todo — sigue mereciendo que Antonio compruebe el
  Centro de Mando local si puede.
- **`drakhthar.com` sigue sin confirmar.** Cuarto día seguido con el mismo
  bloqueo: `WebFetch` a `drakhthar.com/aldric.html` y a `laiayjudit.com`
  → `EGRESS_BLOCKED` en ambos; `WebSearch` de WHOIS → solo páginas
  genéricas de herramientas WHOIS y una ficha de ScamAdviser sin datos de
  registrante real. Sigue sin confirmarse que sea de Antonio. Detalle en
  `centro-de-mando/pendientes/2026-09-10-informe-dominio-drakhthar-encontrado.md`
  y en `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.
- Sigue abierto (sin cambios) el aviso de canibalización SEO señalado el
  09-08: `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md`.
  Sigue bloqueado por lo mismo: sin dominio confirmado ni acceso a Search
  Console.

## Decisiones pendientes
- Sigue sin resolver la decisión ya señalada el 2026-09-07 sobre el
  informe `2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`:
  falta la checklist final (imágenes/vídeo, pruebas en Windows limpio,
  VirusTotal, verificación de comisiones UK/CA/AU **en el propio panel de
  Etsy de Antonio** — no es algo verificable por búsqueda pública, alta
  NIF-IVA) antes de publicar el primer listing, y sigue pendiente la
  pregunta directa a Antonio de si fusionar `claude/tienda-etsy-v49wjl` a
  la rama de trabajo diario.
- Sigue sin resolver si `drakhthar.com` es de Antonio (ver aviso activo
  arriba) — desatasca dos frentes a la vez (contabilidad de dominios y el
  informe de canibalización SEO).
- La causa real del fallo intermitente de "ElegTuPatinete - actualizar
  precios" sigue sin diagnóstico específico: hoy se ha confirmado en vivo
  que sigue rota (código 1), pero `estado_de_las_tareas` no da el log
  detallado de Windows, solo el estado general — ver guía genérica ya
  entregada el 09-13.
- Sigue sin resolver (desde el 09-14): ¿confirma Antonio si los coloring
  books de `drakhthar-gifts` están publicados o parados, y bajo qué marca?
  El informe de hoy sobre el nicho "grayscale photo coloring" (poca
  saturación, precio 15,99–19,99 $) añade otro dato de mercado real a
  tener en cuenta para esa decisión — sin proponer publicar nada.
- No se ha podido leer `parte_de_hoy` hoy tampoco (ver aviso activo) —
  puede haber avisos o decisiones nuevas del Centro de Mando local que
  esta sesión no ha visto.

## Frentes abiertos
- No se puede actualizar el contador exacto hoy (sin acceso a
  `parte_de_hoy` esta sesión). Última cifra conocida: 3 (09-12).

## Tareas automáticas del equipo local de Antonio
**Datos en vivo de hoy** (`estado_de_las_tareas`, recuperado tras 3 días
caído): 14 tareas programadas.
- **Rota:** ElegTuPatinete - actualizar precios (código 1).
- **Bien (13):** Actualizar Publicado Hoy · Centro de Mando - turno de
  noche · Escribir articulo diario patinetes · Informe trafico webs (cada
  3 días) · KDP Inteligencia - captura única · Publicar IA para esto
  automático · Publicar articulos automático · Quick Share Relaunch ·
  Servidor MCP Centro de Mando · TikTok - seguimiento diario · Tunel MCP
  Centro de Mando · Vigilancia nichos KDP · Vigilante webs Antonio.

## Borradores pendientes de aprobación (todos, con ruta)
- `centro-de-mando/pendientes/2026-09-16-informe-kdp-grayscale-coloring.md`
  — **nuevo hoy.** Informe de niche research: el nicho "grayscale photo
  coloring" está creciendo y poco saturado en KDP 2026 (con fuentes
  reales y precio orientativo 15,99–19,99 $); relevante para la decisión
  ya abierta sobre `drakhthar-gifts`. No propone publicar nada.
- `centro-de-mando/pendientes/2026-09-15-informe-kdp-estrategia-series-y-puzzle-games-press.md`
  — informe: cuarto intento (con búsqueda distinta) de localizar "Puzzle
  Games Press" en Amazon/Etsy, sin resultado; dato de mercado sobre
  publicar low-content como serie de marca.
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
  vídeo.
- `centro-de-mando/pendientes/2026-09-11-etsy-listado-etsy-profit-book-borrador.md`
  — borrador de listing (título, tags, descripción) para "Etsy Profit
  Book" (producto 2 del catálogo DrakhtharSoftware). Sigue sin pruebas
  reales — checklist propia incluida en el archivo.
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
  cambio los informes de coloring books (09-14, 09-15 y 09-16), que sí
  conectan.
- (De sesiones anteriores, en la rama sin fusionar `claude/tienda-etsy-v49wjl`,
  no en `pendientes/`): `productos/etsy-fee-calculator/paquete/10-textos-listing.md`
  con el listing completo del primer producto de Etsy, listo para
  copiar/pegar en cuanto Antonio apruebe publicar (incluye también el
  guion de sus 10 imágenes y de su vídeo); `etsy/09-cinco-productos.md`
  con el research completo de los 5 productos.
- `productos/etsy-profit-book/index.html` — producto 2 de 5 del catálogo
  Etsy, WIP sin probar todavía (sin suites de test), con listing y guion
  de vídeo redactados, ambos pendientes de aprobación.

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
  búsquedas públicas de Amazon/Etsy, reconfirmado ya cuatro veces con
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
  leyendo y escribiendo en `centro-de-mando/`), `WebSearch` (funciona,
  trae resultados aunque genéricos), `WebFetch` (funciona como
  herramienta, pero bloqueada por el proxy en los dos dominios
  concretos que interesan), y **hoy por primera vez en 4 días**,
  `estado_de_las_tareas` del Centro de Mando local.
- **No disponibles hoy:**
  - `add_repo`: sigue sin existir como herramienta en esta sesión (no
    aparece en la búsqueda de herramientas disponibles vía `ToolSearch`).
    El acceso de lectura/escritura al repo sigue viniendo concedido de
    fábrica (confirmado hoy con `get_me` y leyendo/escribiendo en
    `centro-de-mando/`), así que no bloquea el trabajo, pero el guion
    diario sigue pidiendo un paso que esta sesión no puede ejecutar
    literalmente.
  - `parte_de_hoy` (Centro de Mando local): sigue sin conectar hoy —
    error 502 `origin_bad_gateway` de Cloudflare (distinto del error de
    los tres días anteriores, pero mismo resultado: sin datos). Cuarto
    día seguido sin poder leer el parte completo, aunque
    `estado_de_las_tareas` sí se ha recuperado hoy (ver aviso activo).
  - `WebFetch`: bloqueada (`EGRESS_BLOCKED`) hoy en `drakhthar.com` y
    `laiayjudit.com`, igual que en sesiones anteriores. No se ha podido
    comprobar directamente ninguna web de Antonio.
  - Gmail: sin herramientas `mcp__Gmail__*` cargadas en esta sesión.

## Huecos sin cubrir
- Vídeos publicitarios: sin herramienta de generación/edición conectada
  (se puede escribir el guion, pero no grabar/montar).
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
- Causa real del fallo intermitente de "ElegTuPatinete - actualizar
  precios": confirmado en vivo hoy que sigue rota (código 1), pero sin
  acceso al log detallado de Windows — ver informe de diagnóstico
  genérico del 09-13 para los pasos a seguir la próxima vez que falle.
- `parte_de_hoy` del Centro de Mando local sigue sin conectar (cuarto día
  seguido) — conviene que Antonio compruebe el servicio si puede, aunque
  `estado_de_las_tareas` ya se ha recuperado hoy.

## Frente: tienda Etsy "DrakhtharSoftware" (software de escritorio)
Catálogo previsto (`etsy/09-cinco-productos.md`):
1. Etsy Fee & Price Calculator — construido, probado, listing redactado.
   Pendiente de aprobación para publicar (ver informe del 2026-09-07 y
   checklist correspondiente).
2. Etsy Profit Book — WIP sin probar (`productos/etsy-profit-book/index.html`,
   rama `claude/tienda-etsy-v49wjl`). Listing redactado el 09-11 y guion
   de vídeo redactado el 09-12, ambos pendientes de pruebas reales antes
   de poder considerarse listos.
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
bajo esa marca en Amazon ni Etsy (cuarto intento con query distinta,
mismo resultado). Sigue pendiente de que Antonio confirme (1) si estos 63
PDFs ya están publicados bajo "Puzzle Games Press" en KDP/Etsy o siguen
sin publicar, y (2) si hace falta revisar los 63 antes de publicar
cualquiera, por los errores de portada ya encontrados el 2026-09-07 (ej.
"Coloring Book - Ocean World" con el texto de plantilla "Dinosaurios
(Niños) · Serie 04" sin depurar). El informe de hoy sobre el nicho
"grayscale photo coloring" añade otro dato de mercado real a valorar
junto con el de estrategia de series (09-15) y el de "Bold & Easy"
(09-14), todos apuntando a la misma decisión pendiente.
