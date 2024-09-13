/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;*/

const numero = [];

for (let i = 10; i < 50; i++) {
    if ((i % 2) === 0)
        numero.push(i) 
}
console.log(numero)