// SORT

// ORDENA OS ELEMENTOS DO PRÓPRIO ARRAY. POR PADRAO, A ORDENAÇÃO É DE ACORDO COM A TABELA UNICODE (1 e 0)


// OPCIONALMENTE PODEMOS PASSAR UMA FUNÇÃO CALLBACK QUE POSSUI DOIS PARAMETROS, SENDO ELES, O PRIMEIRO E O SEGUNDO ELEMENTO A SER COMPARADO



// EXEMPLO DE ORDENAÇÃO PADRAO

const array = [2, 4, 1, 20, 3, 43]

console.log(array.sort()) // [ 1, 2, 20, 3, 4, 43 ]


// EXEMPLO DE ORDENAÇÃO COM CALLBACK 

const arrayOrdenada = array.sort((a, b) => {
  return a - b  // b - a
}) 

console.log(arrayOrdenada) // [ 1, 2, 3, 4, 20, 43 ]