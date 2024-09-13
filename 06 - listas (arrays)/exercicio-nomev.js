/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
 */

const lista = ['Vitor', 'Matheus', 'Veronica', 'Vanderlei', 'Maconico', 'Yoland', 'Vitoria'];
const nomes = lista.filter(nomes => nomes.startsWith('V'))

for (let i = 0; i < nomes.length; i++) {
    const listaArranjada = nomes[i];
    console.log(listaArranjada)
}
