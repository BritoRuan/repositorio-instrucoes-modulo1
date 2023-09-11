const nomes = ['Ruan', 'Pâmela', 'Reidner', 'Alan', 'Messias', 'João']

nomes.shift() // Remove o primeiro item o array (Obs.: Caso queira retornar esse valor é so atribuir para uma variavel)
// let primeiroNome = nomes.shift() // Exemplo: Retornaria Pâmela pois o primeiro nome já foi removido
console.log(nomes) // Resultado

nomes.unshift('Ruan') // Oposto do shift, o metodo unshift como proprio nome já diz ele insere no inicio do array
console.log(nomes) // Resultado