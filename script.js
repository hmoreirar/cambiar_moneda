// cambios de moneda fijos
const tasaDolar = 0.0011; // CLP-USD
const tasaEuro = 0.001; // CLP-EUR

// pregunta al usuario
function solicitarDatos() {
  let monto = Number(prompt("Ingresa el monto en pesos chilenos (CLP):"));
  if (isNaN(monto) || monto <= 0) {
    alert("Monto no valido, intenta de nuevo.");
    return;
  }

  let moneda = prompt(
    "¿A qué moneda quieres convertir? Escribe 'usd' para dolar o 'eur' para euro"
  );

  convertirMoneda(monto, moneda);
}

// proceso de cambio
function convertirMoneda(monto, moneda) {
  let resultado;

  if (moneda === "usd") {
    resultado = monto * tasaDolar;
    mostrarResultado(monto, "USD", resultado);
  } else if (moneda === "eur") {
    resultado = monto * tasaEuro;
    mostrarResultado(monto, "EUR", resultado);
  } else {
    alert("Moneda no válida, usar 'usd' o 'eur'.");
  }
}

// mostrar el resultado
function mostrarResultado(montoOriginal, monedaDestino, montoConvertido) {
  let mensaje = `Convertiste ${montoOriginal} CLP a ${montoConvertido} ${monedaDestino}`;
  console.log(mensaje);
  alert(mensaje);
}

// inicia simulador
solicitarDatos();
