# Instalador de escritorio (Tauri 2)

Empaqueta `../index.html` como aplicación nativa con icono propio, ventana
propia y entrada en el menú Inicio o en Aplicaciones.

| Plataforma | Salida | Tamaño del paquete |
|---|---|---|
| Windows 10/11 | `.exe` NSIS, instala para el usuario actual, sin permisos de administrador | 1,2 MB |
| macOS 10.15+ | `.dmg` universal (Intel y Apple Silicon) | 4,1 MB |

## Primera compilación verificada

Ejecución 34107539434 del 7 de septiembre de 2026, commit `e36f5a1`:
ambos trabajos completados con éxito a la primera. Windows tardó 4 min 29 s
y macOS 6 min 32 s. Los instaladores quedan en "Artifacts" de esa ejecución
durante 90 días.

## Cómo se compila

Automáticamente en GitHub Actions (`.github/workflows/build-desktop.yml`) en
cada cambio dentro de `productos/etsy-fee-calculator/`, o a mano desde la
pestaña Actions → "Build desktop installers" → "Run workflow". Los
instaladores se descargan desde la ejecución, en "Artifacts".

Compilar en local exige Rust y las dependencias de Tauri de cada sistema;
no hace falta para publicar.

## Firma de código

Los instaladores salen sin firmar. Windows mostrará SmartScreen ("Windows
protegió tu PC → Más información → Ejecutar de todas formas") y macOS pedirá
abrir con clic derecho → Abrir la primera vez. Se documenta en el PDF de
inicio rápido y en el listing. Cuando las ventas lo justifiquen: certificado
de firma de código para Windows y cuenta de desarrollador de Apple para
notarizar.

## Qué cambia dentro de la app cuando corre como programa

`index.html` detecta `window.__TAURI__` y, en ese caso, "Exportar copia" y
"Exportar CSV" abren el diálogo nativo de guardar y escriben el archivo
donde el usuario elija. En un navegador normal sigue funcionando la descarga
habitual. Los permisos están en `src-tauri/capabilities/default.json`.
