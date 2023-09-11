const nome = 'Alemanha'

let indiceDaLetra = 0
let encontreiOH = false
for (const letra of nome) {
  if(letra[0] === 'h' || letra[0] === 'H'){
    encontreiOH = true
    break
  }
  indiceDaLetra++
}

if(encontreiOH){
  console.log(`Aqui tem H, e seu indice é ${indiceDaLetra}`)
} else {
  console.log('Não foi encontrado H ou h no nome.')
}