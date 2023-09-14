const usuarios = [
  { nome: 'Guido', sobrenome: 'Cerqueira', idade: '31' },
  { nome: 'Daniel', sobrenome: 'Lopes', idade: '29' },
  { nome: 'Vitor', sobrenome: 'Vidal', idade: '28' },
]

const novoArray = usuarios.map((usuario) => {
  return { nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, idade: usuario.idade } // Manipulando e criando a propriedade nomeCompleto
})

console.log(novoArray) // { nomeCompleto: 'Guido Cerqueira', idade: '31' },