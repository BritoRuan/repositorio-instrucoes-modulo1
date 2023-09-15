// SOMA DE ELEMENTOS DE UM ARRAY

const array =  [0, 1, 2, 3, 4]

const resultado = array.reduce((acc, vlt) => {
  return acc + vlt
})

console.log(resultado)

// REDUÇÃO DE ARRAYS DE ARRAYS

const arrayDeArrays = [[0,1], [2, 3, 4], [14, 22, 98]]
const arrayReduzido =  arrayDeArrays.reduce((acc, vlt) => {
  acc = [...acc, ...vlt] // juntando elementos 
  return acc
},[])

console.log(arrayReduzido)
