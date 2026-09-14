# Estado · 2026-09-14 (barrido de la mañana)

## Sin nada urgente que decidir hoy
No hay renovaciones de dominio a menos de 60 días vista confirmadas, ni
ningún aviso nuevo que exija una decisión inmediata. Las decisiones ya
pendientes de días anteriores siguen abiertas (ver abajo).

## Aviso activo
- **Conector `centro-de-mando` (Centro de Mando local) sigue sin conectar
  hoy.** Igual que el 09-13, el servidor MCP devolvió error de conexión
  (502, `CLIENT_HTTP_NOT_IMPLEMENTED`) — no es que la herramienta se haya
  retirado, es un fallo de conexión repetido dos días seguidos. No se ha
  podido consultar `estado_de_las_tareas` ni `parte_de_hoy` hoy tampoco.
  A partir de dos días seguidos de fallo, esto ya merece que Antonio lo
  revise por su cuenta si le es posible (reiniciar el servicio del
  Centro de Mando local, comprobar que el ordenador estaba encendido y
  conectado en el momento del barrido).
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
- Discrepancia en "frentes abiertos" — sigue sin poder confirmarse hoy
  (sin acceso a `parte_de_hoy`, ver aviso arriba). Última cifra conocida:
  3 frentes (09-12).

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
- Sigue sin confirmar la causa real del fallo intermitente de
  "ElegTuPatinete - actualizar precios" — sin acceso hoy tampoco a
  `estado_de_las_tareas` (ver aviso activo).
- **Nueva hoy:** ¿confirma Antonio si los coloring books de
  `drakhthar-gifts` están publicados o parados, y bajo qué marca? Ver
  informe nuevo de hoy sobre la tendencia "Bold & Easy Coloring Books" y
  su posible conexión con el catálogo ya existente.
- No se ha podido confirmar hoy si hay decisiones nuevas señaladas por el
  Centro de Mando local (`parte_de_hoy` no disponible esta sesión).

## Frentes abiertos
- No se puede actualizar el contador hoy (sin acceso a `parte_de_hoy`
  esta sesión, dos días seguidos). Última cifra conocida: 3 (09-12).

## Tareas automáticas del equipo local de Antonio
No se ha podido consultar hoy (`estado_de_las_tareas` no disponible esta
sesión, dos días seguidos — ver "Herramientas" abajo). Última foto
conocida (09-12): 13 tareas, 12 "bien", 1 rota ("ElegTuPatinete -
actualizar precios").

## Borradores pendientes de aprobación (todos, con ruta)
- `centro-de-mando/pendientes/2026-09-14-informe-kdp-coloring-books-tendencia-y-catalogo.md`
  — **nuevo hoy.** Informe: la tendencia 2025-2026 de "Bold & Easy
  Coloring Books" en KDP sí conecta (a diferencia de nichos anteriores)
  con los coloring books ya existentes en el catálogo `drakhthar-gifts`.
  Pide a Antonio confirmar estado de publicación y si quiere valorar un
  producto separado para público adulto/mayor. No es una cifra de ventas
  verificada, solo señal de tendencia de blogs de terceros.
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
  pública, pendiente de que Antonio confirme si es suyo. Sin novedad hoy
  más allá de reconfirmar que sigue sin poder verificarse.
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
  cambio el informe nuevo de hoy sobre coloring books, que sí conecta.
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
  búsquedas públicas de Amazon/Etsy, reconfirmado ya varias veces) —
  relevante también para el informe nuevo de hoy sobre coloring books.
- Precio final de "Etsy Profit Book" (producto 2) — sigue sin fijar, solo
  el rango orientativo del research (24–29 $) y la banda general ya
  acordada (9–29 € suelto / 39–49 € pack).

## Correos
- Sigue sin acceso a Gmail en esta sesión hoy: no hay herramientas
  `mcp__Gmail__*` cargadas ni configuradas. No se ha podido revisar
  bandeja ni preparar borradores de respuesta.

## Herramientas disponibles hoy / no disponibles
- **Disponibles:** GitHub (lectura y escritura vía API, confirmado hoy
  leyendo y escribiendo en `centro-de-mando/`), `WebSearch` (funciona,
  trae resultados aunque genéricos).
- **No disponibles hoy:**
  - `add_repo`: sigue sin existir como herramienta en esta sesión (no
    aparece en la búsqueda de herramientas disponibles). El acceso de
    lectura/escritura al repo sigue viniendo concedido de fábrica
    (confirmado hoy mismo leyendo y escribiendo en `centro-de-mando/`,
    y también con `get_me` devolviendo el usuario autenticado), así que
    no bloquea el trabajo, pero el guion diario sigue pidiendo un paso
    que esta sesión no puede ejecutar literalmente.
  - `estado_de_las_tareas` / `parte_de_hoy` (Centro de Mando local):
    **hoy tampoco conectaron** — mismo error 502 /
    `CLIENT_HTTP_NOT_IMPLEMENTED` que ayer. Dos días seguidos ya, a
    revisar por Antonio si puede (ver aviso activo arriba).
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
  precios": sin acceso al log de Windows ni a `estado_de_las_tareas` hoy
  tampoco — ver informe de diagnóstico genérico del 09-13.
- El conector `centro-de-mando` (Centro de Mando local) lleva dos días
  seguidos sin conectar — ya no parece algo puramente puntual, conviene
  que Antonio lo revise.

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
Sin cambios respecto a días anteriores. Marca confirmada por Antonio:
"Puzzle Games Press". Sigue sin aparecer ningún listado público bajo esa
marca en Amazon ni Etsy. Sigue pendiente de que Antonio confirme (1) si
estos 63 PDFs ya están publicados bajo "Puzzle Games Press" en KDP/Etsy o
siguen sin publicar, y (2) si hace falta revisar los 63 antes de publicar
cualquiera, por los errores de portada ya encontrados el 2026-09-07 (ej.
"Coloring Book - Ocean World" con el texto de plantilla "Dinosaurios
(Niños) · Serie 04" sin depurar). El informe nuevo de hoy sobre la
tendencia de coloring books añade una razón más para priorizar esta
revisión.
