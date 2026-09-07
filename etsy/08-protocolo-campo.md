# 08 · Protocolo de campo: capturar competencia y quejas desde tu Etsy

Etsy bloquea el acceso desde el entorno de trabajo, así que la captura la
haces tú desde el navegador y el análisis lo hago yo con los archivos.
Tiempo estimado: 45–60 minutos para las 5 búsquedas.

## Preparación (una vez)

1. Abre Etsy en el navegador con sesión iniciada y **cambia la región a
   Estados Unidos y el idioma a inglés** (pie de página > región/idioma/moneda:
   United States · English · USD). Si no, verás resultados de España.
2. Crea en tu ordenador la carpeta `etsy-campo`.

## Las 5 búsquedas

Escribe cada una en el buscador de Etsy tal cual, sin filtros:

| N.º | Búsqueda | Qué estamos midiendo |
|---|---|---|
| 1 | `etsy bookkeeping spreadsheet` | Contabilidad para vendedores de Etsy |
| 2 | `etsy fee calculator` | Calculadoras de comisiones y precios |
| 3 | `reseller inventory spreadsheet` | Inventario y beneficio para revendedores |
| 4 | `budget by paycheck spreadsheet` | Presupuesto personal por nómina |
| 5 | `listing mockup generator` | Herramientas de imágenes para listings |

## Por cada búsqueda (10 minutos)

**A. La página de resultados**
1. Antes de pulsar Intro, haz una captura del **desplegable de autocompletado**
   (las sugerencias que Etsy propone al escribir). Son búsquedas reales.
2. Pulsa Intro. Captura de pantalla de la **primera pantalla de resultados**.
3. Guarda la página completa: `Ctrl+S` > tipo "Página web completa" >
   nombre `busqueda-1.html` (2, 3, 4, 5).

**B. Los 3 primeros listings** (ignora los marcados "Ad"/"Anuncio")
1. Ábrelo. Baja hasta las reseñas. Si hay selector de orden, elige
   **"Most recent"**.
2. Guarda la página: `Ctrl+S` > "Página web completa" > `b1-listing-1.html`
   (b = número de búsqueda, listing = posición 1, 2 o 3).
3. Si el listing tiene más de una página de reseñas, pasa a la página 2 y
   guarda de nuevo como `b1-listing-1-p2.html`. Con 2 páginas por listing
   basta.

**C. Un vistazo a las reseñas malas**
Etsy no filtra por estrellas. Mientras bajas por las reseñas, si ves alguna
de 1 a 3 estrellas, selecciónala con el ratón y cópiala en un archivo de
texto `b1-quejas.txt`. Solo las que veas; no busques exhaustivamente, el
script las encontrará en el HTML.

## Entrega

Arrastra al chat la carpeta comprimida `etsy-campo.zip` (o los archivos
sueltos), o súbelos al repositorio en `etsy/campo/`. Yo los proceso con
`herramientas/parsear_listing.py` y te devuelvo, por búsqueda:

- los 3 líderes con precio, número de reseñas y valoración,
- las quejas agrupadas por tema y contadas,
- lo que más alaban las reseñas de 5 estrellas (funciones imprescindibles),
- la lista de "ojalá hiciera..." (peticiones de función).

Con eso elegimos los 5 productos y definimos en qué exactamente vamos a
ser mejores que cada líder.

## Si prefieres ir más rápido

Haz solo el paso A para las 5 búsquedas y el paso B para las búsquedas 1 y 2.
Es el mínimo con el que puedo empezar a decidir.
