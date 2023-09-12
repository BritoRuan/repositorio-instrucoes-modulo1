// SOME ()

// Testa se ao menos um dos elementos do arrat passam pelo teste implementando na função callback, passada como argumento e retorna true ou false

const letras = ['a', 'b', 'c']

const resultado = letras.some((letra) => {
  return letra === 'c'
}) 

console.log(resultado)