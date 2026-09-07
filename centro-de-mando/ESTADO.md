# Estado · 2026-09-07 (creación del sistema)

Foto inicial, tomada al construir el Centro de Mando. A partir de aquí la
Routine diaria la actualiza sola.

## Aviso activo
- `ElegTuPatinete - actualizar precios` terminó con error el 2026-09-07.
  Pendiente: Antonio debe pasar el mensaje de error (la tarea corre en su
  PC local, fuera del alcance de esta sesión) para poder diagnosticarla.

## Decisiones pendientes
- Hay 1 decisión señalada en el parte de hoy del Centro de Mando local sin
  detalle accesible desde aquí. Pendiente de que Antonio la traslade o de
  que el propio Centro de Mando local la exponga con más detalle.

## Frentes abiertos
- 54 frentes abiertos acumulados (KDP, Drakhthar, Etsy, webs), sin desglose
  disponible todavía desde las herramientas conectadas a esta sesión.

## Tareas automáticas ya en marcha (equipo local de Antonio)
Todas reportadas "bien" el 2026-09-07:
- Centro de Mando - turno de noche
- ElegTuPatinete - actualizar precios (bien en el listado general, pero con
  error puntual hoy — ver aviso arriba)
- Escribir artículo diario patinetes
- Informe tráfico webs (cada 3 días)
- KDP Inteligencia - captura única
- Publicar IA para esto automático
- Publicar artículos automático
- Servidor MCP Centro de Mando
- Túnel MCP Centro de Mando
- Vigilancia nichos KDP
- Vigilante webs Antonio

## Frente: tienda Etsy "DrakhtharSoftware" (software de escritorio)
Descubierta el 2026-09-07 en la rama sin fusionar `claude/tienda-etsy-v49wjl`
de este mismo repo. Es un negocio real en marcha, parado en cuanto a
listings activos: 2 ventas históricas, 5.0★ (1 reseña), 3 meses de
antigüedad, **0 artículos activos ahora mismo**.

Catálogo previsto (`etsy/09-cinco-productos.md`), en este orden de
construcción:
1. Etsy Fee & Price Calculator — **YA CONSTRUIDO Y LANZADO** como release
   `calculator-v1.4.0` (instalador Windows, manual en 5 idiomas). No
   publicado todavía como listing activo.
2. Etsy Profit Book — **siguiente en la cola**, hay un WIP sin probar
   (commit `85c454e`).
3. Listing Image Prep
4. Reseller Ledger
5. Paycheck Budget

Decisiones D1–D6 del plan (`etsy/01-plan-lanzamiento.md`), resueltas el
2026-09-07 con Antonio:
- **D1 (nombre de la tienda):** lo gestiona Antonio personalmente. El
  Administrador NO debe tocar el nombre/branding de la tienda, solo vigilar
  su estado.
- **D2 (catálogo):** confirmado el orden de arriba.
- **D3 (plataformas):** Windows primero (ya es lo que hay construido);
  macOS más adelante si el producto vende.
- **D4 (firma de código):** sin firmar por ahora. Usar la alternativa
  gratuita ya prevista en el plan: hash SHA-256 + informe público de
  VirusTotal + vídeo de instalación en el listing.
- **D5 (licencias):** sin clave de licencia por ahora, entrega directa del
  ZIP.
- **D6 (precio ancla):** banda 9–29 € por herramienta suelta, pack a
  39–49 €, sujeto a confirmación final de Antonio antes de publicar
  cualquier listing con precio real.

Pendiente de decidir: si se fusiona el trabajo de esta rama al flujo
diario del Administrador (para que la Routine siga construyendo el
catálogo como borrador) o se sigue trabajando directamente en esa rama.

## Frente: `drakhthar-gifts` (63 PDFs de regalo ya terminados)
Repo separado con 63 libros/cuadernos de actividades en inglés (Antiguo
Egipto, Roma, mitología griega, dinosaurios, capitales del mundo, Segunda
Guerra Mundial...), sin ninguna metadata de negocio (ni tienda, ni
dominio, ni precios). **Pendiente de que Antonio confirme si ya están
publicados en algún sitio o si están terminados y parados.**

## Huecos sin cubrir
- Vídeos publicitarios: sin herramienta conectada.
- Etsy: sin conector para publicar de verdad (solo se puede preparar
  contenido, no subirlo).
- Contabilidad: sin conector real. Registro manual en
  `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md`.
- Libros KDP: los 63 PDFs de `drakhthar-gifts` existen pero su estado de
  publicación real no está confirmado todavía.
- Dominio de "ElegTuPatinete": no se ha podido confirmar públicamente
  (no aparece indexado). Pendiente de que Antonio confirme si tiene
  dominio propio o corre sobre otra plataforma.
