Estado: PENDIENTE DE APROBACIÓN

Informe de diagnóstico — no toca nada del ordenador de Antonio, solo propone dónde mirar para encontrar la causa real del fallo intermitente de la tarea "ElegTuPatinete - actualizar precios" (código 1), señalado como aviso activo desde el 09-08.

# Contexto: el patrón visto hasta ahora

Según `estado_de_las_tareas` en los barridos diarios de esta Routine, la
tarea "ElegTuPatinete - actualizar precios" ha ido así:
- 2026-09-08: apareció como ROTA por primera vez.
- 2026-09-10: falló de nuevo.
- 2026-09-11: se vio "bien".
- 2026-09-12: volvió a fallar (código 1).
- 2026-09-13 (hoy): sin datos nuevos — esta sesión no tiene acceso a
  `estado_de_las_tareas`/`parte_de_hoy` hoy (el conector del Centro de
  Mando local no ha conectado, error 502 al intentarlo). No se puede
  confirmar si hoy ha fallado o no.

Esta sesión **no tiene acceso al log real de Windows** ni al script de la
tarea, así que no puede diagnosticar la causa exacta. Lo que sigue es una
guía genérica (basada en fuentes públicas sobre Task Scheduler) para que
Antonio, o quien revise el Programador de tareas, lo compruebe más rápido
la próxima vez que falle, en vez de mirar a ciegas.

# Qué significa realmente el código de salida 1

El código 1 (0x1) **no es un error del propio Programador de tareas**: es
el código de salida que devuelve el programa/script que se lanzó. El
Programador solo informa de lo que el proceso lanzado le devolvió.

# Causas típicas de fallos intermitentes con código 1 (según guías públicas)

- **Dependencia de red o de un servicio que tarda en arrancar**: si la
  tarea corre justo al iniciar el PC o después de una actualización, el
  servicio de red o el navegador/driver que necesita puede no estar listo
  todavía — esto encaja con el patrón "falla, luego un día bien, luego
  falla otra vez" que se ha visto aquí.
- **Rutas relativas**: si el script usa rutas relativas (p. ej. `.\logs`,
  `config.json`) en vez de rutas absolutas, y el Programador de tareas
  arranca el proceso desde una carpeta distinta a la esperada, falla solo
  a veces según cómo se haya disparado la tarea.
- **Campo "Iniciar en" (Start in) vacío o incorrecto** en la configuración
  de la tarea.
- **Credenciales guardadas caducadas** o permisos insuficientes de la
  cuenta con la que corre la tarea.
- **Archivo bloqueado** (por ejemplo si otro proceso tiene abierto el
  archivo de precios justo en ese momento) — encajaría con un fallo
  intermitente, no permanente.
- Herramientas concretas (scrapers, exportadores) a veces devuelven 1 en
  situaciones que no son un fallo real (p. ej. "hubo cambios y se
  aplicaron"), así que conviene mirar primero si el código 1 de este
  script en concreto significa "error de verdad" o solo "hubo cambios".

# Dónde mirar en el Programador de tareas de Windows (pasos concretos)

1. Abrir el Programador de tareas → buscar "ElegTuPatinete - actualizar
   precios" → pestaña **Historial** → mirar el evento del último fallo
   (no solo "código 1", sino el texto completo del evento, que suele
   incluir más detalle del proceso).
2. Revisar la pestaña **Desencadenadores** y **Configuración**: ¿la tarea
   tiene marcado "Iniciar la tarea solo si el equipo está inactivo" o
   depende de que haya red disponible? Si la tarea se dispara justo al
   arrancar el PC, probar a añadir un retraso de 1-2 minutos como prueba.
3. Revisar la pestaña **Acciones**: ¿el campo "Iniciar en (opcional)"
   está relleno con la carpeta correcta del script? Es la causa más común
   y más fácil de comprobar.
4. Si el script es Python/Node/PowerShell: ejecutarlo a mano exactamente
   en el momento en que suele fallar (o justo tras un reinicio) para ver
   si reproduce el error con más detalle en la consola que lo que guarda
   el Programador de tareas.
5. Comprobar si el fallo coincide con algún patrón de horario (¿siempre
   por la mañana? ¿siempre tras una actualización de Windows?) — el
   propio historial de fallos (09-08, 09-10, 09-12 — días alternos) podría
   apuntar a algo que pasa cada 2 días en el equipo de Antonio (por
   ejemplo, un reinicio automático o una tarea de mantenimiento que
   compite por el mismo archivo).

# Qué NO hace este informe

No se ha tocado el Programador de tareas de Antonio (esta sesión no tiene
acceso a su ordenador). No se inventa una causa concreta: la causa real
solo se puede confirmar mirando el historial y el script reales, que
están fuera del alcance de esta sesión.

## Fuentes (guías genéricas sobre Task Scheduler y código 0x1)

- https://comcomponent.com/en/blog/windows-task-scheduler-reliable-scheduled-tasks/
- https://techdirectarchive.com/2023/04/18/fix-windows-task-scheduler-error-0x1/
- https://www.minitool.com/news/task-scheduler-0x1.html
