# Paquete de venta · Fee & Price Calculator v1.7

| Archivo | Qué es |
|---|---|
| `Fee-Price-Calculator-v1.7.zip` | **Lo que se sube a Etsy.** 145 KB. Contiene la app, la guía y la licencia. |
| `Start-Here.pdf` | Guía de inicio rápido, una página por idioma (inglés, español, francés, alemán, italiano). El manual completo va dentro de la propia app. |
| `LICENSE.txt` | Licencia de uso en inglés y español. |
| `SHA256.txt` | Hash del ZIP, para publicarlo en el listing y que el comprador pueda verificar el archivo. |
| `10-textos-listing.md` | Título, 13 tags, descripción, precio y guion de las 10 imágenes y el vídeo. |

## Cómo regenerar el ZIP tras cambiar la app

1. Copiar `../index.html` aquí como `Fee-Price-Calculator.html`.
2. Regenerar `Start-Here.pdf` si cambian las instrucciones.
3. Comprimir los tres archivos y recalcular el hash.

## Antes de publicar

- [ ] Verificar en el Administrador de tienda las comisiones de Reino Unido,
      Canadá y Australia, que en la app están marcadas como no verificadas.
- [ ] Dar de alta el NIF-IVA intracomunitario para no pagar IVA sobre las
      comisiones de Etsy.
- [ ] Decidir si el repositorio pasa a privado antes de publicar el listing.
- [ ] Rellenar el resto de la checklist de `etsy/05-checklist-publicacion.md`.

El instalador de escritorio no se incluye en el ZIP: el Control de
aplicaciones inteligente de Windows 11 bloquea los ejecutables sin firma
digital y no permite excepciones. Se retomará cuando haya certificado de
firma de código. Ver `../desktop/README.md`.
