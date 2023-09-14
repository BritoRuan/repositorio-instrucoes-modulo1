// FILTER

// CRIA UM NOVO ARRAT COM TODOS OS ELEMENTOS CORRESPONDENTES A CONDIÇÃO PASSADA COM ARGUMENTO CALLBACK

const numeros = [1, 2, 3, 4, 5]
const resultado =  numeros.filter((elemento) => {
  return elemento > 2
})

console.log(resultado)