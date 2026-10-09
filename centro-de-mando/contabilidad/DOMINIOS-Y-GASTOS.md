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
| ~~laiayjudit.com~~ (DADO DE BAJA) | Laia & Judit (cosmética) | Shopify (ya no se usa) | Sin coste: ya no se paga | **No hay renovación** | No aplica | **Antonio, 2026-10-09:** "Shopify ya no lo tenemos, no hay renovación". Sustituye al dato anterior (~16 $, 2027-07-16, recordatorio de 2026-07-30). Pendiente de que Antonio diga si hay que cancelar también el recordatorio programado existente. |
| ElegTuPatinete (dominio y hosting) | Patinetes | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | Búsqueda pública (2026-09-07, repetida 2026-09-08, 2026-09-10 a 2026-09-23) no encuentra el dominio indexado — pendiente de que Antonio confirme si tiene dominio propio o corre sobre otra plataforma |
| **drakhthar.com** (candidato) | Drakhthar / Proyecto JL | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | **2026-09-10:** `WebSearch` encuentra públicamente indexada la página `https://drakhthar.com/aldric.html` ("Aldric — The Wandering Sage · DRAKHTHAR"), con texto que coincide con el proyecto. Coincide en ortografía exacta con "Drakhthar" (no con el dominio distinto y no relacionado `drakthar.com`, una sola h). **No confirmado todavía que sea propiedad de Antonio** — falta que él lo confirme para tratarlo como dato real. **2026-09-11 a 2026-10-09:** repetidos los intentos de entrar a la web (`WebFetch`: `EGRESS_BLOCKED`, luego `ENOTFOUND`) y de buscar el registro WHOIS — sigue sin poderse verificar titularidad, proveedor ni fecha de caducidad desde esta sesión. |
| Web(s) de Drakhthar / Proyecto JL | Drakhthar | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | FALTA CONFIRMAR | Ver fila de arriba (`drakhthar.com`) — candidato encontrado el 09-10, pendiente de confirmación de Antonio |
| Tienda Etsy "DrakhtharSoftware" | Software (utilidades de escritorio) | Etsy (sin dominio propio) | Sin coste fijo — solo comisiones por venta (detalle en `etsy/06-precios-y-comisiones.md`, rama `claude/tienda-etsy-v49wjl`) | No aplica renovación de dominio | No aplica | Rama `claude/tienda-etsy-v49wjl` (comisiones verificadas 2026-09-06) |

## Próximos pagos (ordenado por fecha, solo con datos confirmados)

Ninguno confirmado ahora mismo. (Antes figuraba laiayjudit.com, 2027-07-16;
Antonio confirmó el 2026-10-09 que Shopify ya no existe y no hay renovación.)

## Huecos pendientes de cerrar

- Antonio: para completar esta tabla necesito, por cada web/dominio que
  tengas activo, al menos: nombre del dominio, en qué proveedor está
  (registrador/hosting), qué pagas al año, y cuándo se renueva. Con eso lo
  dejo siempre actualizado y programo un recordatorio automático antes de
  cada renovación.
  - **Pregunta concreta, sigue abierta:** ¿es `drakhthar.com` tu web del
    universo Drakhthar / Proyecto JL? Si es así, dime proveedor, coste
    anual y fecha de renovación para dejarlo registrado.
  - **Nueva:** el recordatorio programado de laiayjudit.com (creado el
    2026-07-30) ya no tiene sentido; desde esta sesión no puedo borrarlo.
    ¿Lo cancelas tú? Y ¿el dominio laiayjudit.com sigue siendo tuyo en
    algún registrador aparte de Shopify, o también lo has soltado?
- Sin acceso a un conector de contabilidad/facturación real, este archivo
  es un registro manual mantenido por la Routine diaria — no sustituye una
  herramienta contable de verdad si el volumen crece.
- **2026-09-07 a 10-09:** intentos repetidos de verificar por WHOIS/RDAP
  público la fecha de caducidad de `drakhthar.com`, sin éxito — bloqueo o
  fallo de red de la sesión (`EGRESS_BLOCKED` / `ENOTFOUND`). `WebSearch`
  no encuentra tampoco ningún registro de dominio público para
  "ElegTuPatinete". Ninguna fecha ni cifra se ha inventado.
