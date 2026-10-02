# Traspaso: tienda de apps en drakhthar.com

Escrito el 2 de octubre de 2026 por la sesión "Serie del hombre inmortal" para la sesión "Necesidad de organización".
El usuario (toni) pidió expresamente que esta sesión continúe el trabajo.

## Cómo tratar al usuario
- Habla en español. Está muy frustrado: ha repetido varias veces que no quiere que le cuestionen sus decisiones ni que le hagan preguntas innecesarias.
- Pregunta solo lo que sea imposible sin él (cuentas, pagos, identidad). Todo lo demás, decídelo y hazlo.
- No inventes datos, precios ni reseñas. Dilo si algo no se puede verificar.
- No prometas ingresos. Su objetivo declarado es ganar dinero con la web y la tienda de apps.

## Encargo del usuario (literal en esencia)
- Hacer ganar dinero con una **tienda de apps/webs**. Delega todo en Claude.
- Usar el dominio **drakhthar.com** para la tienda. **Quiere sustituir la web actual de Drakhthar**: dice que ya no sirve para lo que se hizo. Lo ha repetido; no volver a discutirlo. (Recomendación honesta ya dada una vez: hacer copia de seguridad antes. Cloudflare Pages guarda versiones de implementaciones, a verificar.)
- No quiere nada de KDP ni de novelas ahora.
- La tienda de Etsy fue cerrada para siempre; el recurso presentado fue rechazado. No crear otra cuenta de Etsy para esquivar el cierre (suele estar prohibido).
- Quiere que se busquen las apps en su ordenador (disco) y se trabaje todo sin molestarle.

## Qué existe
**Apps (5):** My Teacher Planner, Mi Menopausia, ADHD Focus Planner, Agenda Femenina, Diabetes Tracker. Son archivos HTML de uso local.

**Tienda "Bright Days Studio":** diseño en artefacto claude.ai https://claude.ai/artifact/9BMaGxg5Mg9UXEovYgZshc (sesión "centro de mando", rama tienda-etsy, que corre en el PC del usuario).

**Web estática lista en este repositorio:** carpeta `tienda/` (`index.html` + `images/`), rama `claude/cool-ramanujan-ic67qa`.
- Convertida del diseño, con imágenes comprimidas (~1 MB en total).
- Comprobada en 390 px y 1280 px, sin desbordes.
- Cambios sobre el original: añadido aviso de que Mi Menopausia y Diabetes Tracker no sustituyen al profesional sanitario; eliminada la insignia "5★" y la frase "diseñado junto a profesores y usuarias reales" (prueba social sin verificar).
- Precios: solo **My Teacher Planner = 12,99 € IVA incluido**, tomado de su ficha de Etsy (https://claude.ai/artifact/2EAcx1yLLcswhoMaMUM45w). Esa ficha mostraba "€25" tachado; no replicar el precio tachado sin cumplir las reglas de precio anterior de la UE. Las otras cuatro muestran "Próximamente".
- Botones de compra: aún dicen "Próximamente"; no hay pasarela de pago.
- Correo de contacto en la web: jlcontacto555@gmail.com.

## Dominio y hosting
- `drakhthar.com` y `www.drakhthar.com` resuelven por DNS a **Cloudflare Pages**, proyecto **`drakhthar-web`** (drakhthar-web.pages.dev). No es Hostinger.
- `wwwdrakhthar.com` no existe: fue una errata.
- La web actual (captura que mostró el usuario): "DRAKHTHAR — Miniaturas FDM impresas en 3D, figuras de fantasía, libro gratuito". Menú: Preguntas frecuentes, Próximamente, Libro, Mapa del sitio, Universo, Materiales, Comunidad, Mapa del mundo, Contacto.
- Publicar = nueva implementación en `drakhthar-web` con el contenido de `tienda/`. Si el proyecto está conectado a GitHub, habrá que localizar su repositorio y sustituir allí el contenido (no sé cuál es).
- Reparto de capacidades: este entorno en la nube **no tiene sesión iniciada en Cloudflare ni acceso al disco del usuario**. La sesión "centro de mando" (session_01CRs24SNNTi5jETS2RLRAa9, PC del usuario, carpeta TIENDA-ETSY, rama tienda-etsy) sí puede leer su disco, y quizá tenga wrangler autenticado. Se puede contactar con `send_message`.

## Lo que falta para ganar dinero
1. Archivos finales de las 5 apps (buscar en el disco del usuario; solo lectura, no mover ni borrar).
2. Precios de las otras 4 apps.
3. Plataforma de cobro y entrega. En otra sesión se habló de Payhip, no montado; condiciones y comisiones sin verificar. El alta de vendedor (identidad, cuenta bancaria) solo puede hacerla el usuario.
4. Publicar en drakhthar.com (arriba).
5. **Tráfico.** Sin audiencia, cinco apps no venden. Decidir de dónde saldrán las visitas.
6. Verificar afirmaciones de la web que vienen de sesiones anteriores: "Música relajante incluida", "Guía para recién diagnosticados", "Voz e idiomas múltiples", "100% local, sin nube". Si no son ciertas, quitarlas.

## Limitaciones técnicas encontradas
- La red de este entorno bloquea casi todos los dominios (Wikipedia, Britannica, support.google.com, nature.com, Canva, etc.). Funciona la búsqueda web, que devuelve resúmenes, no páginas.
- Los menús de ajustes del entorno para ampliar permisos de red están en el menú del entorno > Edit; el usuario no pudo localizarlos.

## Otro proyecto del mismo usuario (no es esta tarea)
Serie de YouTube del hombre inmortal (universo independiente de Drakhthar). Biblia provisional: https://claude.ai/code/artifact/fc9121ea-85cb-4a09-8840-15f914a02d77. Sin tocar por ahora.
