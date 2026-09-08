Estado: PENDIENTE DE APROBACIÓN

Informe técnico (no toca ninguna web, no es una acción) — explica qué es la "canibalización SEO" que el parte de hoy del Centro de Mando local ha señalado como frente nuevo, y da un plan de diagnóstico y solución paso a paso para que Antonio (o quien tenga acceso a Google Search Console) lo ejecute.

# Qué ha dicho hoy el parte local (09:10, 2026-09-08)

Cita textual del `parte_de_hoy`: "Búsquedas donde varias páginas tuyas compiten entre ellas, parado porque Google no sabe cuál de tus páginas enseñar para esa búsqueda y reparte la fuerza entre todas, así que ninguna sube."

Esta sesión no tiene acceso a Google Search Console, a analítica de las webs de Antonio, ni siquiera a las webs en sí (`WebFetch` sigue bloqueado hoy por el proxy de red — mismo error `EGRESS_BLOCKED` que ayer). Por eso este informe **no puede decir qué páginas concretas compiten** — eso solo lo sabe el Centro de Mando local, que es quien generó el aviso. Lo que sigue es la explicación del problema y el procedimiento estándar para resolverlo, para que se pueda actuar en cuanto se tenga el detalle (o para que el propio Antonio lo mire directamente en Search Console).

# Qué es la canibalización de palabras clave (SEO)

Ocurre cuando dos o más páginas del mismo sitio intentan posicionar para la misma búsqueda (o búsquedas muy parecidas). Google tiene que elegir cuál mostrar, y suele:
- Alternar cuál de las páginas aparece de un día a otro (variabilidad de posición sin razón aparente).
- Mostrar ambas muy abajo, porque ninguna concentra suficientes señales (enlaces internos, clics, tiempo en página) como para destacar con claridad.
- En el peor caso, no mostrar ninguna en primera página aunque el sitio en conjunto tenga autoridad de sobra para el tema.

Es un problema real y muy documentado en SEO — no depende de datos de negocio de Antonio, es mecánica pública de cómo funciona la búsqueda.

# Cómo confirmarlo (sin herramientas de pago)

1. **Google Search Console → Rendimiento → Páginas.** Filtrar por la consulta sospechosa y mirar cuántas páginas del dominio reciben impresiones para esa misma consulta. Si hay 2+ con impresiones repartidas y ninguna con CTR ni posición clara, es canibalización.
2. **Búsqueda manual `site:tudominio.com "frase exacta de la búsqueda"`** en Google, en una ventana de incógnito. Si salen varias páginas propias con títulos/meta muy parecidos, confirma el diagnóstico a simple vista.
3. Revisar si esas páginas comparten el mismo H1/título o el mismo cluster de palabras clave en el plan de contenidos (si existe uno).

# Plan de solución estándar (elegir según el caso, una vez identificadas las páginas)

- **Si una página es claramente mejor (más completa, más enlaces, más tráfico):** reforzarla como "página principal" del tema — enlazar internamente hacia ella desde el resto del sitio, y recortar o fusionar el contenido de la página débil dentro de ella.
- **Si las dos aportan valor distinto:** diferenciar el enfoque de cada una (título, intención de búsqueda) para que dejen de competir por la misma consulta — p. ej. una para "comparativa" y otra para "guía de compra", en vez de las dos para el mismo término genérico.
- **Si una de las dos ya no aporta nada:** redirigir (301) la débil hacia la fuerte y retirarla del sitemap.
- **Etiqueta canónica (`rel=canonical`):** si ambas páginas deben seguir existiendo pero una es la "oficial" para buscadores, apuntar el canonical de la débil hacia la fuerte.
- Evitar crear una tercera página nueva sobre el mismo tema hasta resolver esto — añadiría más ruido, no menos.

# Lo que se necesita de Antonio para pasar de la teoría a la acción

- El dominio o dominios afectados (esta sesión no tiene ningún dominio de Antonio confirmado y accesible — ver huecos en `DOMINIOS-Y-GASTOS.md`).
- Acceso de lectura a Google Search Console de esas webs (no hay conector de Search Console en esta sesión), o que el Centro de Mando local traslade qué páginas exactas compiten, ya que es él quien generó el aviso con ese detalle.
- Con esos dos datos, la próxima sesión sí puede proponer el plan concreto (qué página queda, qué se fusiona, qué se redirige) en vez de este plan genérico.

# Lo que este informe NO hace

No modifica ninguna web, no toca ningún archivo de ninguna de las páginas afectadas, no inventa cuáles son las páginas en conflicto ni qué buscas compiten — eso no está confirmado y no se supone.
