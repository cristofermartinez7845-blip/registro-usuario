# Formulario de Registro de Usuario

Proyecto individual para la Unidad II, Sesión 4 (Programación dirigida por eventos) de la asignatura Herramientas Avanzadas para el Desarrollo de Aplicaciones (102HAD1).

## Descripción

Formulario de registro de usuario con 4 campos que se validan en tiempo real mientras el usuario escribe, sin recargar la página.

## Campos validados

| Campo | Evento usado | Regla de validación |
|---|---|---|
| Nombre completo | `input` | Al menos 3 letras, solo letras y espacios (sin números) |
| Correo electrónico | `input` | Formato `usuario@dominio.com` mediante expresión regular |
| Contraseña | `input` | Mínimo 8 caracteres, al menos una letra y un número |
| Teléfono | `input` | Formato salvadoreño de 8 dígitos (ej: 7123-4567) |

## Cómo funciona la validación

Cada campo tiene un `addEventListener('input', ...)` que se dispara cada vez que el usuario escribe. Dentro del listener:

1. Se toma el valor actual del campo.
2. Se evalúa contra una expresión regular o regla específica del campo.
3. Según el resultado (`true`/`false`), se llama a la función `mostrarResultado()`, que:
   - Agrega la clase `valido` o `invalido` al input (cambia el color del borde).
   - Muestra un mensaje en rojo (error) o verde (éxito) debajo del campo, actualizando el `textContent` del `<span>` correspondiente.
4. Se actualiza un objeto `estadoValidacion` que lleva el registro de si cada campo es válido.
5. El botón "Registrarse" permanece deshabilitado hasta que **todos** los campos sean válidos (función `habilitarBoton()`).

Todo esto ocurre en el cliente, sin recargar la página, cumpliendo con el requisito de programación dirigida por eventos.

## Archivos

- `index.html` — Estructura del formulario.
- `style.css` — Estilos, incluyendo los estados visuales de éxito/error.
- `script.js` — Lógica de validación en tiempo real.

## Autor

Cristopher — Ingeniería en Sistemas, UTLA
