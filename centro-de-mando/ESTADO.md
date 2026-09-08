# Estado · 2026-09-08 (barrido de la mañana)

## Aviso activo
- **Nuevo hoy — canibalización SEO:** el `parte_de_hoy` del Centro de Mando
  local señala un frente que no estaba apuntado: "Búsquedas donde varias
  páginas tuyas compiten entre ellas, parado porque Google no sabe cuál de
  tus páginas enseñar para esa búsqueda y reparte la fuerza entre todas,
  así que ninguna sube." Esta sesión no tiene acceso a Search Console ni a
  las webs (`WebFetch` sigue bloqueado), así que no puede saber qué páginas
  concretas compiten. Se ha dejado un informe con el diagnóstico general y
  el plan de solución en
  `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md`.
  Falta que Antonio (o el Centro de Mando local) diga qué páginas/dominio
  son para poder proponer la solución concreta.
- El aviso de ayer sobre "ElegTuPatinete - actualizar precios" ya no
  aparece hoy en el parte ni en el listado en vivo de tareas — las 11
  tareas programadas aparecen "bien" hoy también. Parece resuelto solo,
  sin que se pueda confirmar el porqué desde aquí.

## Decisiones pendientes
- El `parte_de_hoy` de hoy menciona "1 decisión que toca revisar hoy para
  saber si acertamos", sin dar el detalle en el texto que devuelve esta
  herramienta. Pendiente de que Antonio la traslade o de que el Centro de
  Mando local la exponga con más detalle desde esta sesión.
- Sigue sin resolver la decisión ya señalada el 2026-09-07 sobre el
  informe `2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`
  (la fusión de `claude/tienda-etsy-v49wjl` ya se hizo ese mismo día, según
  el propio informe de ayer; lo que queda pendiente es la checklist final
  antes de publicar el primer listing — ver más abajo).

## Frentes abiertos
- El parte de hoy cuenta 21 frentes abiertos ya conocidos (más el nuevo de
  canibalización SEO de arriba) — sin desglose accesible desde las
  herramientas conectadas a esta sesión más allá de lo ya documentado en
  este archivo y en `etsy/`.

## Tareas automáticas del equipo local de Antonio
Consultado en vivo hoy (`estado_de_las_tareas`), las 11 tareas programadas
aparecen "bien", incluida "ElegTuPatinete - actualizar precios" (con
aviso de error ayer, hoy sin aviso — ver arriba):
Centro de Mando - turno de noche · ElegTuPatinete - actualizar precios ·
Escribir artículo diario patinetes · Informe tráfico webs (cada 3 días) ·
KDP Inteligencia - captura única · Publicar IA para esto automático ·
Publicar artículos automático · Servidor MCP Centro de Mando · Túnel MCP
Centro de Mando · Vigilancia nichos KDP · Vigilante webs Antonio.

Nota: el equipo local no trabajó anoche (turno de noche apagado), según el
propio parte de hoy.

## Borradores pendientes de aprobación (todos, con ruta)
- `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md`
  — **nuevo hoy.** Informe: qué es la canibalización SEO detectada hoy y
  plan de solución estándar, a la espera de que se identifiquen las
  páginas/dominio concretos.
- `centro-de-mando/pendientes/2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`
  — informe: el primer producto de la tienda Etsy (Fee & Price Calculator)
  está construido, probado y con el listing redactado; checklist real de
  lo que falta antes de publicar (imágenes/vídeo, pruebas en Windows
  limpio, VirusTotal, verificación de comisiones UK/CA/AU, alta NIF-IVA).
- `centro-de-mando/pendientes/2026-09-07-informe-niche-research-kdp.md`
  — informe: nichos de bajo contenido para KDP señalados por varias
  fuentes públicas en 2026 (blogs de terceros, no datos verificados de
  Amazon). Reconfirmado hoy con una búsqueda adicional sobre "Puzzle Games
  Press": sigue sin aparecer ningún listado público bajo esa marca en
  Amazon ni Etsy — mismo resultado que ayer, nada nuevo.
- (De sesiones anteriores, en la rama sin fusionar `claude/tienda-etsy-v49wjl`,
  no en `pendientes/`): `productos/etsy-fee-calculator/paquete/10-textos-listing.md`
  con el listing completo del primer producto de Etsy, listo para
  copiar/pegar en cuanto Antonio apruebe publicar.
- `productos/etsy-profit-book/index.html` — producto 2 de 5 del catálogo
  Etsy, WIP sin probar todavía (sin suites de test ni listing redactado,
  a diferencia del producto 1). No se ha escrito copy de venta para este
  producto porque publicitar algo sin probar sería engañoso; falta antes
  someterlo a las mismas pruebas que el producto 1.

## Pagos/renovaciones
- Sin renovaciones a menos de 60 días vista confirmadas. Próximo pago
  conocido: **2027-07-16**, laiayjudit.com (~16 $, renovación automática
  vía Shopify) — muy lejos, no urgente.
- Repetido hoy el intento de verificar por WHOIS/RDAP público la fecha de
  laiayjudit.com y de localizar el dominio de ElegTuPatinete: sin éxito,
  mismo bloqueo de red (`EGRESS_BLOCKED`) que ayer. Detalle en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.

## Datos de contabilidad que faltan por confirmar (Antonio)
- ElegTuPatinete: dominio, proveedor, coste anual y fecha de renovación —
  no indexado públicamente, no se puede confirmar por WHOIS.
- Web(s) de Drakhthar / Proyecto JL: dominio, proveedor, coste y renovación.
- Si `drakhthar-gifts` (63 PDFs de actividades) está publicado en algún
  sitio o parado, y bajo qué marca ("Puzzle Games Press" no aparece en
  búsquedas públicas de Amazon/Etsy, reconfirmado hoy).

## Correos
- Sigue sin acceso a Gmail en esta sesión hoy: el conector aparece
  "conectado" a nivel de cuenta, pero no hay herramientas `mcp__Gmail__*`
  cargadas en esta sesión. No se ha podido revisar bandeja ni preparar
  borradores de respuesta.

## Herramientas disponibles hoy / no disponibles
- **Disponibles:** GitHub (lectura y escritura vía API), `estado_de_las_tareas`
  y `parte_de_hoy` del Centro de Mando local, `WebSearch`.
- **No disponibles hoy:**
  - `add_repo`: sigue sin existir como herramienta en esta sesión. El
    acceso de lectura/escritura al repo ya venía concedido de fábrica
    (confirmado leyendo y escribiendo en `centro-de-mando/` hoy mismo), así
    que no ha bloqueado el trabajo, pero el guion diario sigue pidiendo un
    paso que esta sesión no puede ejecutar literalmente.
  - `WebFetch`: presente pero el proxy de red bloquea (`EGRESS_BLOCKED`)
    todos los dominios probados hoy (laiayjudit.com). No se ha podido
    comprobar directamente ninguna web de Antonio.
  - Gmail: conector "conectado" a nivel de cuenta pero sin herramientas
    cargadas en esta sesión concreta.

## Huecos sin cubrir
- Vídeos publicitarios: sin herramienta conectada.
- Etsy: sin conector para publicar de verdad (solo se puede preparar
  contenido, no subirlo).
- Contabilidad: sin conector real. Registro manual en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.
- Libros KDP: los 63 PDFs de `drakhthar-gifts` existen (según lo
  investigado el 2026-09-07) pero su estado de publicación real no está
  confirmado todavía.
- Dominios de "ElegTuPatinete" y de las webs de Drakhthar/Proyecto JL: no
  se han podido confirmar públicamente, ni hoy ni ayer.
- Canibalización SEO (nueva hoy): no se puede diagnosticar en detalle sin
  saber qué dominio/páginas son, ni sin acceso a Search Console.
- Gmail: sin herramientas cargadas esta sesión, no se ha podido revisar
  correo.

## Frente: tienda Etsy "DrakhtharSoftware" (software de escritorio)
Sin cambios respecto a ayer. Catálogo previsto (`etsy/09-cinco-productos.md`):
1. Etsy Fee & Price Calculator — construido, probado, listing redactado.
   Pendiente de aprobación para publicar (ver informe del 2026-09-07 y
   checklist arriba).
2. Etsy Profit Book — WIP sin probar (`productos/etsy-profit-book/index.html`,
   commit `85c454e`), sin listing todavía.
3. Listing Image Prep
4. Reseller Ledger
5. Paycheck Budget

Decisiones D1–D6 siguen resueltas desde el 2026-09-07 (sin cambios hoy):
D1 nombre de tienda (lo lleva Antonio), D2 catálogo confirmado, D3 Windows
primero, D4 sin firma de código (hash SHA-256 + VirusTotal + vídeo), D5 sin
licencia, entrega directa del ZIP, D6 banda de precio 9–29 € suelto / 39–49 €
pack, sujeto a confirmación final antes de publicar con precio real.

## Frente: `drakhthar-gifts` (63 PDFs de regalo ya terminados)
Sin cambios respecto a ayer. Marca confirmada por Antonio: "Puzzle Games
Press". Reconfirmado hoy con una búsqueda adicional que sigue sin aparecer
ningún listado público bajo esa marca en Amazon ni Etsy. Sigue pendiente
de que Antonio confirme (1) si estos 63 PDFs ya están publicados bajo
"Puzzle Games Press" en KDP/Etsy o siguen sin publicar, y (2) si hace
falta revisar los 63 antes de publicar cualquiera, por los errores de
portada ya encontrados el 2026-09-07 (ej. "Coloring Book - Ocean World"
con el texto de plantilla "Dinosaurios (Niños) · Serie 04" sin depurar).
