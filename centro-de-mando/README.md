# Centro de Mando · Proyecto JL

Sistema de administración automática para los negocios y webs de Antonio,
operado por Claude Code desde este repositorio.

## Qué hace hoy

Una Routine diaria ("Administrador · Centro de Mando JL") se despierta sola,
sin que Antonio tenga que pedirlo, y en cada disparo:

1. Consulta el Centro de Mando existente en el ordenador de Antonio
   (`estado_de_las_tareas`, `parte_de_hoy`) para saber qué tareas locales
   han fallado y qué frentes siguen abiertos.
2. Revisa el correo de Gmail conectado y actúa sobre él como lo haría
   Antonio: responde lo que tiene respuesta clara, archiva/etiqueta lo
   resuelto, y dosifica lo que de verdad necesita su decisión personal.
3. Actualiza `ESTADO.md` en este repositorio con la foto real del día
   (no inventada) y hace commit + push.
4. Si algo requiere una decisión que solo Antonio puede tomar (dinero,
   cancelar algo, tocar el canon de Drakhthar, cualquier cosa irreversible),
   lo dice explícitamente en vez de decidir por su cuenta.

## Qué NO hace todavía (huecos reales, no ocultos)

- **Vídeos publicitarios**: no hay herramienta de generación/edición de
  vídeo conectada a esta sesión. Pendiente de decidir con qué servicio.
- **Etsy**: no hay conector de Etsy. No se puede publicar ni tocar listados
  desde aquí hasta que se conecte.
- **Contabilidad**: no hay conector contable/fiscal. No se registran ni
  se tocan cifras reales hasta que se decida qué herramienta usar
  (hoja de cálculo, Holded, Quaderno, etc.).
- **Libros KDP**: esta Routine no redacta manuscritos completos por su
  cuenta. La escritura de libros necesita partir de un encargo concreto
  (tema, público, extensión) para no inventar contenido; se hace en
  sesiones dedicadas, no en el barrido diario.

## Regla de oro

Nunca se inventa contenido de canon de Drakhthar ni datos de negocio.
Cuando falta un dato real, se pregunta o se deja constancia en `ESTADO.md`
en vez de rellenarlo con suposiciones.
