const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let somaNumeros = 0


for(let i = 0; i < numeros.length; i++){
  somaNumeros += numeros[i]
}

console.log(`A soma dos números do array é: ${somaNumeros}`)