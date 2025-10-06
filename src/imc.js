function calcularIMC(peso, altura) {
  if (typeof peso !== 'number' || typeof altura !== 'number') {
    throw new Error("Peso e altura devem ser números.");
  }

  if (peso <= 0 || altura <= 0) {
    throw new Error("Peso e altura devem ser valores positivos.");
  }

  const imc = parseFloat((peso / (altura * altura)).toFixed(2));
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc < 25) {
    classificacao = 'Peso normal';
  } else if (imc < 30) {
    classificacao = 'Sobrepeso';
  } else if (imc < 35) {
    classificacao = 'Obesidade Grau I';
  } else if (imc < 40) {
    classificacao = 'Obesidade Grau II';
  } else {
    classificacao = 'Obesidade Grau III';
  }

  return { imc, classificacao };
}

module.exports = { calcularIMC };