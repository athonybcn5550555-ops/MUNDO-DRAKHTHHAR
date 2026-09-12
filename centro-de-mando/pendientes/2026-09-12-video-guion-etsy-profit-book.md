Estado: PENDIENTE DE APROBACIÓN

Guion de vídeo publicitario (escena a escena, 30-40 s) para "Etsy Profit Book" (producto 2 del catálogo DrakhtharSoftware), listo para grabar/montar — no se ha generado ningún vídeo, solo el texto del guion.

# Aviso importante antes de nada

Este guion se apoya SOLO en funciones ya confirmadas leyendo el código real
de `productos/etsy-profit-book/index.html` (ver
`centro-de-mando/pendientes/2026-09-11-etsy-listado-etsy-profit-book-borrador.md`,
donde está el detalle verificado función por función). El producto sigue
en estado **WIP sin probar** (sin suite de tests, sin verificar en
Windows/navegador real, sin capturas ni vídeo reales todavía) — este
guion no cambia eso. No se graba ni se publica nada hasta que Antonio
apruebe y el producto pase su checklist de calidad.

No hay ninguna herramienta de generación/edición de vídeo conectada a
esta sesión (sigue siendo un hueco señalado en `README.md` y en
`ESTADO.md`); esto es el guion en texto para que quien grabe/monte (Antonio
u otra herramienta) lo use directamente.

---

## Datos del vídeo

- **Producto:** Etsy Profit Book (bookkeeping/profit tracker offline para
  vendedores de Etsy).
- **Duración objetivo:** 30-40 segundos (formato vertical 9:16, pensado
  para TikTok/Reels/Shorts, igual que el resto de la operación de vídeo
  de Antonio).
- **Tono:** directo, sin música de fondo dramática, voz en off clara o
  texto en pantalla — el mismo tono práctico que ya usa el listing.
- **Idioma:** guion en inglés (el mercado del listing es EN), con nota de
  traducción a ES si Antonio quiere una versión también en español.

## Guion escena a escena

**Escena 1 — Gancho (0:00–0:04)**
- Visual: pantalla con una hoja de cálculo desordenada, muchas pestañas,
  cursor buscando algo y sin encontrarlo.
- Texto en pantalla / voz en off: **"Do you actually know your Etsy
  profit? Or just your guess?"**

**Escena 2 — El problema (0:04–0:09)**
- Visual: zoom a una celda de Excel con una fórmula rota / #REF!.
- Voz en off: **"Spreadsheets break. Etsy fees change. Your numbers
  don't add up."**

**Escena 3 — La solución, primer vistazo (0:09–0:14)**
- Visual: pantalla de Etsy Profit Book, dashboard con el gráfico de
  ingresos vs. beneficio por mes (función real: dashboard con KPIs y
  gráfico de barras).
- Voz en off: **"Etsy Profit Book. Import your own Etsy files. See your
  real numbers."**

**Escena 4 — Import real (0:14–0:20)**
- Visual: pantalla del mapeador de columnas al importar el CSV de
  pedidos y el extracto de Etsy Payments (función real: `openMapper`,
  vista previa antes de importar).
- Voz en off: **"Drop in your Orders file and your Payments statement.
  It maps the columns for you — and uses your real fees, not
  estimates."**

**Escena 5 — Sin duplicados / actualizable (0:20–0:24)**
- Visual: texto en pantalla destacando "Re-import anytime — no
  duplicates" (función real confirmada: pedidos ya importados se
  actualizan, no se duplican).
- Voz en off: **"Re-import anytime. Nothing gets duplicated."**

**Escena 6 — Impuestos (0:24–0:29)**
- Visual: pantalla del resumen fiscal trimestral/anual, con el IVA/sales
  tax separado del ingreso propio (función real: `taxRows`,
  `renderTaxes`).
- Voz en off: **"Quarterly and yearly tax summary — sales tax kept
  separate from your own income. Export it, print it, hand it to your
  accountant."**

**Escena 7 — Privacidad / offline (0:29–0:33)**
- Visual: icono de candado o texto "No account. No subscription. No
  cloud." sobre fondo neutro.
- Voz en off: **"Buy once. Works offline. Your data stays on your own
  computer."**

**Escena 8 — Cierre / CTA (0:33–0:38)**
- Visual: logo/nombre del producto + "Etsy Profit Book" + texto "Link in
  bio" o el nombre de la tienda Etsy "DrakhtharSoftware" (a confirmar con
  Antonio cuál usar).
- Voz en off: **"Etsy Profit Book. Know your real profit. Get it on
  Etsy."**

---

## Qué NO incluye este guion (a propósito)

- **No incluye precio.** El precio de este producto sigue sin fijar
  (ver borrador de listing del 2026-09-11: solo un rango orientativo de
  24–29 $, pendiente de que Antonio lo confirme). Ningún guion de vídeo
  debe anunciar un precio hasta que exista uno real.
- **No incluye capturas de pantalla reales** porque todavía no existen
  (el producto no se ha probado en un navegador real esta sesión). Cada
  escena describe QUÉ mostrar, pero grabar la pantalla real toca cuando
  se pruebe la app.
- **No promete idiomas que no existen**: el guion en inglés no menciona
  "5 languages" — el producto solo tiene EN/ES confirmado en el código.
- **No se ha grabado ni montado nada.** Este archivo es solo texto.

## Antes de grabar (checklist)

- [ ] Pasar primero la checklist de calidad del producto (ver borrador
      de listing 2026-09-11): probar import real, Windows limpio,
      capturas reales.
- [ ] Decidir con qué herramienta se graba/monta (no hay ninguna
      conectada a esta sesión).
- [ ] Confirmar precio final antes de que la Escena 8 (CTA) o cualquier
      texto en pantalla lo mencione.
- [ ] Decidir si se hace también una versión en español.
