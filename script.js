const monedasJSON = `
    [
      { "codigo": "clp", "nombre": "Peso chileno", "tasa": 1 },
      { "codigo": "usd", "nombre": "Dolar", "tasa": 0.0011 },
      { "codigo": "eur", "nombre": "Euro", "tasa": 0.001 },
      { "codigo": "gbp", "nombre": "Libra", "tasa": 0.0009 }
    ]
    `;

// verifica si existen monedas en localStorage
if (!localStorage.getItem("monedas")) {
  localStorage.setItem("monedas", monedasJSON);
}

// recupera json desde localstorage
const monedas = JSON.parse(localStorage.getItem("monedas"));

// llenar selects
function llenarSelect(id) {
  const select = document.getElementById(id);
  monedas.forEach((moneda) => {
    let opcion = document.createElement("option");
    opcion.value = moneda.codigo;
    opcion.textContent = `${moneda.codigo.toUpperCase()} - ${moneda.nombre}`;
    select.appendChild(opcion);
  });
}

llenarSelect("origen");
llenarSelect("destino");

// funcion conversion
function convertir() {
  const monto = Number(document.getElementById("monto").value);
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;

  if (isNaN(monto) || monto <= 0) {
    alert("Ingresa un monto válido.");
    return;
  }

  if (origen === destino) {
    alert("Debes elegir monedas diferentes.");
    return;
  }

  const monedaOrigen = monedas.find((m) => m.codigo === origen);
  const monedaDestino = monedas.find((m) => m.codigo === destino);

  let montoInicio = monto / monedaOrigen.tasa;
  let montoFinal = montoInicio * monedaDestino.tasa;

  document.getElementById(
    "resultado"
  ).textContent = `${monto} ${origen.toUpperCase()} = ${montoFinal.toFixed(
    2
  )} ${destino.toUpperCase()}`;
}
