Estado: PENDIENTE DE APROBACIÓN
Qué es: informe de seguimiento — compara el estado de hoy de las tareas programadas del ordenador de Antonio con el de días anteriores y detecta una discrepancia entre dos fuentes de datos; solo para que Antonio lo revise, no cambia nada.

# Seguimiento de tareas programadas rotas — 2026-09-23

## Resumen del cambio
El 2026-09-20, `estado_de_las_tareas` señalaba **4 tareas rotas** con el
mismo código `2147946720` (`0x800710E0`): Carruseles TikTok - generación
nocturna, ElegTuPatinete - actualizar precios, Informe tráfico webs (cada
3 días), TikTok - seguimiento diario.

Hoy, 2026-09-23, los datos en vivo de `estado_de_las_tareas` muestran algo
distinto:

- **Ahora "bien":** Carruseles TikTok - generación nocturna, ElegTuPatinete
  - actualizar precios, Informe tráfico webs (cada 3 días). Las 3 se han
  arreglado solas o alguien las ha tocado en el equipo de Antonio — no se
  puede saber cuál desde aquí.
- **Siguen/aparecen rotas, mismo código `2147946720`:** TikTok -
  seguimiento diario (ya estaba rota el 09-20) y **"Actualizar Publicado
  Hoy"** (no estaba en la lista de rotas el 09-20; o ha empezado a fallar
  entre el 09-20 y hoy, o el 09-20 no se registró bien — no se puede
  distinguir desde esta sesión).

## Aviso: dos fuentes no coinciden hoy
`parte_de_hoy` (el resumen de lo ocurrido esta noche) dice que **3 tareas
terminaron con error anoche**: "Informe tráfico webs (cada 3 días)",
"Quick Share Relaunch" y "Carruseles TikTok - generación nocturna".

Pero `estado_de_las_tareas` (estado en vivo, consultado ahora mismo) dice
que esas dos primeras (Informe tráfico webs, Carruseles TikTok) están
**bien**, y en cambio marca como rotas "TikTok - seguimiento diario" y
"Actualizar Publicado Hoy", que `parte_de_hoy` no menciona como fallo de
anoche.

Lectura más probable, sin poder confirmarla desde aquí: `parte_de_hoy`
informa de errores puntuales de la ejecución de anoche (una tarea puede
fallar una vez y luego seguir "bien" en su próximo disparo, o viceversa),
mientras que `estado_de_las_tareas` da el estado de la última ejecución
registrada en el Programador de tareas en el momento de la consulta,
que puede ser una ejecución distinta (de otro horario) a la que resume
`parte_de_hoy`. Es decir, probablemente no hay contradicción real, sino
que ambas herramientas miran "instantáneas" distintas en el tiempo — pero
esto es una hipótesis, no un hecho confirmado.

## "Quick Share Relaunch" — sigue sin identificar (4º día)
Mencionada con error otra vez hoy por `parte_de_hoy`, y sigue sin
aparecer en la lista de 14 tareas de `estado_de_las_tareas`. Ya van cuatro
días (09-20 a 09-23) sin poder identificar qué proceso es desde esta
sesión. Necesita que Antonio la busque directamente en su Programador de
tareas de Windows (puede no ser una "tarea programada" en sentido
estricto, sino otro tipo de proceso con nombre parecido).

## Causas típicas del código `0x800710E0` (mismas fuentes que el 09-13 y 09-20, confirmadas de nuevo hoy)
Según Microsoft Learn y varias guías públicas de soporte de Windows:
1. La tarea no tiene privilegios de administrador — revisar en la pestaña
   General: "Ejecutar con los privilegios más altos" y que el usuario/grupo
   sea el correcto (ej. "Administradores").
2. La tarea exige alimentación de red/CA y el equipo está con batería —
   revisar en la pestaña Condiciones: desmarcar "Iniciar la tarea solo si
   el equipo funciona con corriente alterna" si aplica.
3. La cuenta que ejecuta la tarea no tiene contraseña — Windows rechaza
   tareas programadas bajo cuentas sin contraseña si se ignoró el aviso al
   crearlas.
4. Revisar también en la pestaña Configuración: "Permitir que la tarea se
   ejecute a petición" y "Ejecutar la tarea lo antes posible después de un
   inicio programado no realizado".
5. Tras cualquier cambio, reiniciar el equipo y comprobar.

## Qué necesito de Antonio
- Abrir el Programador de tareas de Windows y mirar el Historial de
  "TikTok - seguimiento diario" y "Actualizar Publicado Hoy" (pestaña
  Historial de cada tarea) para ver el mensaje de error exacto de hoy.
- Buscar "Quick Share Relaunch" directamente en su equipo (Programador de
  tareas, o si es otro tipo de proceso/app) — cuarto día que esta sesión
  no puede identificarlo.
- Si alguna de las 3 tareas que hoy están "bien" (Carruseles TikTok,
  ElegTuPatinete, Informe tráfico webs) las arregló él mismo, decirlo para
  no seguir investigando algo ya resuelto.

No se ha tocado ni se puede tocar la máquina de Antonio desde aquí; esto
es solo diagnóstico a distancia con las dos herramientas del conector
`centro-de-mando` y fuentes públicas.
