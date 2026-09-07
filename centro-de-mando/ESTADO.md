# Estado · 2026-09-07 (barrido de la tarde, 19:23)

## Aviso activo
- `ElegTuPatinete - actualizar precios` dio error el 2026-09-07 según el
  parte de hoy del Centro de Mando local (`parte_de_hoy`). En el listado en
  vivo de tareas programadas (`estado_de_las_tareas`), sin embargo, esa
  misma tarea aparece ahora como "bien" junto con las otras 10 tareas. No
  se puede saber desde aquí si se recuperó sola en un reintento o si el
  aviso y el estado "bien" conviven porque miden cosas distintas — el
  mensaje de error concreto corre en el PC local de Antonio, fuera del
  alcance de esta sesión. Pendiente: que Antonio confirme si sigue
  fallando o ya está resuelto.
- Antonio: el equipo local estuvo apagado anoche (turno de noche sin
  trabajar), según el propio parte de hoy.

## Decisiones pendientes
- Hay 1 decisión señalada en el parte de hoy del Centro de Mando local sin
  detalle accesible desde aquí. Pendiente de que Antonio la traslade o de
  que el propio Centro de Mando local la exponga con más detalle.
- **Resuelta hoy:** Antonio confirmó fusionar `claude/tienda-etsy-v49wjl`
  (tienda Etsy "DrakhtharSoftware") a esta rama — hecho, ver commit de
  fusión. El catálogo de la tienda (`etsy/`, `productos/`, `marca/`) ya
  vive junto al resto del Centro de Mando; el Administrador puede seguir
  construyendo el catálogo desde aquí.

## Frentes abiertos
- 54 frentes abiertos acumulados (KDP, Drakhthar, Etsy, webs), según el
  parte de hoy del Centro de Mando local — sin desglose disponible todavía
  desde las herramientas conectadas a esta sesión más allá de lo que ya
  está documentado abajo.

## Tareas automáticas ya en marcha (equipo local de Antonio)
Consultado en vivo hoy (`estado_de_las_tareas`), las 11 tareas programadas
aparecen "bien":
- Centro de Mando - turno de noche
- ElegTuPatinete - actualizar precios (ver aviso activo arriba)
- Escribir artículo diario patinetes
- Informe tráfico webs (cada 3 días)
- KDP Inteligencia - captura única
- Publicar IA para esto automático
- Publicar artículos automático
- Servidor MCP Centro de Mando
- Túnel MCP Centro de Mando
- Vigilancia nichos KDP
- Vigilante webs Antonio

## Borradores pendientes de aprobación (todos, con ruta)
- `centro-de-mando/pendientes/2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`
  — informe: el primer producto de la tienda Etsy (Fee & Price Calculator)
  está construido, probado y con el listing redactado; qué falta para
  publicarlo y qué decisión se pide a Antonio.
- `centro-de-mando/pendientes/2026-09-07-informe-niche-research-kdp.md`
  — informe: nichos de bajo contenido para KDP que señalan varias fuentes
  públicas en 2026, con aviso explícito de que son datos de blogs de
  terceros, no cifras verificadas de Amazon.
- (De sesiones anteriores, en la rama sin fusionar `claude/tienda-etsy-v49wjl`,
  no en `pendientes/`): `productos/etsy-fee-calculator/paquete/10-textos-listing.md`
  con el título, tags, descripción y precio del primer listing de Etsy,
  completo y listo para copiar/pegar en cuanto Antonio apruebe publicar.

## Pagos/renovaciones
- Sin renovaciones a menos de 60 días vista confirmadas. Próximo pago
  conocido: **2027-07-16**, laiayjudit.com (~16 $, renovación automática
  vía Shopify) — muy lejos, no urgente.
- Intento de verificar por WHOIS/RDAP público la fecha de laiayjudit.com:
  fallido hoy por bloqueo de red de esta sesión (`EGRESS_BLOCKED` en
  whois.com, rdap.verisign.com y en el propio dominio). Detalle en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.

## Datos de contabilidad que faltan por confirmar (Antonio)
- ElegTuPatinete: dominio, proveedor, coste anual y fecha de renovación —
  no indexado públicamente, no se puede confirmar por WHOIS.
- Web(s) de Drakhthar / Proyecto JL: dominio, proveedor, coste y renovación.
- Si `drakhthar-gifts` (63 PDFs de actividades) está publicado en algún
  sitio o parado.

## Correos
- Sin acceso a Gmail en esta sesión (no hay herramientas `mcp__Gmail__*`
  disponibles hoy). No se ha podido revisar bandeja ni preparar borradores
  de respuesta.

## Herramientas disponibles hoy / no disponibles
- **Disponibles:** GitHub (lectura y escritura vía API, confirmado con
  `get_me` y con la creación de archivos de hoy), `estado_de_las_tareas` y
  `parte_de_hoy` del Centro de Mando local, `WebSearch`.
- **No disponibles hoy:** herramienta `add_repo` (no existe como tal en
  esta sesión; el acceso de lectura/escritura al repo ya venía concedido
  de fábrica, así que no bloqueó el trabajo, pero se deja constancia de
  que la herramienta que pide el guion diario no está aquí). `WebFetch`
  está presente pero el proxy de red bloquea (`EGRESS_BLOCKED`) cualquier
  dominio probado hoy (whois.com, rdap.verisign.com, laiayjudit.com), así
  que no se ha podido comprobar directamente ninguna web ni hacer WHOIS.
  Gmail: sin conector esta sesión.

## Huecos sin cubrir
- Vídeos publicitarios: sin herramienta conectada.
- Etsy: sin conector para publicar de verdad (solo se puede preparar
  contenido, no subirlo). El primer producto ya está listo para publicar
  en cuanto Antonio revise el informe de hoy.
- Contabilidad: sin conector real. Registro manual en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.
- Libros KDP: los 63 PDFs de `drakhthar-gifts` existen pero su estado de
  publicación real no está confirmado todavía.
- Dominio de "ElegTuPatinete": no se ha podido confirmar públicamente.
- Verificación pública de dominios (WHOIS/RDAP): bloqueada por red en esta
  sesión, ver arriba.
- Gmail: sin conector esta sesión, no se ha podido revisar correo.

## Frente: tienda Etsy "DrakhtharSoftware" (software de escritorio)
Sigue en la rama sin fusionar `claude/tienda-etsy-v49wjl`. Negocio real
parado en listings activos: 2 ventas históricas, 5,0★ (1 reseña), 3 meses
de antigüedad, 0 artículos activos ahora mismo. Hoy se ha confirmado que
el producto 1 del catálogo (Etsy Fee & Price Calculator) está totalmente
construido, probado con suites automáticas y con el listing redactado —
ver el informe de hoy en `pendientes/` para el detalle y la checklist real
de lo que falta antes de publicar.

Catálogo previsto (`etsy/09-cinco-productos.md`), orden de construcción:
1. Etsy Fee & Price Calculator — construido, probado, listing redactado.
   Pendiente de aprobación para publicar (ver informe de hoy).
2. Etsy Profit Book — siguiente en la cola, WIP sin probar (commit `85c454e`).
3. Listing Image Prep
4. Reseller Ledger
5. Paycheck Budget

Decisiones D1–D6 ya resueltas el 2026-09-07 con Antonio (sin cambios hoy):
D1 nombre de tienda (lo lleva Antonio, el Administrador no lo toca), D2
catálogo confirmado, D3 Windows primero (macOS más adelante si vende — el
instalador de escritorio de macOS ya existe como release de GitHub pero no
se vende en Etsy, solo la app HTML), D4 sin firma de código (hash SHA-256 +
VirusTotal + vídeo), D5 sin licencia, entrega directa del ZIP, D6 banda de
precio 9–29 € suelto / 39–49 € pack, sujeto a confirmación final antes de
publicar con precio real.

## Frente: `drakhthar-gifts` (63 PDFs de regalo ya terminados)
Investigado a fondo el 2026-09-07 (fuera del barrido diario, a petición de
Antonio): 153 commits revisados, ninguno menciona Amazon/KDP/Etsy/ISBN;
sin archivo de metadata de negocio en el repo.

**Marca confirmada por Antonio (2026-09-07):** "Puzzle Games Press" es su
editorial real de libros de puzzles para KDP — no es un dato encontrado
por sospecha, lo ha confirmado él directamente. Búsquedas en Amazon y Etsy
de "Puzzle Games Press" no encontraron listados vinculados a esa marca, así
que sigue sin confirmarse si estos 63 PDFs concretos ya están publicados
bajo ese sello o están terminados y parados.

**Aviso de calidad, pendiente de que Antonio decida:** varias portadas
tienen errores de plantilla sin depurar — ej. "Coloring Book - Ocean
World" dice "Dinosaurios (Niños) · Serie 04" en la portada, y una de
"Word Search: Ancient Egypt" dice literalmente "Test · Serie 01". Parece
un pipeline de generación automática sin control de calidad final.

Pendiente de que Antonio confirme: (1) si estos 63 PDFs ya están
publicados bajo "Puzzle Games Press" en KDP/Etsy o siguen sin publicar, y
(2) si hace falta revisar los 63 antes de publicar cualquiera, por los
errores de portada encontrados.
