function validarCampos() {
  // Obter os valores dos campos de entrada
  var proporcaoCimento = parseFloat(document.getElementById('proporcao-cimento').value);
  var proporcaoAreia = parseFloat(document.getElementById('proporcao-areia').value);
  var junta = parseFloat(document.getElementById('junta').value);
  var larguraTijolo = parseFloat(document.getElementById('largura-tijolo').value);
  var alturaTijolo = parseFloat(document.getElementById('altura-tijolo').value);
  var comprimentoTijolo = parseFloat(document.getElementById('comprimento-tijolo').value);
  var areaParede = parseFloat(document.getElementById('area-parede').value);

  // Validar se os campos estão preenchidos corretamente
  if (proporcaoCimento === '' || proporcaoAreia === '' || junta === '' || larguraTijolo === '' || alturaTijolo === '' || comprimentoTijolo === '' || areaParede === '') {
    alert('Por favor, preencha todos os campos com valores válidos maiores que zero.');
    return;
  }

  // Chamar a função para calcular os materiais
  calcularMateriais(proporcaoCimento, proporcaoAreia, junta, larguraTijolo, alturaTijolo, comprimentoTijolo, areaParede);
}

function calcularMateriais(proporcaoCimento, proporcaoAreia, junta, larguraTijolo, alturaTijolo, comprimentoTijolo, areaParede) {
  var quantidadeTotalAreia = junta * larguraTijolo * ((2 * alturaTijolo) * (1.07 / ((alturaTijolo + 1.5) * (comprimentoTijolo + 1.5) / 10000)) * areaParede / 1000000 * 1.05);

  var quantidadeTotalCimento = (quantidadeTotalAreia / proporcaoAreia) * (1400 / 42.5);

  var quantidadeTotalTijolos = 1.05 / ((alturaTijolo + 1.5) * (comprimentoTijolo + 1.5) / 10000) * areaParede;

  // Exibir o resultado
  document.getElementById('resultado-cimento').innerHTML = "Quantidade de Cimento: " + quantidadeTotalCimento.toFixed(0) + " sacos de 42,5kg.";
  document.getElementById('resultado-areia').innerHTML = "Quantidade de Areia: " + quantidadeTotalAreia.toFixed(0) + " m³.";
  document.getElementById('resultado-tijolos').innerHTML = "Quantidade de Tijolos: " + quantidadeTotalTijolos.toFixed(0) + " unidades de blocos de " + larguraTijolo + " cm.";
}
