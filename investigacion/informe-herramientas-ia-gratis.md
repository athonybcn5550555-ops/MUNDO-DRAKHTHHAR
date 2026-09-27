# Informe: herramientas de IA gratuitas y cómo usarlas en el Proyecto JL

**Estado:** BORRADOR VIVO. Se actualiza con cada material nuevo que aporta Antonio.
**Última actualización:** 27 sep 2026 · Fuentes recopiladas: 2 vídeos de YouTube (transcripciones) + enlaces de la descripción.

**Cómo leer este informe:**
- ✅ **Verificado:** comprobado en la web oficial o en fuentes independientes.
- 🟡 **Según el vídeo:** afirmación del youtuber, no comprobada todavía.
- ⚠️ **Riesgo:** problema legal, de condiciones de uso o de calidad.

Los youtubers cobran por promocionar algunas herramientas (Hostinger, TopView). Esas partes se marcan como **publicidad**.

---

## 1. Resumen ejecutivo: qué usar y para qué

| Necesidad del negocio | Herramienta recomendada | Coste | Prioridad |
|---|---|---|---|
| Vídeos para anuncios de libros KDP y listings de Etsy | **Google Flow** (+ **Vibes** de Meta como alternativa) | Gratis con límites | 🔴 Alta (Halloween y Navidad) |
| Imágenes para pruebas de portada y páginas de colorear | **Google Flow** (Nano Banana, 0 créditos por imagen 🟡) | Gratis | 🔴 Alta |
| Voz en off para vídeos | **Gemini TTS** en Google AI Studio | Gratis | 🟠 Media |
| Música para vídeos y OncoCare | **Treblo** | Gratis 🟡 | 🟠 Media (licencia pendiente de revisar) |
| Seguir programando sin créditos (Orion, apps de Etsy) | **Ollama + app de Codex** (`ollama launch codex-app`) | Gratis (modelos locales o cloud gratis) | 🟠 Media (solo diagnóstico) |
| Chat de IA ilimitado para tareas generales | **ChatGPT gratis con GPT‑5.6 Luna** 🟡 | Gratis | 🟢 Baja |
| Montar vídeos | **Google Vids**, **Vibes** (línea de tiempo) o CapCut | Gratis | 🟠 Media |

**Lo que NO se usa:**
- Quitamarcas de agua.
- VPN para saltarse restricciones por país.
- Clonar voces de otras personas.
- Qwen de escritorio con acceso a los archivos del PC.

Ver la sección 9.

---

## 2. Vídeo con IA

### 2.1 Google Flow ✅ (flow.google.com)
- **Qué es:** plataforma creativa oficial de Google para imágenes y vídeo.
- **Límites** 🟡: 50 créditos diarios en la cuenta gratuita. Un vídeo de ~6 s con el modelo "Omni Flash" cuesta ~5–10 créditos, así que salen unos 5–10 vídeos al día.
- **Funciones clave** 🟡:
  - **Imágenes ilimitadas** (Nano Banana 2 Lite / 2 / Pro a 0 créditos).
  - **Modo agente:** genera secuencias de escenas con un personaje coherente.
  - **Personajes:** mantiene la consistencia de un personaje entre escenas.
  - **Animar:** convierte una imagen en vídeo.
  - **Plantilla Storyboard:** vídeos largos y coherentes.
  - **Pestaña Comunidad:** herramientas hechas por otros (carruseles automáticos, subtítulos, 22 perspectivas de un personaje).
  - **My Tools:** creas tu propia mini‑herramienta describiéndola. Ejemplo del vídeo: un traductor de miniaturas de YouTube.
- **Usos para nosotros:**
  1. Vídeo de 15 s del libro de Halloween (guion listo en `marca/videos/halloween-15s-guion.md`).
  2. Tráiler del futuro libro de Navidad y del Bible Crossword.
  3. Vídeos de 10 s para listings de Etsy (app abriéndose y usándose).
  4. **Carruseles de TikTok:** la herramienta de la comunidad podría sustituir o apoyar la tarea nocturna de Orion.
  5. **My Tools:** crear una herramienta propia que traduzca las imágenes A+ y de listing a varios idiomas (amazon.com / .es / .de).
  6. **Personajes consistentes:** pruebas de concept art de Drakhthar. ⚠️ Siempre respetando el canon; la IA propone y el canon decide.

### 2.2 Google Vids ✅ (workspace.google.com/products/vids)
- **Qué es:** editor de vídeo de Google Workspace, ahora con el modelo de vídeo avanzado en cuentas gratuitas 🟡.
- **Funciones** 🟡:
  - texto a vídeo;
  - imagen a vídeo (hasta 3 imágenes combinadas);
  - avatares predefinidos o personalizados con tu foto;
  - ampliar un vídeo de 10 a 20 s o más;
  - línea de tiempo para montar;
  - exportar en MP4.
- **Límites** 🟡: variables según la cuenta (6–10+ vídeos). Algunas funciones aparecen en unas cuentas y en otras no.
- **Marca de agua:** sí la pone. ⚠️ No se quita (ver sección 9).
- **Usos:** montaje final de los anuncios, uniendo clips de Flow, voz de Gemini y textos.

### 2.3 Vibes (Meta) ✅ (vibes.ai / app Meta AI)
- **Qué es:** generador oficial de vídeo e imagen de Meta, gratuito, lanzado el 25 sep 2025.
- **Funciones:**
  - vídeos cortos (hasta ~16 s, con audio ✅);
  - 4 variantes por petición;
  - varias peticiones a la vez 🟡;
  - fotograma de inicio y de fin;
  - vídeo horizontal si partes de una imagen horizontal 🟡;
  - avatares que hablan;
  - calidad 720p (recomendada) 🟡;
  - línea de tiempo.
- **Límites:** "ilimitado" según el vídeo 🟡. Se entra con la cuenta de Facebook.
- **Usos:** alternativa a Flow cuando se acaben los créditos diarios, y B‑roll para anuncios.

### 2.4 Muse (Meta) ✅ existe · ❌ no disponible en España
- **Qué es:** agente de IA de Meta en muse.ai. Monta vídeos completos desde imágenes, con música y efectos.
- **Límites:** 100 millones de tokens a la semana gratis. Con un código de invitación se consiguen 1.000 millones extra.
- **Bloqueo:** ✅ **solo acepta usuarios de EE. UU.** Entrar con VPN incumple sus condiciones.
- **Código O1E4XG del vídeo:** es un código de referido del youtuber (también le da tokens a él). Cada código sirve 20 veces, así que probablemente esté agotado.
- **Decisión:** esperar a que lo abran en España.

---

## 3. Voz

### Gemini TTS en Google AI Studio ✅ (aistudio.google.com/generate-speech)
- **Funciones** 🟡:
  - voces narradas con emoción y estilo descritos por texto;
  - "crear diálogo", con menos restricciones;
  - pausas y respiraciones;
  - descarga de audio;
  - diseñar una voz a partir de una descripción;
  - clonar voz (solo en algunos países).
- **Usos:**
  1. Voz en off de anuncios en inglés (amazon.com) y en español.
  2. Narraciones para vídeos de TikTok.
  3. Diálogos de personajes para las demos de Velmont (aparcado).
- ⚠️ **Nunca clonar la voz de otra persona sin su permiso por escrito.** Usar VPN para activar la clonación incumple las condiciones.

---

## 4. Música

### Treblo 🟡 (app web, iPhone y Android)
- **Qué dice el vídeo:**
  - música gratis e ilimitada, sin plan de pago;
  - calidad alta (una canción suya llegó al puesto 58 de un top 100);
  - tiene un detector de canciones hechas con IA.
- **Usos:**
  1. Música de OncoCare (pendiente).
  2. Fondo de los vídeos de anuncios.
  3. Música ambiental para Velmont (aparcado).
- ⚠️ **Pendiente de verificar:**
  - condiciones de uso comercial;
  - si hay que atribuir la música;
  - si las canciones se pueden registrar o monetizar.

  No usar en nada que se venda hasta revisar la licencia.

---

## 5. Imágenes

### Google Flow ✅ (ver 2.1)
- Imágenes a 0 créditos 🟡 con Nano Banana 2 Lite / 2 / Pro.
- **Usos:**
  - pruebas de portada;
  - ideas de páginas para colorear;
  - fondos de mockups para A+ y Etsy;
  - storyboards de anuncios;
  - concept art de Drakhthar (siempre bajo el canon).
- ⚠️ **KDP obliga a declarar el contenido generado con IA** al publicar.
- ⚠️ Revisar cada página de colorear: dedos de más, líneas abiertas, texto deformado.

### Perchance 🟡 (perchance.org)
- Sin registro, hasta 64 imágenes a la vez, muchos estilos.
- **Veredicto:** calidad irregular y herramientas de terceros. Para la marca usamos Flow. Como mucho, para lluvia de ideas.

---

## 6. Programación y automatización

### 6.1 Ollama + app de Codex ✅
- **Qué es:** el comando oficial `ollama launch codex-app` abre la app de escritorio de Codex conectada a modelos de Ollama, locales o "cloud" gratuitos. No gasta créditos de OpenAI.
- **Requisitos:** Ollama v0.17.7 o superior y Codex App 26.311.2136 o superior.
- **ChatGPT Desktop con Ollama:** según la documentación, **de momento solo en Mac**. Antonio usa Windows.
- **Usos:**
  1. Diagnosticar Orion cuando no queden créditos. Orion se hizo con Codex el 20 sep 2026.
  2. Pequeñas tareas en apps de Etsy.
- ⚠️ Los modelos gratuitos programan peor. **Solo leer y diagnosticar; no cambiar el código de Orion con ellos.**
- ⚠️ Con modelos "cloud", el código viaja a los servidores de Ollama.
- **Para volver a los modelos oficiales** 🟡: se ejecuta el comando de restaurar que da Ollama.

### 6.2 ChatGPT gratis con GPT‑5.6 Luna 🟡
- **Qué dice el vídeo:**
  - GPT‑5.6 tiene tres versiones: Sol (la más potente), Terra y Luna;
  - Luna es ilimitada en la cuenta gratuita y rinde parecido a los modelos grandes a un coste muy bajo;
  - en Plus, Sol en el chat no gasta créditos de Work/Codex;
  - Codex ha quitado el límite de 5 horas; solo queda el semanal.
- **Usos:**
  - borradores de textos, listings y artículos;
  - ideas;
  - prototipos rápidos de webs.
- ⚠️ Todo texto para publicar pasa por revisión: datos, canon y citas. Ejemplo: el error de cita bíblica detectado en el Bible Crossword.

### 6.3 Qwen Studio / Qwen 3.8 Max (Alibaba) 🟡
- **Qué dice el vídeo:**
  - gratis, sin plan de pago;
  - app de escritorio con MCP: puede leer y controlar archivos del PC;
  - el youtuber creó una app completa para limpiar el disco.
- **Veredicto:** ⚠️ no instalar con acceso a los archivos en el PC del negocio. Riesgo de seguridad y de privacidad. Como mucho, la versión web para consultas sin datos sensibles.

### 6.4 Hostinger Connector (publicidad del vídeo) 🟡
- **Qué dice el vídeo:** conecta tu hosting de Hostinger con un agente de IA (Claude Code, Codex, Cursor...) para publicar webs, conectar dominios y gestionar la tienda en lenguaje natural. Gratis con el hosting.
- **Usos:** si las webs de Antonio están en Hostinger, publicar y gestionar desde el agente.
- **FALTA CONFIRMAR:** en qué hosting están las webs de patinetes, "IA para esto", etc.
- ⚠️ Dar a una IA permisos sobre webs en producción requiere reglas claras: nada se publica sin el "ok" de Antonio.

### 6.5 TopView (publicidad del vídeo) 🟡
- Plugin que conecta TopView con ChatGPT para crear vídeos de venta a partir de la foto de un producto, analizando TikTok, Amazon y demás.
- **Veredicto:** es de pago tras la prueba. No hace falta mientras Flow y Vibes cubran lo necesario.

---

## 7. Plan de uso por negocio

| Negocio | Qué hacer con estas herramientas |
|---|---|
| **KDP: Halloween** | Vídeo de 15 s con Flow (guion listo) para TikTok, Reels y anuncios. |
| **KDP: Navidad** (nuevo) | Pruebas de portada y páginas con Flow (imágenes gratis) y tráiler antes de noviembre. |
| **KDP: Bible Crossword** | Tráiler sereno (vídeo en Flow + voz en Gemini) **después** de revisar las citas bíblicas. |
| **KDP: Sudokus y sopas de letras** | Vídeos cortos del interior cuando se localicen los PDF. |
| **Etsy: apps** | Vídeo de 10 s por listing; más adelante, una herramienta propia en Flow para las imágenes de listing. |
| **Webs y TikTok (Orion)** | Carruseles con las herramientas de Flow; voz con Gemini TTS; Hostinger Connector si aplica. |
| **Orion** | Diagnóstico con Ollama + Codex sin gastar créditos (solo lectura). |
| **OncoCare** | Música con Treblo, tras revisar la licencia. |
| **Drakhthar / Velmont** | Concept art y storyboards en Flow; voces de personajes con Gemini TTS; música con Treblo. Siempre bajo el canon. |

---

## 8. Próximos pasos
1. Generar el plano 1 del vídeo de Halloween en Flow y revisar si respeta el título.
2. Revisar las condiciones comerciales de Treblo.
3. Confirmar el hosting de las webs, para decidir sobre Hostinger Connector.
4. Probar Vibes como alternativa cuando se agoten los créditos de Flow.

---

## 9. Líneas rojas (no se hacen, aunque los vídeos lo enseñen)
| Práctica | Por qué no |
|---|---|
| Quitar marcas de agua (magiceraser.org u otras) | Incumple las condiciones de Google. Riesgo para la marca si se detecta en anuncios. |
| VPN para usar Muse o clonar voz fuera de los países permitidos | Incumple las condiciones y arriesga el cierre de la cuenta. |
| Clonar la voz de otra persona | Legal y éticamente inaceptable sin consentimiento. |
| Marcas o personajes ajenos (GTA 6, famosos) en anuncios | Amazon y Etsy lo rechazan o lo retiran; riesgo de infracción. |
| Dar a una IA desconocida control de los archivos del PC | Riesgo de seguridad para todo el negocio. |
| Publicar contenido de IA sin revisar | Errores (como la cita de Génesis) = reseñas de 1 estrella. |

---

## Fuentes verificadas
- Ollama, `ollama launch`: https://ollama.com/blog/launch
- Ollama + Codex: https://docs.ollama.com/integrations/codex
- Ollama + Codex App: https://knightli.com/en/2026/05/26/ollama-codex-app-local-ai-coding-agent/
- Ollama en ChatGPT Desktop (Mac): https://medium.com/@la_boukouffallah/running-local-models-inside-codex-1fcf88866635
- Meta Vibes: https://ai.meta.com/vibes/ · https://vibes.ai/
- Muse (solo EE. UU., códigos): https://www.gearlive.com/news/article/muse-invite-code-1-billion-free-tokens · https://rankplan.us/muse-ai-invite-code/
- Google Flow: https://flow.google.com/
- Google Vids: https://workspace.google.com/intl/es/products/vids/
- Gemini TTS: https://aistudio.google.com/generate-speech

## Material fuente recibido
1. Vídeo A: "Vídeos de calidad por IA" (Google Vids, Flow, Muse, Vibes, Gemini TTS; patrocinio TopView). Enlaces de la descripción incluidos. Nota: menciona "23 de octubre", así que puede ser del año pasado.
2. Vídeo B: "7 casos IA gratis e ilimitada" (GPT‑5.6 Luna, Ollama + Codex, Qwen Studio, Treblo, Flow Tools, Vibes, Perchance; patrocinio Hostinger).
