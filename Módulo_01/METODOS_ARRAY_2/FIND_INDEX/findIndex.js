// FINDINDEX

// RETORNA O ÍNDICE DO PRIMEIRO ELEMENTO DO ARRAY, CORRESPONDENTE A CONDIÇÃO IMPLEMENTADA NA FUNÇÃO CALLBACK, PASSADA COMO ARGUMENTO. CASO CONTRÁRIO, RETORNA -1 


const numeros = [1, 2, 3, 4, 5]
//               0  1  2  3  4

const procuraIndice = numeros.findIndex((el) => {
    return el === 5 // MOSTRA O ÍNIDICE ONDE ESTÁ O NÚMERO 5
}) 

console.log(procuraIndice)
