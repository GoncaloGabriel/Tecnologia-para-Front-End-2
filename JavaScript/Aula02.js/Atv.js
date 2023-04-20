// 1 - Criando o objeto pessoa
const pessoa = {
  nome: "Arthur",
  idade: 27,
  profissao: "Desenvolvedor",
  endereco: {
    logradouro: "Rua da felicidade",
    bairro: "mauazinho",
    cidade: "Manaus",
    cep: "06900000"
  }
};

// 2 - Função para imprimir os valores das propriedades do objeto pessoa
function imprimirDadosPessoa(pessoa) {
  console.log("Nome: " + pessoa.nome);
  console.log("Idade: " + pessoa.idade);
  console.log("Profissão: " + pessoa.profissao);
  console.log("Endereço: " + pessoa.endereco.logradouro + ", " + pessoa.endereco.bairro + ", " + pessoa.endereco.cidade + " - " + pessoa.endereco.cep);
}

// Chamando a função para imprimir os dados da pessoa
imprimirDadosPessoa(pessoa);

// 3 - Adicionando a propriedade telefone ao objeto pessoa
pessoa.telefone = "(11) 99999-9999";

// 4 - Adicionando a função obterDados ao objeto pessoa
pessoa.obterDados = function() {
  return "Nome: " + this.nome + "\n" +
         "Idade: " + this.idade + "\n" +
         "Profissão: " + this.profissao + "\n" +
         "Endereço: " + this.endereco.logradouro + ", " + this.endereco.bairro + ", " + this.endereco.cidade + " - " + this.endereco.cep + "\n" +
         "Telefone: " + this.telefone;
};

// Chamando a função obterDados da pessoa
console.log(pessoa.obterDados());

// 5 - Adicionando a função compararPessoa ao objeto pessoa
pessoa.compararPessoa = function(pessoa2) {
  if (this.nome === pessoa2.nome && this.idade === pessoa2.idade) {
    return true;
  } else {
    return false;
  }
};

// 6 - Criando um novo objeto pessoa2
const pessoa2 = {
  nome: "Luiz",
  idade: 27,
  profissao: "Programador",
  endereco: {
    logradouro: "Rua da morte",
    bairro: "Mauazinho",
    cidade: "Manaus",
    cep: "06900000"
  }
};

// 7 - Comparando os objetos pessoa e pessoa2
console.log(pessoa.compararPessoa(pessoa2)); // false
