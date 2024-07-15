document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al cuadrado y al botón
    const cuadrado = document.getElementById('cuadrado');
    const botonCambiar = document.getElementById('botonCambiar');

    let colorActual = 'gris'; // Variable para rastrear el color actual

    // Función para cambiar el color del cuadrado y mostrar el nombre del color
    function cambiarColor() {
        if (colorActual === 'gris') {
            cuadrado.classList.remove('bg-gray-400', 'bg-red-500');
            cuadrado.classList.add('bg-blue-200');
            cuadrado.textContent = 'Azul Claro';
            colorActual = 'azul';
        } else if (colorActual === 'azul') {
            cuadrado.classList.remove('bg-blue-200', 'bg-red-500');
            cuadrado.classList.add('bg-red-500');
            cuadrado.textContent = 'Rojo';
            colorActual = 'rojo';
        } else if (colorActual === 'rojo') {
            cuadrado.classList.remove('bg-blue-200', 'bg-red-500');
            cuadrado.classList.add('bg-gray-400');
            cuadrado.textContent = 'Gris';
            colorActual = 'gris';
        }
    }

    // Agregar evento de clic al botón
    botonCambiar.addEventListener('click', cambiarColor);
});


//2

document.addEventListener('DOMContentLoaded', function() {
    const cuadrado2 = document.getElementById('cuadrado2');
    const textoInput = document.getElementById('textoInput');
    const botonBorrar = document.getElementById('botonBorrar');

    // Función para actualizar el texto dentro del cuadrado
    function actualizarTexto() {
        cuadrado2.textContent = textoInput.value;
    }

    // Evento de cambio en el input de texto
    textoInput.addEventListener('input', actualizarTexto);

    // Evento de clic en el botón "Borrar"
    botonBorrar.addEventListener('click', function() {
        textoInput.value = ''; // Limpiar el contenido del input
        cuadrado2.textContent = 'Escribe algo...'; // Restaurar texto inicial del cuadrado
    });
});

//3

document.addEventListener('DOMContentLoaded', function() {
    const inputPeso = document.getElementById('inputPeso');
    const inputAltura = document.getElementById('inputAltura');
    const botonCalcular = document.getElementById('botonCalcular');
    const resultadoIMC = document.getElementById('resultadoIMC');

    botonCalcular.addEventListener('click', function() {
        // Obtener valores de peso y altura
        const peso = inputPeso.value;
        const altura =inputAltura.value;

        // Validar que se hayan ingresado valores válidos
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert('Por favor ingrese valores válidos para peso y altura.');
            return;
        }

        // Calcular IMC (peso / altura^2)
        const imc = peso /(altura*altura);

        // Mostrar el resultado del IMC en el input correspondiente
        resultadoIMC.value = imc; 
    });
});


//4

// Factor de conversión: 1 dólar = 500 unidades de moneda local
const conversionRate = 500;

// Función para convertir entre moneda local y dólares según la dirección especificada
function convert(direction) {
  let usdAmount = parseFloat(document.getElementById('usdAmount').value);
  let localAmount = parseFloat(document.getElementById('localAmount').value);

  if (isNaN(usdAmount)) {
    usdAmount = 0;
  }
  if (isNaN(localAmount)) {
    localAmount = 0;
  }

  let result = '';
  if (direction === 'usdToLocal') {
    localAmount = usdAmount * conversionRate;
    result = `${usdAmount.toFixed(2)} dólares equivalen a ${localAmount.toFixed(2)} unidades de moneda local.`;
  } else if (direction === 'localToUSD') {
    usdAmount = localAmount / conversionRate;
    result = `${localAmount.toFixed(2)} unidades de moneda local equivalen a ${usdAmount.toFixed(2)} dólares.`;
  }

  displayResult(result);
}

// Función para mostrar el resultado en el HTML
function displayResult(message) {
  document.getElementById('resultText').textContent = message;
}

// Función para limpiar los inputs y el área de resultado
function clearInputs() {
  document.getElementById('usdAmount').value = '';
  document.getElementById('localAmount').value = '';
  document.getElementById('resultText').textContent = '';
}
