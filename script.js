const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');
const telefono = document.getElementById('telefono');
const btnEnviar = document.getElementById('btnEnviar');

const estadoValidacion = {
  nombre: false,
  correo: false,
  contrasena: false,
  telefono: false
};

function mostrarResultado(input, mensajeId, esValido, textoError, textoExito) {
  const mensaje = document.getElementById(mensajeId);

  if (esValido) {
    input.classList.remove('invalido');
    input.classList.add('valido');
    mensaje.textContent = textoExito;
    mensaje.className = 'mensaje exito';
  } else {
    input.classList.remove('valido');
    input.classList.add('invalido');
    mensaje.textContent = textoError;
    mensaje.className = 'mensaje error';
  }

  habilitarBoton();
}

function habilitarBoton() {
  const todosValidos = Object.values(estadoValidacion).every(v => v === true);
  btnEnviar.disabled = !todosValidos;
}

nombre.addEventListener('input', () => {
  const valor = nombre.value.trim();
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
  const esValido = regexNombre.test(valor);

  estadoValidacion.nombre = esValido;
  mostrarResultado(
    nombre,
    'mensaje-nombre',
    esValido,
    'El nombre debe tener al menos 3 letras y no contener números.',
    'Nombre válido.'
  );
});

correo.addEventListener('input', () => {
  const valor = correo.value.trim();
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const esValido = regexCorreo.test(valor);

  estadoValidacion.correo = esValido;
  mostrarResultado(
    correo,
    'mensaje-correo',
    esValido,
    'Ingresa un correo válido, ej: usuario@correo.com',
    'Correo válido.'
  );
});

contrasena.addEventListener('input', () => {
  const valor = contrasena.value;
  const tieneLongitud = valor.length >= 8;
  const tieneLetra = /[A-Za-z]/.test(valor);
  const tieneNumero = /[0-9]/.test(valor);
  const esValido = tieneLongitud && tieneLetra && tieneNumero;

  estadoValidacion.contrasena = esValido;
  mostrarResultado(
    contrasena,
    'mensaje-contrasena',
    esValido,
    'Mínimo 8 caracteres, con al menos una letra y un número.',
    'Contraseña segura.'
  );
});

telefono.addEventListener('input', () => {
  const valor = telefono.value.trim();
  const regexTelefono = /^[267]\d{3}-?\d{4}$/;
  const esValido = regexTelefono.test(valor);

  estadoValidacion.telefono = esValido;
  mostrarResultado(
    telefono,
    'mensaje-telefono',
    esValido,
    'Formato esperado: 7123-4567 (8 dígitos).',
    'Teléfono válido.'
  );
});

document.getElementById('formRegistro').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Registro exitoso! Todos los campos son válidos.');
});