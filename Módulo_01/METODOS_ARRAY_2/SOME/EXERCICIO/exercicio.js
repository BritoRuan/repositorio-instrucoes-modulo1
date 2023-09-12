const nomeDeArquivos = ['.png', '.jpeg', '.exe', '.txt', '.rar', '.bat']

const verificarComputador = nomeDeArquivos.some((ex) => {
  return ex === '.bat'
})

if(verificarComputador) {
  console.log('Vírus encontrado!')
 } else {
  console.log('Nenhum vírus encontrado!')
}
