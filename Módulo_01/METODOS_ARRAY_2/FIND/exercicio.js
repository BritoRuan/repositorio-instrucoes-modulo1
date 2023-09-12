const carros = [
  {
    nome: 'Nissan 350z',
    marca: 'nissan',
    ano: 2009,
    cor: 'Cinza'
  }, 

  {
    nome: 'corola',
    marca: 'toyota',
    ano: 2020,
    cor: 'prata'
  }, 

  {
    nome: 'hillux',
    marca: 'toyota',
    ano: 2018,
    cor: 'branco'
  }, 
]


const buscarCarro = (marca, arrayCarros) => {
  return arrayCarros.find((el) => {
    return el.marca === marca
  })
}

console.log(buscarCarro('toyota', carros))