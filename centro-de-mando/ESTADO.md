# Estado · 2026-10-08 (barrido diario)

## Lo más urgente hoy
Nada que exija una decisión de dinero hoy. Sin renovaciones a menos de 60
días vista confirmadas. **Sigue sin conexión con el conector
`centro-de-mando`** (502 / CLIENT_HTTP_NOT_IMPLEMENTED): sin datos en vivo
de tareas rotas, avisos, decisiones ni frentes. Último dato conocido: 09-23.
Hoy **no se ha producido ningún borrador nuevo**: no hay base real nueva
(sin datos del conector, sin Gmail, sin encargo nuevo de libro) y no voy a
rellenar con suposiciones.

Novedad menor: `WebFetch` a `drakhthar.com/aldric.html` devolvió hoy
`getaddrinfo ENOTFOUND` (antes `EGRESS_BLOCKED`). Puede ser solo la red de
esta sesión; **no es evidencia fiable** de que el dominio haya caducado, pero
conviene que Antonio compruebe que la web carga y su fecha de caducidad.

## Avisos activos (último dato conocido, 09-23, no refrescado hoy)
- Tareas programadas locales rotas con código `2147946720` / `0x800710E0`:
  "TikTok - seguimiento diario" y "Actualizar Publicado Hoy". Detalle en
  `pendientes/2026-09-23-informe-diagnostico-tareas-programadas-cambio-de-estado.md`.
- "Quick Share Relaunch": sin identificar.
- `drakhthar.com` sigue sin confirmar (ver novedad arriba).
- Aviso de canibalización SEO (09-08) sigue abierto, bloqueado por lo mismo.
- Gmail: sin herramientas en esta sesión; bandeja sin revisar.

## Decisiones pendientes (sin cambios)
- Informe Etsy Fee Calculator (09-07): falta checklist final y decidir si
  fusionar `claude/tienda-etsy-v49wjl`.
- ¿Es `drakhthar.com` de Antonio? Desatasca contabilidad y SEO.
- ¿Qué pasa con "TikTok - seguimiento diario" y "Actualizar Publicado Hoy"
  en el Historial del Programador de tareas?
- ¿Los 63 PDFs de `drakhthar-gifts` están publicados o parados?
- "Etsy Profit Book": faltan CSV real de Etsy 2026, prueba Windows/móvil,
  capturas y vídeo reales; precio sin fijar.
- ¿Qué es "Quick Share Relaunch"?
- Arreglar el conector `centro-de-mando` (lleva caído varios barridos).

## Frentes abiertos
Último dato (09-23): 12 frentes abiertos. Hoy sin datos (conector caído).

## Borradores pendientes de aprobación (todos, con ruta; sin cambios desde 10-01)
- `centro-de-mando/pendientes/2026-10-01-informe-kdp-mercado-infantil-coloring-actividades.md` — mercado infantil colorear/actividades.
- `centro-de-mando/pendientes/2026-09-23-informe-diagnostico-tareas-programadas-cambio-de-estado.md` — cambio de estado en tareas rotas.
- `centro-de-mando/pendientes/2026-09-23-informe-kdp-maze-books.md` — niche research: laberintos.
- `centro-de-mando/pendientes/2026-09-20-informe-diagnostico-4-tareas-rotas-mismo-codigo.md` — diagnóstico de 4 tareas rotas (parcialmente superado).
- `centro-de-mando/pendientes/2026-09-20-informe-kdp-word-search-puzzle-books.md` — sopas de letras.
- `centro-de-mando/pendientes/2026-09-19-informe-kdp-dot-to-dot-connect-the-dots.md` — dot to dot.
- `centro-de-mando/pendientes/2026-09-18-informe-kdp-spot-the-difference.md` — spot the difference.
- `centro-de-mando/pendientes/2026-09-17-informe-qa-etsy-profit-book-primera-prueba-real.md` — QA de "Etsy Profit Book".
- `centro-de-mando/pendientes/2026-09-16-informe-kdp-grayscale-coloring.md` — grayscale coloring.
- `centro-de-mando/pendientes/2026-09-15-informe-kdp-estrategia-series-y-puzzle-games-press.md` — series y "Puzzle Games Press".
- `centro-de-mando/pendientes/2026-09-14-informe-kdp-coloring-books-tendencia-y-catalogo.md` — "Bold & Easy" y catálogo `drakhthar-gifts`.
- `centro-de-mando/pendientes/2026-09-13-informe-diagnostico-elegtupatinete-codigo1.md` — causas del código de salida 1.
- `centro-de-mando/pendientes/2026-09-12-video-guion-etsy-profit-book.md` — guion de vídeo (cerrar modal "Quick guide" antes de Escena 3).
- `centro-de-mando/pendientes/2026-09-11-etsy-listado-etsy-profit-book-borrador.md` — listing de "Etsy Profit Book".
- `centro-de-mando/pendientes/2026-09-10-informe-dominio-drakhthar-encontrado.md` — candidato `drakhthar.com`.
- `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md` — canibalización SEO.
- `centro-de-mando/pendientes/2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md` — primer producto Etsy y checklist.
- `centro-de-mando/pendientes/2026-09-07-informe-niche-research-kdp.md` — nichos para mayores (no encajan con catálogo infantil).
- En la rama sin fusionar `claude/tienda-etsy-v49wjl`: `productos/etsy-fee-calculator/paquete/10-textos-listing.md`, `etsy/09-cinco-productos.md`, `productos/etsy-profit-book/index.html`.

## Pagos/renovaciones
- Sin renovaciones a menos de 60 días vista confirmadas. Próximo pago
  conocido: **2027-07-16**, laiayjudit.com (~16 $, renovación automática
  vía Shopify).

## Datos de contabilidad que faltan por confirmar (Antonio)
- ElegTuPatinete: dominio, proveedor, coste anual, renovación.
- `drakhthar.com`: ¿es tuyo? Si sí: proveedor, coste, renovación.
- Estado de publicación de `drakhthar-gifts`.
- Precio final de "Etsy Profit Book".
- ¿Qué es "Quick Share Relaunch"?

## Correos
Sin acceso a Gmail en esta sesión. Bandeja sin revisar; sin borradores preparados.

## Herramientas disponibles hoy / no disponibles
- **Disponibles:** GitHub (lectura/escritura), `WebSearch`, `WebFetch` (hoy: `ENOTFOUND` en `drakhthar.com`).
- **No disponibles:** conector `centro-de-mando` (502); `add_repo` (no existe como herramienta; el acceso al repo funciona igualmente); Gmail.

## Huecos sin cubrir
- Vídeo: sin herramienta de generación/edición (solo guiones).
- Etsy: sin conector para publicar.
- Contabilidad: sin conector; registro manual.
- Estado real de publicación de los 63 PDFs de `drakhthar-gifts`.
- Dominios de ElegTuPatinete y `drakhthar.com` sin confirmar.
- Tareas locales: sin diagnóstico en vivo.
- Sin barridos registrados del 10-02 al 10-07 aparte de este.

## Frente: tienda Etsy "DrakhtharSoftware"
Catálogo previsto (`etsy/09-cinco-productos.md`): 1) Fee & Price Calculator (construido, listing redactado, pendiente de aprobación); 2) Etsy Profit Book (QA parcial); 3) Listing Image Prep; 4) Reseller Ledger; 5) Paycheck Budget. Decisiones D1–D6 resueltas desde el 09-07 (D6: banda 9–29 € suelto / 39–49 € pack, sujeta a confirmación final).

## Frente: `drakhthar-gifts` (63 PDFs)
Marca confirmada por Antonio: "Puzzle Games Press"; sin listados públicos encontrados. Pendiente confirmar si están publicados y revisar errores de portada del 09-07 (ej. "Ocean World" con texto de plantilla de dinosaurios). Datos de mercado acumulados: 09-14, 09-15, 09-16, 09-18, 09-19, 09-20, 09-23 y 10-01.
