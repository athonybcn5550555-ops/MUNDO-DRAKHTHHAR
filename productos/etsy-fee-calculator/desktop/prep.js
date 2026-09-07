// Copia la app (un solo archivo HTML) a dist/ para que Tauri la empaquete.
const fs = require('fs'); const path = require('path');
const src = path.join(__dirname, '..', 'index.html');
const dist = path.join(__dirname, 'dist');
fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(src, path.join(dist, 'index.html'));
console.log('dist/index.html listo (' + fs.statSync(src).size + ' bytes)');
