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

Custom versions: I can adapt any app in this shop to the way you work: your own fields, sections and categories, or new features you need. Send me a message and I'll send you a short questionnaire. With your answers I'll reply with a price and a delivery date before you pay anything.
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
Yes. Message me and I'll send you a short questionnaire about what you need. With your answers I'll send you a quote and a delivery time. Once you agree, I'll create a private listing for you to purchase.
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
la plataforma). Cada encargo se presupuesta según lo que pida el cliente.

```
Thanks for your interest in a custom version! The more detail you give me, the more accurate my quote will be. Short answers are fine where they fit.

Before you start: my apps work on your own device (PC, Mac or tablet), even without internet. They don't use accounts, online syncing or data shared between several people.

ABOUT YOU
1. Which app from my shop do you want customized?
2. Who will use it and for what? (for example: "I run a small bakery and want to track orders", "I'm a primary school teacher")
3. What problem do you want to solve? What is missing or getting in your way today?

WHAT YOU NEED
4. Fields, sections or categories: what should be added, removed or renamed? Please list them.
5. New features: describe step by step what you want to happen. (for example: "When I mark an order as paid, it moves to a 'Paid' list and adds up the monthly total")
6. Of everything you've asked for, what is essential and what would be nice to have?
7. Examples: screenshots, photos of your current paper/Excel system, or other apps you like. Anything helps.

YOUR DATA
8. What information will you enter, and roughly how much? (for example: "about 200 clients", "30 students per class")
9. Do you need to bring in data you already have (Excel, CSV...)? Do you need to export, print or save as PDF?
10. Where will you use it: PC, Mac, tablet? Do you prefer to open it in the browser or install it as a program?

LOOK
11. Do you want your logo, colors or a different language? (optional)

DELIVERY
12. When do you need it? (no rush / specific date)
13. Do you have a budget in mind? (optional, it helps me suggest the best option)
14. Anything else I should know?

Once I have your answers I'll reply within 24 hours with a quote, or with a few questions if something isn't clear. You won't pay anything until you accept the quote.
```

### Guía interna para decidir y presupuestar (no se envía al cliente)

1. **¿Se puede hacer?** Todo debe caber en un archivo HTML que funcione en
   el dispositivo del cliente. No se aceptan: cuentas de usuario, servidor,
   sincronización online, datos compartidos entre varias personas ni app de
   móvil nativa.
2. **¿Está claro?** Si las respuestas 4 y 5 son vagas ("que haga más
   cosas"), no presupuestar: pedir ejemplos concretos primero.
3. **Tamaño del encargo**, según las respuestas:
   - Contenido (pregunta 4): cambiar campos, secciones o categorías.
   - Funciones nuevas (pregunta 5): cálculos, listas, filtros, avisos, etc.
   - Datos (preguntas 8 y 9): importar Excel/CSV, exportar o imprimir suma trabajo.
   - Aspecto (pregunta 11): logo, colores e idioma, normalmente lo más rápido.
4. **Presupuesto**: horas estimadas × [tu tarifa por hora] + comisiones de
   Etsy (usar `calculadora_precio.py`). Recargo si la fecha de la pregunta 12
   es muy cercana.
5. **Cerrar por escrito** en el mensaje de Etsy qué incluye y qué no, y
   cuántas rondas de cambios entran (recomendado: una).

Toda versión personalizada se entrega igual que los productos de la tienda:
el HTML y, si el cliente lo quiere instalable, el `.exe` (Windows) y el
`.dmg` (Mac) generados con el sistema de `productos/etsy-fee-calculator/desktop`.
