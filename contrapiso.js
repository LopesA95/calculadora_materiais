function validarCampos() {
  // Obter os valores dos campos de entrada
  var proporcaoCimento = parseFloat(document.getElementById('proporcao-cimento').value);
  var proporcaoAreia = parseFloat(document.getElementById('proporcao-areia').value);
  var espessura = parseFloat(document.getElementById('espessura').value);
  var areaContrapiso = parseFloat(document.getElementById('area-contrapiso').value);

  // Validar se os campos estão preenchidos corretamente
  if (proporcaoCimento === '' || proporcaoAreia === '' || espessura === "" || areaContrapiso === '') {
    alert('Por favor, preencha todos os campos com valores válidos maiores que zero.');
    return;
  }

  // Chamar a função para calcular os materiais
  calcularMateriais(proporcaoCimento, proporcaoAreia, espessura, areaContrapiso);
}

function calcularMateriais(proporcaoCimento, proporcaoAreia, espessura, areaContrapiso) {
  var quantidadeTotalAreia = areaContrapiso * espessura * 1.05 / 100;

  var quantidadeTotalCimento = (quantidadeTotalAreia / proporcaoAreia) * (1400 / 42.5);

  // Exibir o resultado
  document.getElementById('resultado-cimento-contrapiso').innerHTML = "Quantidade de Cimento: " + quantidadeTotalCimento.toFixed(0) + " sacos de 42,5kg.";
  document.getElementById('resultado-areia-contrapiso').innerHTML = "Quantidade de Areia: " + quantidadeTotalAreia.toFixed(0) + " m³.";
}
