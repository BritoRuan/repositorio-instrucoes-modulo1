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

]

const fiscalizarFesta = (arrayObjetos) => {
  const resultado = arrayObjetos.every((el => {
    return el.idade > 17
  }))

  if(resultado){
    console.log('Festa Liberada')
  } else {
    console.log('Tem menor de idade')
  }
}

fiscalizarFesta(usuarios)