/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e
 *  exibe todas as palavras que possuem
 * mais de 6 caracteres. Utiliza a estrutura de repetição
 *  for of para percorrer o array.
 */

let nomesAleato=['Eva','Pedro','Bruno','Jessica','Luiz',
'Jose','Lia','Carla','Ana','Sol','Flor',
]
 for ( var nome of nomesAleato){
   if (nome.length >= 5 ){
    console.log(nome)
   }
 }

 