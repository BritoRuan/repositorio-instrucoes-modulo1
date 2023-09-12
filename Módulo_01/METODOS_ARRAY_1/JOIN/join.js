// JOIN

// Junta todos os elementos de um array em uma String, separando-os com vírgulas, e retorna esta string.

const lista = ['Ruan', 'Brito']
const nick = lista.join() 

console.log(nick) // Ruan, Brito

const lista2 = ['Ruan', 'Brito']
const nick2 = lista2.join('')

console.log(nick2) // RuanBrito

const lista3 = ['Ruan', 'Brito']
const nick3 = lista3.join(' de Jesus ') // Ruan de Jesus Brito

console.log(nick3)