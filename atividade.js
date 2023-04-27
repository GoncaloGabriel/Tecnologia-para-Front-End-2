// 1)Crie um objeto que represente uma pessoa com as seguintes 
// propriedades: nome, idade, profissão e 
// endereço (logradouro, bairro, cidade e cep).
const pessoa = {
    nome : 'Gabriel', 
    idade: 27,
    profissao: 'Programador',
    endereco:{
        logradouro: 'av 1 de maio',
        bairro: 'Jaguaribe',
        cidade: 'João Pessoa',
        cep: '58015-159'
    }

}

// 2) Desenvolva uma função que receba o objeto criado no item 1 e 
//imprima os valores das propriedades (utilizando o console.log()).
function imprimirdados(pessoa){
console.log("Nome:" + pessoa.nome);
console.log("Idade:" + pessoa.idade);
console.log("Profissao:" +pessoa.profissao);
console.log(pessoa.endereco.logradouro);
console.log(pessoa.endereco.bairro);
console.log(pessoa.endereco.cidade);
console.log(pessoa.endereco.cep);
}
imprimirdados(pessoa);

// 3) Adicione ao objeto criado no item 1 uma nova propriedade chamada "telefone" 
//e associe um valor de número de telefone qualquer.
pessoa.telefone = "(83)986774565";

// 4) Adicione ao objeto criado no item 1 uma função chamada obterDados() que deve retornar uma String 
//com os nomes e valores das propriedades concatenados.
pessoa: function imprimirdados() {
    transformar = JSON.stringify(pessoa);
    console.log(transformar);
};
imprimirdados();
  

//5) Adicione ao objeto criado no item 1 uma função que compara o objeto atual com um objeto passado 
//como parâmetro, e deve retorna True caso o nome e idade das pessoas sejam iguais, caso contrário 
//deve retornar False;
pessoa.comparar = function(pessoa2) {
    if (this.nome === pessoa2.nome && this.idade === pessoa2.idade) {
      return true;
    } else {
      return false;
    }
  }

  // 6) Crie um novo objeto que represente uma nova pessoa com a mesma 
  //estrutura do objeto criado no item 1.
  let pessoa2 = {
    nome: "Antônio",
    idade: 150,
    profissao: "Serralheiro",
    endereco: {
      logradouro: "Rua da morte",
      bairro: "Águas Claras",
      cidade: " Brasilia",
      cep: "589587456"
    },
    telefone:988745698
  };
  pessoa2: function transformarString(){
    transformar = JSON.stringify(pessoa2)
    console.log(transformar)
  }
  transformarString()

  // 7) Imprima o resulta da comparação do objeto criado no item 1 com o objeto criado no item 7.
  console.log(pessoa.comparar(pessoa2));


