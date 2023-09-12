// EVERY 

// Testa se todos os elementos do array passam pelo teste implementado na função callback, passada como argumento e retorna True ou False

const numeros = [1, 2, 3, 4]

console.log(numeros.every((el) => {
  return el < 5
}))


/// OUTROS EXEMPLOS 

const frutas = ['abacaxi', 'manga', 'melancia']
const numeros2 = [1, 2, 3, 4]

const resultadoDaFrutas =  frutas.every((elementos) => {  // UMA FUNÇÃO CALLBACK EXECUTANDO EM EVERY
  // if(elementos !== 'banana'){
  //   console.log('Não tem banana na lista')
  // }

  return elementos !== 'banana'
})

const resultadoDosNumeros = numeros2.every((el) => {
  return el !== 5 
})

console.log(resultadoDaFrutas)
console.log(resultadoDosNumeros)