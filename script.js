function converterL_ml() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. verificar se o numero não e zero
    if (num === 0) {
         resultado.innerText = "Não e possível converter o 0! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. calcular a conversão
    let resultadoConversão = num*1000;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num}L equivale a ${resultadoConversão}ml`;
  } 



  function converterml_L() {
    // 1. Pegar os valores que o usuário digitou
    let num = parseFloat(document.getElementById('num').value);
    let resultado = document.getElementById('resultado');

    // 2. Verificar se os campos não estão vazios
    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite o valor que quer converter! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. verificar se o numero não e zero
    if (num === 0) {
         resultado.innerText = "Não e possível converter o 0! ❌";
        resultado.style.color = "red";
        return;
    }
    // 3. calcular a conversão
    let resultadoConversão = num/1000;
    resultado.style.color = "blue";
  // 4. Mostrar o valor na tela
   resultado.innerText = `${num}ml equivale a ${resultadoConversão.toFixed(3)}L`;
  } 


    function limpar() {
    // Limpa os valores dos inputs
    document.getElementById('num').value = "";
    // Limpa o texto do resultado 
    document.getElementById('resultado').innerText = "";
    document.getElementById('resultado').style.color = "black";
}
