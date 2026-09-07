# Imágenes del listing · Fee & Price Calculator

Diez imágenes a 2000 × 2000 px, en el orden en que deben subirse a Etsy.
Generadas con `scratchpad/listing_imgs.js` a partir de capturas reales de la
aplicación, no de maquetas.

| Orden | Archivo | Qué muestra |
|---|---|---|
| 1 | `01-cover.png` | Portada: nombre, promesa y las tres etiquetas de venta. Contenido dentro del recorte 4:3 que Etsy aplica en los resultados. |
| 2 | `02-what-you-get.png` | Qué recibe el comprador y por qué no hay instalación. |
| 3 | `03-before-after.png` | Comparación honesta contra las plantillas de hoja de cálculo. |
| 4 | `04-fees.png` | La tabla de comisiones real de la app. |
| 5 | `05-profit.png` | Beneficio y margen por producto, con el semáforo. |
| 6 | `06-price-finder.png` | El buscador de precio. |
| 7 | `07-languages.png` | Cinco idiomas y manual hablado. |
| 8 | `08-excel.png` | Exportación a Excel de verdad. |
| 9 | `09-how.png` | Cómo se usa, en tres pasos. |
| 10 | `10-included.png` | Qué incluye la descarga y la licencia. |

## Vídeo

`video-listing.mp4` · 1080 × 1080 · 10,6 segundos · H.264 · sin audio · 863 KB.
Dentro del límite de 5 a 15 segundos de Etsy. Muestra, en este orden: se
escribe el precio y la tarjeta pasa de pérdida a beneficio; se activa Offsite
Ads y el margen se desploma; se desactiva y se recupera; y el buscador de
precio calcula el precio necesario para ganar 12 dólares. Sin voz ni texto
superpuesto, porque Etsy reproduce los vídeos en silencio.

Grabado con Playwright sobre la aplicación real y convertido a H.264. El
ffmpeg que trae Playwright solo genera WebM, así que la conversión usa el
binario completo de `imageio-ffmpeg`.

`contacto.png` es una hoja de contacto con las diez juntas, solo para
revisarlas de un vistazo. No se sube a Etsy.

Las capturas de origen (`app-*.png`) se conservan por si hay que recomponer
alguna imagen sin volver a arrancar el navegador.

## Reglas respetadas

- 2000 × 2000 px, muy por encima del mínimo de Etsy.
- La primera imagen mantiene lo importante en la franja central, porque Etsy
  la recorta a 4:3 en los resultados de búsqueda.
- Texto grande: legible en la miniatura del móvil, que es donde se decide.
- Ninguna promesa que el producto no cumpla.
