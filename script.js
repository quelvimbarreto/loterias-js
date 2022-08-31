const loteria = document.getElementById("loteria");
const resultado = document.getElementById("resultado");
const botao = document.getElementById("gerar");
let quantidadeNumerosGerados, quantidadeNumerosSorteados, numerosSorteados;

//PEGA O VALOR DO CAMPO DE OPÇÃO
function selecionaLoteria() {
  switch (loteria.value) {
    case "megasena":
      quantidadeNumerosGerados = 60;
      quantidadeNumerosSorteados = 6;
      break;
    case "lotofacil":
      quantidadeNumerosGerados = 25;
      quantidadeNumerosSorteados = 15;
      break;
    default:
      quantidadeNumerosGerados = 0;
      quantidadeNumerosSorteados = 0;
      break;
  }
}

//GERA OS NÚMEROS
const geraNumeros = (min, max) => Array.from({ length: max }, () => (min += 1));

//SORTEIA OS NÚMEROS
const sorteiaNumeros = (array, quantidade) =>
  Array.from({ length: quantidade }, () => {
    return array.splice((Math.random() * array.length) | 0, 1);
  });

//IMPRIME O RESULTADO
function imprime() {
  resultado.innerHTML = "";
  numerosSorteados
    .sort((a, b) => a - b)
    .forEach((num) => {
      const span = document.createElement("span");
      resultado.appendChild(span);
      span.innerText = num < 10 ? "0" + num : num;
    });
}
//EVENTO DO BOTÃO
botao.addEventListener("click", () => {
  selecionaLoteria();
  numerosGerados = geraNumeros(0, quantidadeNumerosGerados);
  numerosSorteados = sorteiaNumeros(numerosGerados, quantidadeNumerosSorteados);
  imprime();
});
