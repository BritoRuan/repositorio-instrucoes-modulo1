// EXECUTA UMA FUNÇÃO CALLBACK, PASSADA COMO ARGUMENTO, PARA CADA ELEMENTO DO ARRAY, QUE RESULTA EM APENSA UM VALOR DE RETORNO

// A FUNÇÃO PASSADA COMO ARGUMENTO PARA O MÉTODO REDUCE RECEBE 4 ARGUMENTOS.

// 1 - ACUMULADOR - VALOR INICIAL (OU O VALOR DO CALLBACK ANTERIOR)
// 2 - VALORATUAL - VALOR ATUAL DO ELEMENTO
// 3 - INDEX - O INDICE ATUAL
// 4 - ARRAY - O ARRAY COMPLETO


const array = [0, 1, 2, 3, 4]

const resultado = array.reduce((acc, vlt, idx, array) => {
  return acc + vlt
})

console.log(resultado)  // 10 - SOMA DE TODOS OS ELEMENTOS DO ARRAY



// const resultado = array.reduce((acc, vlt, idx, array) => {
//   return acc + vlt
// }, 10) - VALOR INICIAL (10)

console.log(resultado) // 20 - SOMA DE TODOS OS ELEMENTOS DO ARRAY