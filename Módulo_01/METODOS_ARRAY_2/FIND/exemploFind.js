const usuarios = [

  {
    nome: 'joao',
    idade: 23
  }, 

  {
    nome: 'maria',
    idade: 19
  }, 
  
  {
    nome: 'ana',
    idade: 30
  }, 
  {
    nome: 'joao',
    idade: 19
  }, 

  {
    nome: 'Pâmela',
    idade: 23,
  },

  {
    nome: 'Ruan',
    idade: 19,
  }

]

const resultado = usuarios.find((usuario) => {
  return usuario.nome === 'Pâmela'  //
})

console.log(resultado) // RETORNA O OBJETO COMPLETO COM O OBJETO COMPLETO


const nomes = ['ana', 'ruan', 'bruno']

const buscandoPorNomes = nomes.find((el) => {
  return el === 'rodrigo' // Retorna Undefined
})



console.log(buscandoPorNomes)