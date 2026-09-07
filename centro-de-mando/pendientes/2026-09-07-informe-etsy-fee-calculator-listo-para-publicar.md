Estado: PENDIENTE DE APROBACIÓN

Informe de estado — no es una acción, no publica nada — para que Antonio decida si autoriza fusionar la rama y publicar el primer listing de la tienda Etsy "DrakhtharSoftware".

# Etsy Fee & Price Calculator — ya está construido, probado y con listing redactado

## Lo que ya existe (verificado hoy en el repo, rama `claude/tienda-etsy-v49wjl`, sin fusionar a la rama de trabajo diario)

- **Producto:** app de un solo archivo HTML ("Fee & Price Calculator"), funciona offline en cualquier navegador (Windows, Mac, Linux, móvil). Sin dependencias externas.
- **Idiomas:** inglés, español, francés, alemán, italiano, con detección automática.
- **Paquete de venta:** `Fee-Price-Calculator-v1.8.zip` (145 KB) + `Start-Here.pdf` (guía en los 5 idiomas) + `LICENSE.txt` + `SHA256.txt` con el hash del ZIP.
- **Pruebas automáticas (Playwright/Node + Python):** suites que cubren el manual integrado en 5 idiomas, contraste de color en todos los controles (encontró y corrigió 7 botones invisibles), exportación a Excel real (.xlsx generado desde cero, validado con `openpyxl`), anchos de columna en los 3 idiomas más largos, 39 casos límite (decimales con coma/punto, valores negativos, importes enormes, import/export de copias de seguridad, CSV con BOM para Excel, accesibilidad de teclado, pantallas de 320–390 px) y una simulación de 120 días de uso real (0 fallos, rendimiento estable con 150 productos).
- **Texto de listing completo y listo para copiar/pegar** en `productos/etsy-fee-calculator/paquete/10-textos-listing.md`: título (139/140 caracteres), 13 tags, descripción completa en inglés, guion de las 10 imágenes y del vídeo, y precio propuesto **15,99 $** (oferta de lanzamiento del 20 % las 2 primeras semanas → 12,79 $).
- **Además existe un instalador de escritorio** (Windows `.exe` y macOS `.dmg`, Intel y Apple Silicon) publicado como release de GitHub `calculator-v1.4.0` — pero **no forma parte del ZIP que se sube a Etsy**: Windows 11 bloquea ejecutables sin firma digital sin dar opción a excepción, así que el instalador queda aparcado hasta que haya certificado de firma de código. Lo que se vende en Etsy es la app HTML, que no tiene ese problema porque corre en el navegador.

## Lo que falta — checklist real, no inventada (de `etsy/05-checklist-publicacion.md` y `paquete/README.md`)

**De tienda (una vez, antes del primer listing):**
- [ ] Decisión D1 (nombre de la tienda) aplicada en Etsy, banner e icono — Antonio la lleva personalmente.
- [ ] Políticas de tienda, FAQ, mensaje automático post-compra y respuesta automática configurados.
- [ ] Datos fiscales y de cobro verificados en el panel de Etsy.
- [ ] **Alta del NIF-IVA intracomunitario**, para no pagar IVA sobre las comisiones de Etsy — dato fiscal que solo puede confirmar/gestionar Antonio.

**De este producto:**
- [ ] Verificar en el Administrador de tienda de Etsy las comisiones de Reino Unido, Canadá y Australia (en la app están marcadas "sin verificar"; España, EE. UU., Francia, Italia y Alemania sí están verificadas).
- [ ] Probar el ZIP en un Windows limpio (máquina virtual) antes de subirlo.
- [ ] Generar el informe público de VirusTotal del ZIP (parte de la decisión D4 ya tomada: sin firma, hash + VirusTotal + vídeo).
- [ ] Hacer las 10 imágenes del listing y el vídeo de 5–15 s (el guion ya está escrito, falta grabarlas/montarlas — no es algo que esta sesión pueda producir).
- [ ] Decidir si el repositorio pasa a privado antes de publicar el listing (aparece en la propia checklist del proyecto).

## Dos inconsistencias menores encontradas, para limpiar antes de publicar (no bloquean la decisión, pero pueden confundir)

1. El número de versión no coincide entre documentos: el `README.md` del producto dice "Versión 1.2", el ZIP de venta es `v1.8`, y el release de GitHub del instalador de escritorio es `calculator-v1.4.0`. Conviene unificarlo antes de publicar nada.
2. El tamaño del archivo de la app aparece como "54 KB" en la descripción del listing y como "117 KB" en el guion de la imagen 2; el ZIP completo pesa 145 KB. Conviene comprobar la cifra real antes de que aparezca en un listing público.

## Lo que NO se ha tocado hoy

No se ha fusionado la rama, no se ha subido nada a Etsy, no se ha tocado el nombre/branding de la tienda (D1, tal como se acordó, la lleva Antonio) y no se ha fijado el precio como definitivo — el de 15,99 $ es la propuesta ya redactada en el listing, pendiente de que Antonio la confirme.

## Decisión que se pide a Antonio

¿Fusiono `claude/tienda-etsy-v49wjl` a la rama de trabajo diario para que el Administrador siga construyendo el catálogo (producto 2 de 5 ya lleva la mayor parte del camino andado), o prefieres seguir trabajando esa rama aparte hasta que se publique el primer listing?
