// FIND

// Retorna O PRIMEIRO ELEMENTO do array, correspondente a condição implementada na função CallBack, passada como argumento. Caso contrário, retorna undefined. 

const numeros = [1, 2, 3, 4, 5] 

const resultado = numeros.find((el) => {
  return el > 2
})

console.log(resultado) // PRIMEIRO ELEMENTO MAIOR QUE 2 (3)