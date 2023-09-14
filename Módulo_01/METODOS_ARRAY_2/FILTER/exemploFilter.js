const numeros = [1, 4, 4, 5, 3, 1, 8]

const filtro = numeros.filter((numero) => {
  return numero === 4  // Procurou o número 4
})

console.log(filtro) // [4, 4]