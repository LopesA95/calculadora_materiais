function validarCampos() {
  // Obter os valores dos campos de entrada
  var proporcaoCimento = parseFloat(document.getElementById('proporcao-cimento').value);
  var proporcaoAreia = parseFloat(document.getElementById('proporcao-areia').value);
  var espessura = parseFloat(document.getElementById('espessura').value);
  var areaEmboco = parseFloat(document.getElementById('area-emboco').value);

  // Validar se os campos estão preenchidos corretamente
  if (proporcaoCimento === '' || proporcaoAreia === '' || espessura === "" || areaEmboco === '') {
    alert('Por favor, preencha todos os campos com valores válidos maiores que zero.');
    return;
  }

  // Chamar a função para calcular os materiais
  calcularMateriais(proporcaoCimento, proporcaoAreia, espessura, areaEmboco);
}

function calcularMateriais(proporcaoCimento, proporcaoAreia, espessura, areaEmboco) {
  var quantidadeTotalAreia = areaEmboco * espessura * 1.05 / 100;

  var quantidadeTotalCimento = (quantidadeTotalAreia / proporcaoAreia) * (1400 / 42.5);

  // Exibir o resultado
  document.getElementById('resultado-cimento-emboco').innerHTML = "Quantidade de Cimento: " + quantidadeTotalCimento.toFixed(0) + " sacos de 42,5kg.";
  document.getElementById('resultado-areia-emboco').innerHTML = "Quantidade de Areia: " + quantidadeTotalAreia.toFixed(0) + " m³.";
}
