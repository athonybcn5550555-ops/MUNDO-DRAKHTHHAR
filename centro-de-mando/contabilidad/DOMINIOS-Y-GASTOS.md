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
| ElegTuPatinete (dominio y hosting) | Patinetes | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | Búsqueda pública (2026-09-07, repetida 2026-09-08, 2026-09-10 a 2026-09-14) no encuentra el dominio indexado — pendiente de que Antonio confirme si tiene dominio propio o corre sobre otra plataforma |
| **drakhthar.com** (candidato) | Drakhthar / Proyecto JL | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | **2026-09-10:** `WebSearch` encuentra públicamente indexada la página `https://drakhthar.com/aldric.html` ("Aldric — The Wandering Sage · DRAKHTHAR"), con texto que coincide con el proyecto. Coincide en ortografía exacta con "Drakhthar" (no con el dominio distinto y no relacionado `drakthar.com`, una sola h). **No confirmado todavía que sea propiedad de Antonio** — falta que él lo confirme para tratarlo como dato real. **2026-09-11 a 2026-09-14:** repetido el intento de entrar a la web (`WebFetch`) y de buscar el registro WHOIS por `WebSearch` (sin resultado directo, solo páginas genéricas de herramientas WHOIS) — sigue sin poderse verificar titularidad, proveedor ni fecha de caducidad desde esta sesión. |
| Web(s) de Drakhthar / Proyecto JL | Drakhthar | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | Ver fila de arriba (`drakhthar.com`) — candidato encontrado el 09-10, pendiente de confirmación de Antonio |
| Tienda Etsy "DrakhtharSoftware" | Software (utilidades de escritorio) | Etsy (sin dominio propio) | Sin coste fijo — solo comisiones por venta (detalle en `etsy/06-precios-y-comisiones.md`, rama `claude/tienda-etsy-v49wjl`) | No aplica renovación de dominio | No aplica | Rama `claude/tienda-etsy-v49wjl` (comisiones verificadas 2026-09-06) |

## Próximos pagos (ordenado por fecha, solo con datos confirmados)

1. **2027-07-16** — laiayjudit.com, ~16 $ (renovación automática vía Shopify). Sin renovaciones a menos de 60 días vista confirmadas hoy.

## Huecos pendientes de cerrar

- Antonio: para completar esta tabla necesito, por cada web/dominio que
  tengas activo, al menos: nombre del dominio, en qué proveedor está
  (registrador/hosting), qué pagas al año, y cuándo se renueva. Con eso lo
  dejo siempre actualizado y programo un recordatorio automático antes de
  cada renovación, igual que ya existe para laiayjudit.com.
  - **Pregunta concreta, sigue abierta:** ¿es `drakhthar.com` tu web del
    universo Drakhthar / Proyecto JL? Si es así, dime proveedor, coste
    anual y fecha de renovación para dejarlo registrado.
- Sin acceso a un conector de contabilidad/facturación real, este archivo
  es un registro manual mantenido por la Routine diaria — no sustituye una
  herramienta contable de verdad si el volumen crece.
- **2026-09-07 a 09-13:** intentos repetidos de verificar por WHOIS/RDAP
  público la fecha de caducidad de `laiayjudit.com` y `drakhthar.com`, sin
  éxito — bloqueo del proxy de red (`EGRESS_BLOCKED`) a los dominios
  directamente y a herramientas WHOIS (`whois.com`, `www.namecheap.com`,
  `rdap.verisign.com`). `WebSearch` no encuentra tampoco ningún registro
  de dominio público para "ElegTuPatinete".
- **2026-09-14 (hoy):** repetido el mismo intento: `WebFetch` a
  `drakhthar.com/aldric.html` y a `laiayjudit.com` → mismo error
  `EGRESS_BLOCKED` en ambos dominios. `WebSearch` de "drakhthar.com whois
  domain registrant 2026" → mismo resultado que días anteriores: solo
  páginas genéricas de herramientas WHOIS (Dynadot, DNS Robot,
  Registros.com, DMARCguard, Who.is), sin datos reales del registro.
  Ninguna fecha de esta tabla se ha modificado hoy — sigue pendiente de
  que Antonio aporte los datos directamente o de que una sesión futura
  tenga el proxy de red desbloqueado hacia estos dominios.
