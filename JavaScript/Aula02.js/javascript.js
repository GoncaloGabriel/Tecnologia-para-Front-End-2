// Obtenha dados da altura e o sexo (M ou F) de 15 pessoas 
// e apresente os seguintes resultados :
// - A maior e a menor altura do grupo;
// - A média de altura dos homens;
// - O número de mulheres.


var altura = [1.54, 1.80, 1.82, 1.73, 1.50, 1.71, 1.89, 2.03, 1.62, 1.51, 1.78, 1.85, 1.82, 1.20, 2.00];
var genero = ["M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M"];


function alturaMaior(altura) {
    var maiorAltura = altura[0];
    for (let i = 0; i < altura.length; i++) {
        if (altura[i] > maiorAltura) {
            maiorAltura = altura[i];
        }
    }
    return maiorAltura;
}

function alturaMenor(altura) {
    var menorAltura = altura[0];
    for (let i = 0; i < altura.length; i++) {
        if (altura[i] < menorAltura[i]) {
            menor = altura[i];
        }
    }
    return menorAltura;
}

function mediahomens(genero, altura) {
    var soma = 0;
    var media = 0;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i] === "M") {
            soma += altura[i];
            media++;
        }
    }
    return (soma / media);
}

function qtdeMulheres(genero) {
    var Mulheres = 0;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i] === "F") {
            Mulheres++;
        }
    }
    return Mulheres;
}

alert("A Maior Altura é " + alturaMaior(altura) + " Metros.");
alert("A Menor Altura é " + alturaMenor(altura) + " Metros.");
alert("A Média de Altura dos homens é de " + mediahomens(genero, altura).toFixed(2) + " Metros.");
alert("A Quantidade é de " + qtdeMulheres(genero) + " Mulheres.");
