/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o 
 * elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final.
 *  A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, 
 * retorna o array atualizado.
 */
//A
let elemento='guarda roupa'
function adicionarElemento(elementos){
    elementos.push(elemento)
    return elementos   
}
console.log(adicionarElemento(['cama,cortina,escrivania,prateleira']))
//B
function removerUltimoElemento(elementos){
          elementos.pop()
          return elemento
}
console.log(`Elemento removido: "${elemento}"`)
//C
let i1=2
let i2=4
function removerElementosIntervalo(paises){
            paises.splice(i1,i2);
            return paises
           
}
console.log(removerElementosIntervalo(['Brasil', 'Bolivia', 'Chile', 'Argentina','Uruguay','Paraguay', 'Venezuela']))