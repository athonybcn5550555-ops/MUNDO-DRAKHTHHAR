# Velmont clásico (proyecto aparcado)

Survival horror al estilo de Resident Evil 1 y 2 (1996–1998) en HD: cámaras
fijas con fondos de alta calidad, personajes 3D animados encima, puzzles e
historia con diálogos hablados. Aparcado el 25-sep-2026 tras validar la
técnica de fondos.

## Decisiones tomadas

| Tema | Decisión |
|---|---|
| Controles | Solo modernos (te mueves hacia donde empujas el stick) |
| Plataforma | PC con mando |
| Voces | Voz del navegador (speechSynthesis) para empezar; mejor en Edge |
| Historia | La escribe Claude y el usuario la revisa |
| Fondos | **Imágenes generadas con IA** (ChatGPT) + calibración 3D. Validado: calidad muy superior al render por código |

## Prototipo validado

Artifact: https://claude.ai/artifact/TBt7komYiWmwja3HzHcWxC

- `prototipo/hall.jpg`: fondo del vestíbulo generado con ChatGPT (1376×768; pedir el original a mayor resolución).
- `prototipo/game.html`: prueba jugable. Sustituir `THREE_URL` por `https://cdn.jsdelivr.net/npm/three@0.160.0`.
  Los modelos se publican como `Soldier.js` / `zombie.js` (GLB en base64, porque el artifact no sirve `.glb`).
- `prototipo/calib.html`: herramienta de calibración. Dibuja una cuadrícula sobre el suelo de la imagen
  con parámetros en la URL (`fov`, `h` altura, `p` inclinación, `y` giro, `bx` píxel de la alfombra abajo, `cw` ancho de alfombra).
- `prototipo/descomprimir-glb.mjs`: quita la compresión meshopt de un GLB (necesario en el artifact).

Calibración del vestíbulo: FOV 45°, altura de cámara 2,6 m, inclinación 0°, giro 15,8°,
posición (2.445, 2.6, 5.831). Zona caminable y oclusores (columnas y estatuas) en `game.html`.

### Método por cámara (10–15 min cada una)
1. Generar la imagen (16:9, máxima resolución, mismo estilo; pasar imágenes anteriores como referencia).
2. Calibrar la cámara con `calib.html` hasta que la cuadrícula siga las baldosas.
3. Marcar la zona caminable (polígono) y los obstáculos.
4. Poner cilindros/cajas invisibles que solo escriben profundidad en los objetos de primer plano.
5. Ajustar la luz de los personajes al tono de la imagen.

Riesgo principal: coherencia entre vistas de la misma sala (la IA redibuja cada imagen).

## Modelos y animaciones

| Recurso | Origen | Licencia | Estado |
|---|---|---|---|
| Zombi realista (uniforme) | Mixamo, vía github.com/liuspros/xsurv `public/models/enemy.glb` | Mixamo (uso en juegos) | Probado; ropa recoloreable por zonas de la textura |
| Soldado con Idle/Walk/Run | three.js `examples/models/gltf/Soldier.glb` (Mixamo) | Mixamo | Probado; estilo futurista, provisional |
| Lobo/perro con Attack/Death/Gallop | Quaternius Ultimate Animated Animals, vía github.com/sekaikx/woods (PR 6) `Wolf.glb` | CC0 | Probado; estilo low poly |
| 46 animaciones (pistola, golpes, muerte…) | github.com/J-Ponzo/gltf-universal-animation-library | CC0 | Descargado; otro esqueleto, requiere retarget por nombres |
| Zombie Attack (FBX con skin) | Mixamo, descargado por el usuario | Mixamo | Recibido (16 MB); guardar el original, no está en el repo |

Retarget entre esqueletos Mixamo: `q_destino = reposo_destino × inverso(reposo_origen) × q_origen`
por hueso, solo pistas de rotación (en `game.html`, función `retarget`).

### Descargas pendientes de Mixamo (FBX Binary, 30 fps, "In Place" en andar/correr)
Zombie Idle, Walk, Run, Attack, Biting, Stand Up, Dying, Crawl, Scream; para el
protagonista: pistola (idle, walk, run, aim, shoot, reload), hit reaction, dying.
Personajes: buscar "zombie", "police", "swat". Primera descarga "With Skin", resto "Without Skin".

## Borrador de guion (demo)

Otoño de 1998. Daniel Rivas (Unidad de Rescate Táctico) se refugia en la mansión.
En el comedor encuentra al cabo Ramírez, mordido; le habla de los perros de la
perrera, del medallón del estudio y de la galería cerrada, y le da cuatro
cartuchos. Al volver, Ramírez ya no está; reaparece convertido en el pasillo.
Salas: vestíbulo, comedor, cocina, galería, estudio, pasillo de ventanas, sala de
trofeos. Puzzles: llave de la espada, caja fuerte con código (fechas de los
retratos), medallón en la estatua. Enemigos: zombi, zombi que se arrastra, perros
que rompen las ventanas al coger el medallón.

## Para retomarlo
1. El usuario descarga las animaciones de Mixamo y un protagonista realista.
2. Generar con ChatGPT las imágenes de las 7 salas (2–3 cámaras por sala).
3. Construir la demo de 20–30 min con el método de arriba.
