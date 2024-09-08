/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoas{
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = (peso / (Math.pow(altura, 2)));
    }
    calculo(){
        console.log(`Seu nome é ${this.nome}, você tem ${this.peso}kg e ${this.altura}m de altura, então seu IMC é de ${this.imc.toFixed(2)}`);
    }
    classPessoa(){
        if (this.imc < 18.5){
            console.log('Abaixo do Peso');
        }       
        else if (this.imc >= 18.5 && this.imc < 25){
            console.log('Peso normal');
        }
        else if (this.imc >= 25 && this.imc < 30){
            console.log('Acima do Peso');
        }
        else if (this.imc >= 30 && this.imc < 40){
            console.log('Obeso');
        }
        else {
            console.log('Severamente Obeso');
        }
    }
}

const jose = new Pessoas ('José',40, 1.75)

jose.calculo();
jose.classPessoa();