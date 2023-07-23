/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */
let mercadoria= [
prod1={
    nome:'laranja',
    preco: 5.52},
prod2={ 
    nome:'maça',
    preco:2.33},
 prod3={ 
    nome:'morango',
    preco:6.50},
prod4={ 
    nome:'abacaxi',
    preco:7},   
]
console.log(mercadoria)
console.log(`o a quantidade de  produtos é ${mercadoria.length}.`)
console.log(`O valor total de todos os produtos é R$ ${(prod1.preco+prod2.preco+prod3.preco+prod4.preco)} .`)