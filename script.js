const btnAdicionar = document.querySelector("#btn-adiciona");
const btnRemover = document.querySelector("#btn-remove");
const qtdPessoas = document.querySelector("#qtd-pessoas");

let pessoasNoEvento = 0;

btnAdicionar.addEventListener("click", () => {
  pessoasNoEvento++;
  qtdPessoas.textContent = pessoasNoEvento;
});

btnRemover.addEventListener("click", () => {
  pessoasNoEvento--;
  qtdPessoas.textContent = pessoasNoEvento;
});
