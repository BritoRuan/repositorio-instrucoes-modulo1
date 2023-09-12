const nomes = ['joao', 'maria', 'jose', 'ruan']

const resultado = nomes.some((el) => {
  return el === 'ruan'
})

console.log(resultado)  // RETORNA TRUE


const numeros = [2, 5, 9, 7]
const resultadoDois = numeros.some((el) => {
  return el % 2 === 0 // Verifica se ao menos o resto de um número é 0 (PAR)
})

console.log(resultadoDois)  // RETORNA TRUE