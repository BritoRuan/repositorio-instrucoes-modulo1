// Retornando tamanho de um Array

const nomes = ['Ruan', 'Pâmela', 'Reidner', 'Alan', 'Messias', 'João']

console.log('Tamanho do array:', nomes.length) // Retorando tamanho
console.log('Índice do array:', nomes.length - 1) // Retorando índice


// Adicionando um nome ao final com .length

nomes[nomes.length] = 'Érico'  // Primeiro ele verifica o tamanho do array e depois vai colocar ao final da mesma
console.log(nomes)  // Resultado