const {gets, print} = require('../06 - listas (arrays)/maiornota-exportar.js');

const numerosSorteados = [];
const maior = Math.max(...numerosSorteados)

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado)
    
}

let maiorNumero = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorNumero){
        maiorNumero = numeroSorteado
    }
    
}
print(maiorNumero);