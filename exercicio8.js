/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função
 * de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e
 *  retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */

function calculadora(numero1,numero2,operacao){
         return operacao(numero1,numero2)
}
function soma(numero1,numero2){
    return numero1 + numero2
}

function substracao(numero1,numero2){
    return numero1 - numero2
}
function multiplicacao(numero1,numero2){
    return numero1 * numero2
}
function divisao(numero1,numero2){
    return numero1 / numero2
}

console.log(calculadora(5,3,soma))// return 8
console.log(calculadora(5,3,substracao)) // return 2
console.log(calculadora(5,3,multiplicacao)) // return 15
console.log(calculadora(5,3,divisao)) // return 1.6666666666666667
