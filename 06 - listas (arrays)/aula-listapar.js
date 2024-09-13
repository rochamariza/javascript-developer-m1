/* 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/

const numeros = [20, 31, 42, 53, 64, 75, 86];

for (let i = 0; i < numeros.length; i++) {
    const int = numeros[i];
    if ((int % 2) === 0){
        console.log(int);
    }
}