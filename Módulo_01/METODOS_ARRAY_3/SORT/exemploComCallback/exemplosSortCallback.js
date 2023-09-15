const numeros = [1, 30, 4, 6, 80, 34, 100, 200]

numeros.sort((a,b) => {
  return a - b
})

console.log(numeros)

numeros.sort((a,b) => {
  return b - a
})

console.log(numeros)