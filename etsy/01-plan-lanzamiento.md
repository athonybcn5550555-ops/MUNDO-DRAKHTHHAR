# 01 · Plan de lanzamiento — DrakhtharSoftware en Etsy

Fecha: septiembre 2026. Estado de partida (captura del panel):

| Dato | Valor |
|---|---|
| Artículos activos | 0 |
| Ventas | 2 |
| Valoración | 5.0 (1 reseña) |
| Antigüedad | 3 meses |
| Banner | "Tools that do the boring part. Offline · One-time purchase · No subscriptions" |

## 1. Diagnóstico

1. **Sin listings no hay tienda.** Etsy solo muestra tiendas a través de sus
   productos. Con 0 artículos la tienda no aparece en ninguna búsqueda. Todo
   lo demás es secundario hasta tener entre 8 y 12 listings publicados.
2. **La propuesta de valor es buena y está bien escrita.** "Offline, compra
   única, sin suscripciones" es un diferenciador real frente al SaaS y encaja
   con el comprador de Etsy, que compra herramientas pequeñas y concretas
   (plantillas, scripts, utilidades). Se mantiene tal cual.
3. **El nombre es un lastre.** "DrakhtharSoftware" es difícil de escribir,
   difícil de recordar en inglés y no contiene ninguna palabra clave. Además
   procede de una marca que ya no se va a usar. Con 2 ventas es el momento
   más barato para cambiarlo. Ver decisión D1.
4. **Riesgos propios de vender software en Etsy:**
   - Etsy no está pensado para ejecutables. El comprador puede tener miedo a
     virus y Windows SmartScreen avisa con instaladores sin firmar. Esto
     genera devoluciones y reseñas negativas si no se gestiona.
   - Límite de descarga digital (verificar en el panel): 5 archivos, 20 MB
     cada uno, formatos limitados (.zip está permitido).
   - Etsy exige que los artículos digitales estén diseñados por el vendedor.
     Hay que rellenar el apartado de miembros de la tienda con quién crea el
     software.
5. **Activos que ya existen y hay que aprovechar:** 1 reseña de 5 estrellas y
   2 compradores previos, a los que se puede escribir cuando haya catálogo.

## 2. Posicionamiento

- **Qué vendemos:** utilidades de escritorio pequeñas, que resuelven una
  tarea tediosa concreta, funcionan sin conexión y se pagan una vez.
- **A quién:** compradores de Etsy que ya compran productos digitales
  (plantillas, planners, herramientas para su propio negocio). Mercado
  principal en inglés, sobre todo EE. UU. Los listings se escriben en inglés
  y Etsy los traduce automáticamente.
- **Promesa en cada listing:** "Buy once. Works offline. No account, no
  subscription." Repetida siempre con las mismas palabras para construir
  marca.
- **Contra qué competimos:** suscripciones SaaS, herramientas web con anuncios
  y plantillas de Excel/Notion que hacen lo mismo peor.

## 3. Decisiones pendientes (las tomas tú)

| ID | Decisión | Recomendación |
|---|---|---|
| D1 | Mantener "DrakhtharSoftware" o renombrar. | **Renombrar ahora.** Criterios: 2 palabras, pronunciable en inglés, que sugiera utilidad o rapidez, sin la palabra "software" si es posible (ej. de dirección, no de nombre: "QuietTools", "PlainTools", "OfflineWorks"). Comprobar disponibilidad en Etsy, dominio .com y redes antes de decidir. Etsy permite cambiar el nombre desde Ajustes con límites; verificar cuántos cambios quedan. |
| D2 | Catálogo inicial: qué herramientas se publican primero. | Ver sección 4. Necesito la lista de herramientas que ya existen o que puedes tener listas en 2 semanas. Sin esa lista no se pueden redactar listings. |
| D3 | Plataforma objetivo: solo Windows, o Windows + macOS. | Empezar solo con lo que ya funcione y esté probado. No prometer macOS hasta tener build firmada. |
| D4 | Firmar el código o no. | Un certificado de firma de código para Windows cuesta dinero anual (verificar precio actual). Sin firma, SmartScreen avisará. Alternativa barata para empezar: hash SHA-256 + informe público de VirusTotal + vídeo de instalación en el listing. |
| D5 | Cómo se entrega la licencia. | Empezar sin licencia por clave (entrega directa del ZIP). Añadir claves solo si hay piratería real. Cada capa de activación añade tickets de soporte. |
| D6 | Precio ancla. | Banda 9–29 € por herramienta y un pack a 39–49 €. Ver `06`. |

## 4. Catálogo inicial (marco, no lista cerrada)

No invento productos. Lo que sigue es el **criterio** para elegir las 8–12
primeras herramientas y el método para validarlas. La lista real sale de la
ficha `02` que rellenes por cada herramienta.

**Criterios de selección para el primer catálogo**

1. Resuelve una tarea que la gente ya busca en Etsy con palabras concretas
   (rename, convert, merge, resize, clean, generate, batch, bulk).
2. Se explica en una frase y se demuestra en un vídeo de 10 segundos.
3. Cabe en un ZIP de menos de 20 MB o se entrega como portable.
4. No depende de servicios externos ni de APIs de pago.
5. Tiene un "antes/después" visual para las imágenes del listing.

**Familias con demanda comprobable en Etsy** (hipótesis a validar, no datos):
herramientas para vendedores de Etsy y pequeños negocios (procesar fotos de
producto en lote, generar mockups, limpiar CSV de pedidos, calcular
precios), utilidades de archivos (renombrar, convertir, comprimir, unir PDF)
y generadores (facturas, etiquetas, QR en lote).

**Método de validación por herramienta** (30 minutos cada una)

1. Escribir la palabra clave en el buscador de Etsy y anotar las sugerencias
   del autocompletado: son búsquedas reales.
2. Contar resultados y mirar los 10 primeros: precio, número de reseñas,
   fecha de las últimas reseñas. Reseñas recientes = demanda viva.
3. Si los 10 primeros son plantillas de Excel o Notion, hay hueco para una
   herramienta real que lo haga mejor.
4. Anotar todo en la ficha `02`, apartado "Validación".

## 5. Fases

**Fase 0 · Fundamentos (semana 1)**
- Tomar D1 a D6.
- Rellenar "Información básica" de la tienda, miembros, políticas y FAQ con
  los textos de `04`.
- Definir plantilla visual de imágenes (misma tipografía, mismo fondo, misma
  etiqueta "Offline · One-time") para que la tienda se vea como una marca.
- Configurar respuesta automática de mensajes y el mensaje de agradecimiento
  tras la compra (con instrucciones de instalación y petición de reseña).

**Fase 1 · Catálogo (semanas 2–3)**
- Publicar entre 8 y 12 listings siguiendo `03` y `05`. Mínimo 2 por semana.
- Cada listing: 8–10 imágenes, 1 vídeo, ZIP probado en máquina limpia.
- Un listing "pack" con 3–5 herramientas a precio con descuento.
- Escribir a los 2 compradores anteriores anunciando el catálogo (sin
  presionar, un mensaje).

**Fase 2 · Tracción (semanas 4–8)**
- Etsy Ads con presupuesto pequeño (2–3 €/día) solo en los 3 listings con
  mejor ratio favoritos/visitas. Apagar a los 14 días lo que no convierta.
- Cupón de agradecimiento tras la compra (10 %) para repetir.
- Revisar estadísticas cada lunes: visitas, favoritos, conversión, palabras
  clave que traen tráfico. Ajustar títulos y tags de los listings sin visitas.
- Objetivo: cumplir los requisitos de Star Seller (verificar cifras
  actuales: mensajes respondidos en 24 h, reseñas de 5 estrellas y un mínimo
  de pedidos y facturación en 3 meses).

**Fase 3 · Escala (mes 3 en adelante)**
- Ampliar catálogo con lo que pidan los compradores en mensajes y reseñas.
- Versiones "Pro" de las herramientas que más vendan.
- Valorar tienda propia (Gumroad, Lemon Squeezy o web) para el tráfico que ya
  no venga de Etsy y así no pagar comisión sobre clientes recurrentes.

## 6. KPIs semanales

| KPI | Objetivo inicial | Por qué |
|---|---|---|
| Listings activos | 8–12 al final de la fase 1 | Sin volumen, Etsy no muestra la tienda. |
| Visitas por listing | Tendencia creciente | Mide si el SEO del título funciona. |
| Favoritos / visitas | > 5 % | Mide si las imágenes convencen. |
| Conversión | 1–3 % | Media aproximada de Etsy; por debajo, revisar precio o descripción. |
| Reseñas / pedidos | > 30 % | El mensaje post-compra debe pedirla. |
| Tiempo de respuesta | < 24 h | Requisito de Star Seller. |

## 7. Riesgos y mitigación

| Riesgo | Mitigación |
|---|---|
| Aviso de SmartScreen o antivirus | Hash SHA-256 en el listing, informe VirusTotal público, vídeo de instalación, opción portable. Firmar código cuando haya ventas que lo justifiquen (D4). |
| Devoluciones por "no funciona en mi equipo" | Requisitos del sistema en la 2.ª imagen y en la descripción. Soporte por mensaje en 24 h. Política de reembolso clara en `04`. |
| Reseñas negativas por expectativas | Vídeo real de la herramienta, sin promesas de funciones futuras. |
| Piratería | Aceptarla al principio. No añadir DRM que estorbe al comprador legítimo. |
| Dependencia total de Etsy | Recoger emails con el consentimiento del comprador y tener tienda propia en fase 3. |
| Fiscalidad | Vender desde España obliga a facturar y declarar. Etsy recauda el IVA de descargas digitales a compradores de la UE (verificar mecánica en el panel). Consultar con gestor antes de la primera campaña. |
