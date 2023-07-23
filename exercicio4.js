/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */
function secFibbonacci(numero){
     let fib=[0,1]
     let i = 2;
     while(fib[i-1]+fib[i-2]<= numero){
         fib[i]=fib[i-1]+fib[i-2];
         i++;
     }
     console.log(fib)
 }
 secFibbonacci(55)