// MAP

// Executa uma função callback passada como argumento para cada elemento do array e retorna um novo array como resultado

const numeros = [1, 2, 3, 4, 5]

const dobro = numeros.map((el) => {
  return el * 2  // MULTIPLICOU CADA ELEMENTO POR 2
})

console.log(dobro)  // [ 2, 4, 6, 8, 10 ]