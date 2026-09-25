# 04 · Textos de tienda (About, políticas, FAQ, mensajes)

Borradores en inglés porque el mercado objetivo es internacional. Etsy
traduce automáticamente al idioma del comprador. Revisa los datos entre
corchetes antes de publicar.

## Shop announcement (2 líneas)

```
Small desktop tools that do the boring part. Buy once, use offline, no subscriptions.
Need it adapted? Any app can be customized for you. Message me for a quote.
```

## About (Información básica)

```
I'm [Name], an independent developer based in Spain.

I build small, focused tools for Windows and Mac for the tasks nobody enjoys: renaming, converting, cleaning, batching. Each one does one job well, runs on your computer without an internet connection, and is yours after a single purchase. No accounts, no monthly fees, no data leaving your machine.

Every tool in this shop is designed and built by me. If something doesn't work on your setup, send me a message: I answer within 24 hours.

Custom versions: I can adapt any app in this shop to your business, shop or classroom: your logo and colors, your language, your own fields and categories. Send me a message describing what you need and I'll reply with a price and a delivery date before you pay anything.
```

Etsy pide declarar quién crea los artículos digitales: añade a la persona
en "Miembros de la tienda" con el rol de diseñador/creador.

## Políticas de la tienda (productos digitales)

```
DIGITAL DELIVERY
All items are digital downloads. No physical product will be shipped. Files are available from your Etsy purchases page immediately after payment.

REFUNDS AND CANCELLATIONS
Digital files cannot be returned. By purchasing, you agree to immediate delivery of the digital content and acknowledge that the 14-day right of withdrawal under EU consumer law does not apply once the download is made available.
If the software does not run on a system that meets the listed requirements, message me within 14 days. I will help you fix it or issue a refund.

SUPPORT
Message support and free minor updates are included for 30 days after purchase. Updates are delivered by re-uploading the files to the listing; re-download from your purchases page.

LICENSE
Purchase grants a license for personal and commercial use on computers you own. Reselling, sharing or redistributing the files is not permitted.

PRIVACY
The tools run offline and do not collect or send any data.
```

Nota legal: la cláusula de renuncia al desistimiento es la exigida por la
directiva de consumidores de la UE para contenido digital. Confirmar con
gestor que el texto y la facturación cumplen la normativa española.

## FAQ

```
Does it work on Mac?
Yes. Windows 10/11 and macOS 10.15 or later (Intel and Apple Silicon). Check the second image of each listing.

Windows shows a warning when I open the installer.
That's SmartScreen flagging an app from an independent developer. Click "More info" and "Run anyway". The SHA-256 checksum and a public VirusTotal report are in the listing so you can verify the file.

My Mac says the app can't be opened.
The first time, right-click the app and choose "Open", then confirm. After that it opens normally.

Do I need an account or internet?
No. Download, install, use.

Can I use it on two computers?
Yes, on computers you own.

Will I get updates?
Minor updates for 30 days after purchase. Re-download from your purchases page.

Can you customize an app for me?
Yes. Message me with what you need (branding, language, fields or new features). I'll send you a quote and a delivery time. Once you agree, I'll create a private listing for you to purchase.
```

## Mensaje automático tras la compra

```
Thanks for buying [Tool name]!

1. Download the ZIP from your Etsy purchases page.
2. Unzip it and open the PDF quick-start guide.
3. If Windows shows a SmartScreen notice, click "More info" → "Run anyway".
   On Mac, the first time: right-click the app → "Open" → confirm.

If anything doesn't work, reply to this message before leaving a review: I'll fix it or refund you.
If it saves you time, a short review helps this small shop a lot.
```

## Respuesta automática de mensajes (fuera de horario)

```
Thanks for your message. I reply to every message within 24 hours (Spain time). If it's about installation, the quick-start PDF in your download covers the most common issues.
```

## Personalización de apps: cuestionario para el cliente

Guárdalo como respuesta guardada en los mensajes de Etsy y envíalo cuando
alguien pregunte por una versión personalizada. Todo dentro de Etsy: no
enviar formularios externos (la política de Etsy prohíbe sacar la venta de
la plataforma).

```
Thanks for your interest in a custom version! Please answer these 5 questions so I can tell you if it's possible, the price and the delivery time.

1. Which app from my shop do you want customized?

2. What do you want changed? (choose all that apply)
   a) Logo, colors or name
   b) Language (which one?)
   c) Add, remove or rename fields, categories or sections
   d) Something new the app doesn't do today (please describe it)

3. Describe exactly what you need. Examples or screenshots help a lot.

4. Will you send me your logo or files? If yes, in what format (PNG, SVG, PDF...)?

5. When do you need it?
   a) No rush  b) Within 2 weeks  c) Specific date: ___

Once I have your answers I'll reply within 24 hours with a quote. You won't pay anything until you accept it.
```

### Guía interna para decidir (no se envía al cliente)

| Nivel | Respuesta en la pregunta 2 | ¿Se hace? | Precio |
|---|---|---|---|
| A · Aspecto | a, b | Sí | [pendiente de fijar] |
| B · Contenido | c | Sí | [pendiente de fijar] |
| C · Algo nuevo | d | Solo si cabe en el mismo HTML y está claro y acotado | Presupuesto a medida |
| No | Cuentas de usuario, servidor, datos compartidos entre personas, app de móvil nativa | No | — |

Toda versión personalizada se entrega igual que los productos de la tienda:
el HTML y, si el cliente lo quiere instalable, el `.exe` (Windows) y el
`.dmg` (Mac) generados con el sistema de `productos/etsy-fee-calculator/desktop`.
Si la descripción de la pregunta 3 es vaga, pedir ejemplos antes de dar precio.
