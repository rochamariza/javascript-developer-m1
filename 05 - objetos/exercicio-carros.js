/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carros{
    marca;
    cor;
    gasto;
    kilometro;
    litros;
    preco;

    constructor(marca, cor, kilometro, litros){
        this.marca = marca;
        this.cor = cor;
        this.kilometro = kilometro;
        this.litros = litros;
        this.gasto = kilometro / litros;
    }
}

const chevrolet = new Carros('Chevrolet', 'Vermelho', 60, 14);
const renault = new Carros('Renault', 'Azul', 90, 20);
const fiat = new Carros('Fiat', 'Prata', 1, 12)
const gasolina = 5.57;

function organizar (carro1){
    if (carro1.marca === 'Chevrolet'){
        const preco = carro1.gasto * gasolina;
        console.log(`A marca do carro é ${carro1.marca}, sua cor é ${carro1.cor} e gasta em média ${carro1.gasto.toFixed(2)}l, sendo o custo da viagem R$${preco.toFixed(2)}`)
    }
    else if (carro1.marca === 'Renault'){
        const preco = carro1.gasto * gasolina;
        console.log(`A marca do carro é ${carro1.marca}, sua cor é ${carro1.cor} e gasta em média ${carro1.gasto.toFixed(2)} litros, sendo o custo da viagem R$${preco.toFixed(2)}`)
    }
    else if (carro1.marca === 'Fiat'){
        const preco = carro1.gasto * gasolina;
        console.log(`A marca do carro é ${carro1.marca}, sua cor é ${carro1.cor} e gasta em média ${carro1.gasto.toFixed(2)} litros, sendo o custo da viagem R$${preco.toFixed(2)}`)
    }
}
organizar(fiat);
