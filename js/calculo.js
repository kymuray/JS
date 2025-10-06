$("#calcular").click(function () {
  var valor1 = parseFloat($("#txtvalor1").val());
  var valor2 = parseFloat($("#txtvalor2").val());
  var valor3 = parseFloat($("#txtvalor3").val());
  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, insira valores válidos!");
    return;
  }
  var resultado = parseFloat(valor1 + valor2 + valor3);
  $("#txtresultado")
    .text("Valor de resultado " + resultado)
    .css({ 'font-weight': 'bold', 'color': 'blue', 'font-size': '18pt' });
});