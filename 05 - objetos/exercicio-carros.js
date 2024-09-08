/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carros{
    marca;
    cor;
    gasto;

    constructor(marca, cor, gasto){
        this.marca = marca;
        this.cor = cor;
        this.gasto = gasto;

    }
    calculo(distancia, precoComb){
        return distancia * this.gasto * precoComb;
    }
}

const uno = new Carros('Fiat', 'Prata', 1 / 12);

console.log(uno.calculo( 70, 5).toFixed(2));
