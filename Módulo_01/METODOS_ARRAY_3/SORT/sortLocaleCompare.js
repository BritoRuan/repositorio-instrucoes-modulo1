// localeCompare retorna um NÚMERO que indica se a STRING DE REFERENCIA vem antes, depois ou é igual a STRING COMPARADA

const letraA = 'a'
const letraC = 'c'


letraA.localeCompare(letraC)

// a vem antes de c
// resulta em um valor negativo

letraC.localeCompare(letraA)

// c vem depois de a
// resulta em um valor positivo

letraC.localeCompare(letraC)

// c é igual a c
// o resultado é zero

const pessoas = ['João', 'ana', 'carlos', 'beatriz']

pessoas.sort((a, b) => {
  return a.localeCompare(b) // crescente
})

console.log(pessoas)

pessoas.sort((a, b) => {
  return a.localeCompare(b) // decrescente
})
