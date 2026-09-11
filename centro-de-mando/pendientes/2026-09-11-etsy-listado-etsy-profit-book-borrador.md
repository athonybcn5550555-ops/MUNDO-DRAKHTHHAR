Estado: PENDIENTE DE APROBACIÓN

Borrador de listing en inglés para "Etsy Profit Book" (producto 2 del catálogo DrakhtharSoftware), redactado hoy leyendo el código real de `productos/etsy-profit-book/index.html` (rama `claude/tienda-etsy-v49wjl`) para no inventar ninguna función, y cruzado con las quejas reales de compradores recogidas en `etsy/09-cinco-productos.md` (2026-09-06) — no sustituye la checklist de calidad que sí tiene el producto 1, ver aviso al final.

# Aviso importante antes de nada

A diferencia de "Etsy Fee & Price Calculator" (producto 1, ya con informe
`2026-09-07-informe-etsy-fee-calculator-listo-para-publicar.md`), este
producto **sigue en estado WIP sin probar** según `ESTADO.md`: no hay
suite de tests, no se ha verificado en un Windows limpio, no hay capturas
de pantalla reales ni vídeo. Este archivo es solo el texto del listing,
para que esté listo el día que Antonio decida probar y pulir la app. No es
una recomendación de publicar ya.

Todo lo que describo abajo lo he verificado leyendo directamente las
cadenas de texto e IDs del HTML (`I18N.en`, `I18N.es`, `VERIFIED`,
`PROFILES`/`c:{...}`, nombres de función como `parseCSV`, `openMapper`,
`stmtDeposits`, `taxRows`) — no he ejecutado la app en un navegador real,
así que "funciona" aquí significa "está en el código", no "verificado en
uso". Eso es justo lo que falta antes de publicar.

---

## Qué hace de verdad (confirmado en el código, nada más)

- Dashboard con KPIs y gráfico de barras (ingresos vs. beneficio) por
  mes/trimestre/año, filtro de periodo.
- Importa el CSV de pedidos de Etsy (Shop Manager → Settings → Options →
  Download Data → Orders) con un mapeador de columnas que enseña la
  vista previa antes de importar; los pedidos ya importados se
  actualizan, no se duplican (`doImport`, nota `tImported`).
- Importa el CSV del extracto mensual de Etsy Payments (Finances →
  Payment account → Monthly statements) y con eso usa las comisiones
  reales cobradas en vez de estimarlas, comprobando depósitos
  (`stmtFees`, `stmtDeposits`, `stmtRefunds`).
- Gastos manuales por categoría, con nota y fecha.
- Resumen fiscal por trimestre y año, separando el impuesto de ventas/IVA
  que cobra y liquida Etsy (no es ingreso del vendedor) — exportable a
  CSV e imprimible/PDF (`taxRows`, `renderTaxes`).
- Ajustes de comisiones editables por país, con fecha de verificación
  visible en pantalla: **"Fee defaults were verified on 2026-09-06 for
  the US, Spain, France, Italy and Germany"** (constante `VERIFIED` en el
  propio código — cadena literal, no soy yo quien pone la fecha). Otros
  países disponibles en el selector (Reino Unido, Canadá, Australia, UE
  genérico, "Otro/personalizado") pero sin la misma verificación.
- Copia de seguridad exportable/importable en JSON; todo se guarda solo
  en `localStorage` del navegador — nada se sube a ningún sitio.
- Datos de ejemplo cargables para ver la app llena antes de meter datos
  reales (`loadExample`, aviso `exampleNote` visible mientras están
  activos).
- **Dos idiomas, no cinco:** inglés y español únicamente (detecta el
  idioma del navegador). A diferencia del producto 1 (Fee & Price
  Calculator, 5 idiomas), aquí **no** hay francés, alemán ni italiano en
  el código — ningún texto del listing debe prometerlos.

## Qué NO puedo confirmar todavía (para la checklist antes de publicar)

- Que el mapeador de columnas realmente adivine bien las cabeceras de un
  CSV real de Etsy 2026 (el research del 09-06 avisa de que Etsy ha
  cambiado formatos de exportación antes).
- Que funcione igual en Windows/Mac/móvil — cero pruebas manuales hechas
  esta sesión (sin navegador disponible aquí).
- Peso real del archivo en KB (el listing de referencia del producto 1 sí
  lo dice; aquí no lo invento sin medirlo).
- Capturas de pantalla e imágenes del listing: no existen todavía.

---

## Título (borrador, 137 de 140 caracteres — a validar tras probar la app)

```
Etsy Bookkeeping App & Profit Tracker Alternative to Spreadsheets | Seller Accounting Software, Offline, One-Time Purchase
```

## Tags (borrador, 13, ninguno pasa de 20 caracteres)

| # | Tag | Caracteres |
|---|---|---|
| 1 | `etsy bookkeeping` | 17 |
| 2 | `etsy profit tracker` | 20 |
| 3 | `seller accounting` | 18 |
| 4 | `etsy seller tool` | 17 |
| 5 | `small business tool` | 20 |
| 6 | `etsy shop finances` | 19 |
| 7 | `profit and loss` | 16 |
| 8 | `tax prep etsy` | 14 |
| 9 | `handmade business` | 18 |
| 10 | `offline software` | 17 |
| 11 | `one time purchase` | 18 |
| 12 | `instant download` | 17 |
| 13 | `etsy seller gift` | 17 |

## Descripción (borrador)

```
Know your real profit, not your guess. Import Etsy's own files and get bookkeeping that reconciles itself.

Buy once. Works offline. No account, no subscription.

WHAT IT DOES
• Import your Orders CSV and your Etsy Payments monthly statement CSV directly from Shop Manager — the app maps the columns for you and shows a preview before importing
• Already-imported orders get updated, not duplicated, so you can re-import anytime
• Uses your actual Etsy fees from the statement instead of estimates, and flags deposits so nothing goes missing
• Track expenses by category with notes, ready for your accountant
• Quarterly and yearly tax summary, with sales tax / VAT that Etsy collects and remits shown separately from your own income
• Dashboard with monthly revenue vs. profit chart and KPIs
• Export any table to CSV, print the tax summary to PDF

WHY NOT A SPREADSHEET
No Excel, no Google Sheets, no Apple Numbers. Nothing to break when you clear the example data, no read-only links, no "request access." One file that opens with a double click — even offline.

TWO LANGUAGES
English and Spanish, detected automatically from your browser.

FEE ACCURACY
On-screen fee defaults with the exact date they were last checked, editable per country (US, Spain, France, Italy, Germany verified; UK, Canada, Australia and other EU countries selectable and editable). Import your real statement and the app uses Etsy's actual numbers instead.

YOUR DATA
Everything stays inside your own browser. Nothing is uploaded anywhere. Export a backup file anytime and restore it on another computer.

HOW DELIVERY WORKS
Instant download. Please download from a web browser — the Etsy mobile app cannot download files.

REFUNDS
Digital files cannot be returned. If it does not work on a browser that meets the requirements, message me first: I will get it running or refund you.

SUPPORT
Message support and minor updates included for 30 days after purchase. I answer within 24 hours.
```

*(Faltan por confirmar antes de publicar: peso exacto del archivo, lista
final de qué incluye el ZIP (Start-Here.pdf en qué idiomas, LICENSE.txt),
y cualquier ajuste al texto según lo que salga de las pruebas reales.)*

## Precio — SOLO orientativo, no decidido

`etsy/09-cinco-productos.md` marca un precio ancla de **24–29 $** para
este producto (categoría "contabilidad", la de mayor valor de las cinco).
`ESTADO.md` recoge además la banda general ya acordada con Antonio:
9–29 € suelto / 39–49 € en pack, **sujeta a confirmación final antes de
publicar con precio real** — no fijo un precio en este borrador, queda
para cuando Antonio lo confirme, igual que con el producto 1.

## Checklist antes de publicar (calcada de la del producto 1, adaptada)

- [ ] Probar el import real de un CSV de pedidos de Etsy actual (formato
      2026) y del extracto mensual de Etsy Payments.
- [ ] Probar en Windows limpio, y en móvil/tablet.
- [ ] Medir el peso real del archivo HTML.
- [ ] Capturas de pantalla reales (dashboard, import con mapeador,
      resumen fiscal) y vídeo de 5–15 s.
- [ ] Pasar por VirusTotal antes de subir el ZIP.
- [ ] Confirmar precio final con Antonio.
- [ ] Confirmar de nuevo que solo hay 2 idiomas antes de traducir
      cualquier imagen o texto de marketing a otro idioma.

# Lo que este borrador NO hace

No publica nada en Etsy, no fija un precio, no inventa capturas ni
métricas de peso de archivo, y no declara el producto listo — solo dejo
el texto redactado y verificado contra el código real para ahorrar tiempo
cuando Antonio decida probarlo.
