let plata = 0;
let tiempo = 0;
let todoCorrecto = false;

do {
  inputUsuario = parseFloat(
    prompt("Cuanta plata quiere depositar?", "Monto mínimo 1000")
  );
  if (!isNaN(inputUsuario)) {
    plata = inputUsuario;
  }
} while (plata < 1000);

do {
  inputUsuario = parseInt(
    prompt("Por cuantos dias? (TNA 75%)", "30 dias mínimo")
  );
  if (!isNaN(inputUsuario)) {
    tiempo = inputUsuario;
    todoCorrecto = true;
  }
} while (tiempo < 30);

if (todoCorrecto) {
  let interesesGanados = calcularPlazo(plata, tiempo);
  alert(
    "Intereses recibidos en " +
      tiempo +
      " días es " +
      (Math.round(interesesGanados * 100) / 100).toFixed(2)
  );
}

function calcularPlazo(plata, tiempo) {
  let interesesGanados = plata * ((tiempo * 0.75) / 365);
  return interesesGanados;
}
