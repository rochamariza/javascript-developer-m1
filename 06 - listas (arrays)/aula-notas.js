const notas = [];

notas.push(5)
notas.push(10)
notas.push(10)

let soma = 0;

for (let i = 0; i < notas.length; i++){
    const notaTotal = notas[i];
    soma = soma + notaTotal;

}

const media = soma / notas.length;
console.log(media.toFixed(1))
