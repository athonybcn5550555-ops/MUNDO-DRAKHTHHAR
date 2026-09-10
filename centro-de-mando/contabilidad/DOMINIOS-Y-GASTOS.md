# Dominios, hosting y gastos recurrentes

Registro real de lo que hay que pagar, cuándo y por qué negocio. Solo se
apunta lo que se sabe con certeza (factura, panel de control, recordatorio
ya confirmado) — nunca una cifra o fecha supuesta. Lo que falta se deja en
blanco con "FALTA CONFIRMAR" hasta que Antonio lo aporte o la Routine lo
verifique con una fuente pública (ej. WHOIS para fecha de caducidad; el
coste real solo lo sabe Antonio, por factura).

## Tabla

| Activo (dominio/web) | Negocio | Proveedor | Coste anual | Próxima renovación | Renovación automática | Fuente del dato |
|---|---|---|---|---|---|---|
| laiayjudit.com | Laia & Judit (cosmética) | Shopify | ~16 $ | 2027-07-16 | Sí (activada) | Recordatorio programado por Antonio el 2026-07-30 (trigger existente) |
| ElegTuPatinete (dominio y hosting) | Patinetes | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | Búsqueda pública (2026-09-07, repetida 2026-09-08 y 2026-09-10) no encuentra el dominio indexado — pendiente de que Antonio confirme si tiene dominio propio o corre sobre otra plataforma |
| **drakhthar.com** (candidato) | Drakhthar / Proyecto JL | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | **Nuevo 2026-09-10:** `WebSearch` encuentra públicamente indexada la página `https://drakhthar.com/aldric.html` ("Aldric — The Wandering Sage · DRAKHTHAR"), con texto que coincide con el proyecto ("nació en la mesa del comedor del creador, entre una impresora 3D y un cuaderno de bocetos, con cada dragón, cada Nombrado y cada región"). Coincide en ortografía exacta con "Drakhthar" (no con el dominio distinto y no relacionado `drakthar.com`, una sola h, que aparece en resultados de un verificador de webs y no tiene relación aparente). **No confirmado todavía que sea propiedad de Antonio** — falta que él lo confirme para tratarlo como dato real. `WebFetch` a `drakhthar.com` sigue bloqueado (`EGRESS_BLOCKED`), así que no se ha podido entrar a la web para verificar más. |
| Web(s) de Drakhthar / Proyecto JL | Drakhthar | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | Ver fila de arriba (`drakhthar.com`) — candidato encontrado hoy, pendiente de confirmación de Antonio |
| Tienda Etsy "DrakhtharSoftware" | Software (utilidades de escritorio) | Etsy (sin dominio propio) | Sin coste fijo — solo comisiones por venta (detalle en `etsy/06-precios-y-comisiones.md`, rama `claude/tienda-etsy-v49wjl`) | No aplica renovación de dominio | No aplica | Rama `claude/tienda-etsy-v49wjl` (comisiones verificadas 2026-09-06) |

## Próximos pagos (ordenado por fecha, solo con datos confirmados)

1. **2027-07-16** — laiayjudit.com, ~16 $ (renovación automática vía Shopify).

## Huecos pendientes de cerrar

- Antonio: para completar esta tabla necesito, por cada web/dominio que
  tengas activo, al menos: nombre del dominio, en qué proveedor está
  (registrador/hosting), qué pagas al año, y cuándo se renueva. Con eso lo
  dejo siempre actualizado y programo un recordatorio automático antes de
  cada renovación, igual que ya existe para laiayjudit.com.
  - **Pregunta concreta de hoy:** ¿es `drakhthar.com` tu web del universo
    Drakhthar / Proyecto JL? Si es así, dime proveedor, coste anual y
    fecha de renovación para dejarlo registrado.
- Sin acceso a un conector de contabilidad/facturación real, este archivo
  es un registro manual mantenido por la Routine diaria — no sustituye una
  herramienta contable de verdad si el volumen crece.
- **2026-09-07:** intento de verificar por WHOIS/RDAP público la fecha de
  caducidad de `laiayjudit.com` fallido — esa sesión tenía bloqueado por
  el proxy de red el acceso a `whois.com`, `rdap.verisign.com` y al propio
  dominio (`EGRESS_BLOCKED`). Solo `WebSearch` funcionaba, y no devuelve el
  registro WHOIS en sí, solo páginas genéricas sobre qué es un WHOIS. La
  fecha de renovación de `laiayjudit.com` sigue siendo la del recordatorio
  que programó Antonio, sin verificación pública adicional. Ninguna fecha
  se ha modificado sin esa verificación.
- **2026-09-08:** repetido el intento — mismo resultado. `WebFetch` a
  `laiayjudit.com` sigue devolviendo `EGRESS_BLOCKED`, y `WebSearch` para
  "laiayjudit.com" no encuentra el dominio (solo resultados de un negocio
  distinto, "laijau.com", en Nepal). Tampoco se ha encontrado por búsqueda
  pública ningún registro de dominio para "ElegTuPatinete".
- **2026-09-10:** repetido el intento hoy — mismo bloqueo (`EGRESS_BLOCKED`)
  en `laiayjudit.com`, `www.namecheap.com` (herramienta WHOIS pública) y
  `drakhthar.com`. `WebSearch` para `site:laiayjudit.com` sigue sin
  encontrar nada del dominio real. Como novedad, `WebSearch` sí encontró
  el candidato `drakhthar.com` (ver tabla arriba) — pendiente de
  confirmación de Antonio. Sin acceso de red a los dominios en sí, esta
  sesión no puede verificar caducidades por WHOIS directamente; sigue
  pendiente de que Antonio aporte los datos o de que una sesión futura
  tenga el proxy de red desbloqueado.
