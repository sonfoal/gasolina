function ordenarValores() {
  var valor1 = parseFloat(document.getElementById("valor1").value);
  var valor2 = parseFloat(document.getElementById("valor2").value);
  var valor3 = parseFloat(document.getElementById("valor3").value);

  var valores = [valor1, valor2, valor3];
  valores.sort(function(a, b) {
    return a - b;
  });

  var resultado = "Valores ordenados: " + valores.join(", ");
  document.getElementById("resultado").innerHTML = resultado;
}
