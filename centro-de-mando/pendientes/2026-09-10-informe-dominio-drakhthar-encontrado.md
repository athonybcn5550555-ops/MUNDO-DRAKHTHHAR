Estado: PENDIENTE DE APROBACIÓN

Informe técnico (no toca ninguna web, no es una acción) — explica el hallazgo de hoy de un dominio público `drakhthar.com` que podría ser la web de Proyecto JL / universo Drakhthar, y cómo usarlo para desbloquear el informe de canibalización SEO del 2026-09-08.

# Qué se ha encontrado hoy (2026-09-10)

Con `WebSearch` (sin acceso directo a la web — `WebFetch` sigue bloqueado por el proxy de red, error `EGRESS_BLOCKED`, igual que en sesiones anteriores) han aparecido resultados indexados de un dominio `drakhthar.com`:

- `https://drakhthar.com/aldric.html` — título "Aldric — The Wandering Sage · DRAKHTHAR".
- El resumen que devuelve la búsqueda describe el proyecto con un lenguaje muy específico: "nació en la mesa del comedor del creador, entre una impresora 3D y un cuaderno de bocetos, con cada dragón, cada Nombrado y cada región pasando por sus manos", y describe a "Aldric" como un mago itinerante de las Crónicas de Drakhthar.
- También existe una variante de URL sin `.html` (`https://drakhthar.com/aldric`) indexada por separado — mismo contenido, dos URLs distintas. Esto por sí solo ya podría ser una fuente de canibalización/contenido duplicado si ambas versiones están indexadas y no hay una redirección o `rel=canonical` entre ellas (dato a confirmar con acceso real a la web o a Search Console).

**Importante — lo que esto NO es:** una confirmación de que `drakhthar.com` sea propiedad de Antonio. La ortografía coincide exactamente con "Drakhthar" (con h intercalada, como en el nombre de este mismo repositorio y en "universo Drakhthar"), y el contenido descrito encaja con un proyecto personal de worldbuilding — pero esta sesión no tiene forma de verificar titularidad (no hay acceso a WHOIS ni a ningún panel de dominios). No confundir con `drakthar.com` (una sola h), un dominio distinto y sin relación aparente que aparece en un verificador de webs de terceros (Scamadviser) — no es el mismo sitio y no se ha investigado más por no ser relevante.

# Por qué importa para el frente abierto de canibalización SEO

El informe `centro-de-mando/pendientes/2026-09-08-informe-canibalizacion-seo-diagnostico-y-plan.md` quedó parado porque el aviso del Centro de Mando local no traía el dominio afectado, y esta sesión no tenía ningún dominio de Antonio confirmado con el que cruzar el dato. Si `drakhthar.com` es en efecto la web de Antonio, ya hay un dominio real sobre el que:

- Repetir la comprobación `site:drakhthar.com "frase exacta"` en Google (manualmente, o desde una sesión con `WebFetch` desbloqueado) para ver cuántas páginas propias compiten por la misma búsqueda.
- Revisar en Search Console (si Antonio tiene acceso) el rendimiento de `drakhthar.com` filtrado por página, ya con un dominio concreto que mirar en vez de "algún dominio de Antonio".

# Qué se necesita de Antonio para avanzar

1. Confirmar si `drakhthar.com` es su dominio (sí/no).
2. Si es que sí: proveedor, coste anual y fecha de renovación, para completar `centro-de-mando/contabilidad/DOMINIOS-Y-GASTOS.md` (hoy en "FALTA CONFIRMAR").
3. Si tiene acceso a Search Console de esa web, sería el dato que de verdad resuelve el informe de canibalización del 09-08 sin depender de que se desbloquee `WebFetch`.

# Lo que este informe NO hace

No modifica ninguna web, no publica nada, no asume que `drakhthar.com` sea de Antonio ni inventa datos de coste o proveedor — todo queda marcado como pendiente de confirmación.
