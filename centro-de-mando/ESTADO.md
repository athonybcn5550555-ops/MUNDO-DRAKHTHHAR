# Estado · 2026-09-11 (barrido de la mañana)

## Aviso activo
- **Buena noticia: "ElegTuPatinete - actualizar precios" ya no aparece
  rota.** Confirmado en vivo con `estado_de_las_tareas`: hoy las **13**
  tareas programadas del equipo local aparecen "bien", incluida esa. El
  09-10 era la única rota (código 1). No hay explicación desde aquí de
  qué la arregló — si Antonio no tocó nada, puede volver a fallar sola
  como ya pasó el 09-08 (desapareció el aviso sin explicación y volvió el
  09-10); vale la pena confirmarlo en el propio Programador de tareas de
  Windows si hay ocasión.
- **Discrepancia en "frentes abiertos" — señalada, no resuelta.** El
  `ESTADO.md` del 09-10 recogía **18 frentes abiertos** según el parte
  local de ese día. El `parte_de_hoy` de hoy dice textualmente "no hay
  frentes nuevos desde la última vez" y "de lo ya sabido siguen abiertos
  **2 frentes**". Esta sesión no tiene forma de saber si de verdad se
  cerraron 16 frentes de golpe, si cambió la forma de contar del Centro
  de Mando local, o si es un dato inestable — se deja constancia en vez
  de asumir ninguna de las tres.
- **`drakhthar.com` sigue sin confirmar.** Repetido hoy el intento de
  entrar a la web (`WebFetch`, error `EGRESS_BLOCKED`, igual que en
  `laiayjudit.com`) y de buscar el registro WHOIS por `WebSearch` (solo
  aparecen páginas genéricas de herramientas WHOIS de terceros, sin el
  registro real). Sigue sin confirmarse que sea de Antonio. Detalle en
  `centro-de-mando/pendientes/2026-09-10-informe-dominio-drakhthar-encontrado.md`
  y en `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.
- Sigue abierto (sin cambios) el aviso de canibalización SEO señalado el
  09-08: `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md`.
  Sigue bloqueado por lo mismo: sin dominio confirmado ni acceso a Search
  Console.

## Decisiones pendientes
- El `parte_de_hoy` de hoy dice "hay 2 decisión que toca revisar hoy para
  saber si acertamos" (igual que el 09-10), sin detalle accesible desde
  esta sesión. Pendiente de que Antonio las traslade o de que el Centro
  de Mando local las exponga con más detalle.
- Sigue sin resolver la decisión ya señalada el 2026-09-07 sobre el
  informe `2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`:
  falta la checklist final (imágenes/vídeo, pruebas en Windows limpio,
  VirusTotal, verificación de comisiones UK/CA/AU, alta NIF-IVA) antes de
  publicar el primer listing.
- **Nueva hoy:** confirmar si `drakhthar.com` es de Antonio (ver aviso
  activo arriba) — desatasca dos frentes a la vez (contabilidad de
  dominios y el informe de canibalización SEO).

## Frentes abiertos
- El parte de hoy cuenta **2 frentes abiertos** (ver discrepancia con el
  dato del 09-10 en "Aviso activo" — no se puede confirmar el desglose
  desde esta sesión).

## Tareas automáticas del equipo local de Antonio
Consultado en vivo hoy (`estado_de_las_tareas`): **13 tareas**, las
**13 "bien"** — ninguna rota hoy (ver aviso activo sobre
"ElegTuPatinete"). Lista completa: Actualizar Publicado Hoy · Centro de
Mando - turno de noche · ElegTuPatinete - actualizar precios · Escribir
artículo diario patinetes · Informe tráfico webs (cada 3 días) · KDP
Inteligencia - captura única · Publicar IA para esto automático ·
Publicar artículos automático · Servidor MCP Centro de Mando · TikTok -
seguimiento diario · Túnel MCP Centro de Mando · Vigilancia nichos KDP ·
Vigilante webs Antonio.

## Borradores pendientes de aprobación (todos, con ruta)
- `centro-de-mando/pendientes/2026-09-11-etsy-listado-etsy-profit-book-borrador.md`
  — **nuevo hoy.** Borrador de listing (título, tags, descripción) para
  "Etsy Profit Book" (producto 2 del catálogo DrakhtharSoftware),
  redactado leyendo directamente el código de
  `productos/etsy-profit-book/index.html` (rama `claude/tienda-etsy-v49wjl`)
  para no inventar funciones. **No es un aviso de "listo para publicar"**:
  el producto sigue sin pruebas reales (sin suite de tests, sin probar en
  Windows limpio, sin capturas ni vídeo) — el archivo incluye su propia
  checklist antes de publicar, calcada de la del producto 1.
- `centro-de-mando/pendientes/2026-09-10-informe-dominio-drakhthar-encontrado.md`
  — informe: candidato de dominio `drakhthar.com` encontrado por búsqueda
  pública, pendiente de que Antonio confirme si es suyo. Sin novedad
  hoy más allá de reconfirmar que sigue sin poder verificarse (ver aviso
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
  fuentes públicas. Repetida hoy una búsqueda general de nichos KDP 2026:
  mismo patrón que días anteriores — solo blogs/guías de terceros
  vendiendo "listas de nichos" (bookfoundry.ai, kdpbuilder.com,
  lowcontentprofits.com, inkfluenceai.com, kdpeasy.com, entre otros), sin
  datos verificables de Amazon. No se añade nada nuevo al informe por no
  tener fuente fiable, tal y como pide la regla de oro. Reconfirmado
  también hoy (cuarta vez) que "Puzzle Games Press" sigue sin aparecer en
  ningún listado público de Amazon ni Etsy.
- (De sesiones anteriores, en la rama sin fusionar `claude/tienda-etsy-v49wjl`,
  no en `pendientes/`): `productos/etsy-fee-calculator/paquete/10-textos-listing.md`
  con el listing completo del primer producto de Etsy, listo para
  copiar/pegar en cuanto Antonio apruebe publicar; `etsy/09-cinco-productos.md`
  con el research completo de los 5 productos, usado hoy como base del
  borrador de listing del producto 2.
- `productos/etsy-profit-book/index.html` — producto 2 de 5 del catálogo
  Etsy, WIP sin probar todavía (sin suites de test), pero **ya tiene
  listing redactado hoy** (ver primer punto de esta lista). Funciones
  reales confirmadas leyendo el código: dashboard, import de pedidos y de
  extracto de Etsy Payments con mapeador de columnas y reconciliación,
  gastos por categoría, resumen fiscal trimestral/anual, copia de
  seguridad, datos de ejemplo, 2 idiomas (EN/ES).

## Pagos/renovaciones
- Sin renovaciones a menos de 60 días vista confirmadas. Próximo pago
  conocido: **2027-07-16**, laiayjudit.com (~16 $, renovación automática
  vía Shopify) — muy lejos, no urgente.
- Repetido hoy el intento de verificar por WHOIS/RDAP público
  `laiayjudit.com` y `drakhthar.com`, y de localizar el dominio de
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
  búsquedas públicas de Amazon/Etsy, reconfirmado hoy por cuarta vez).
- **Nuevo hoy:** precio final de "Etsy Profit Book" (producto 2) — el
  borrador de listing de hoy deja el precio sin fijar, con solo el rango
  orientativo del research (24–29 $) y la banda general ya acordada
  (9–29 € suelto / 39–49 € pack).

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
  - `WebFetch`: bloqueada (`EGRESS_BLOCKED`) hoy en `laiayjudit.com` y
    `drakhthar.com`. No se ha podido comprobar directamente ninguna web
    de Antonio.
  - Gmail: sin herramientas `mcp__Gmail__*` cargadas en esta sesión.
  - Herramientas locales `mcp__centro-de-mando__escribir_articulo_de_patinetes_ahora`
    y `mcp__centro-de-mando__publicar_articulos_pendientes_ahora`
    aparecen listadas pero **no se han usado**: la primera generaría
    contenido fuera del flujo de borrador/aprobación de este repo y la
    segunda publica de verdad — ambas quedan fuera de la regla de oro de
    esta Routine (nunca publicar, y todo el contenido nuevo pasa por
    `centro-de-mando/pendientes/`).

## Huecos sin cubrir
- Vídeos publicitarios: sin herramienta conectada.
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
- "Etsy Profit Book": listing ya redactado hoy, pero sigue faltando toda
  la parte de pruebas reales (ver checklist en el borrador de hoy).

## Frente: tienda Etsy "DrakhtharSoftware" (software de escritorio)
Catálogo previsto (`etsy/09-cinco-productos.md`):
1. Etsy Fee & Price Calculator — construido, probado, listing redactado.
   Pendiente de aprobación para publicar (ver informe del 2026-09-07 y
   checklist correspondiente).
2. Etsy Profit Book — WIP sin probar (`productos/etsy-profit-book/index.html`,
   rama `claude/tienda-etsy-v49wjl`). **Listing redactado hoy** (ver
   borrador nuevo arriba), pero sigue pendiente de pruebas reales antes de
   poder considerarse listo.
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
"Puzzle Games Press". Reconfirmado hoy por cuarta vez que sigue sin
aparecer ningún listado público bajo esa marca en Amazon ni Etsy. Sigue
pendiente de que Antonio confirme (1) si estos 63 PDFs ya están publicados
bajo "Puzzle Games Press" en KDP/Etsy o siguen sin publicar, y (2) si hace
falta revisar los 63 antes de publicar cualquiera, por los errores de
portada ya encontrados el 2026-09-07 (ej. "Coloring Book - Ocean World"
con el texto de plantilla "Dinosaurios (Niños) · Serie 04" sin depurar).
