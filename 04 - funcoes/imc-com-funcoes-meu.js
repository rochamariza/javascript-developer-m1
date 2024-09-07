function calculoIMC(peso, altura){
    return peso / Math.pow(altura, 2)
}

function statesIMC(imc){
    if (imc < 18.5){
        console.log('Abaixo do peso');
    }
    else if(imc >= 18.5 && imc < 25){
        console.log('Peso Normal');
    }
    else if(imc >= 25 && imc < 30){
        console.log('Acima do Peso');
    }
    else if(imc >= 30 && imc < 40){
        console.log('Obeso');
    }
    else{
        console.log('Obesidade Severa');
    }
}
(function (){
    const peso = 60;
    const altura = 1.70;
    const imc = calculoIMC(peso, altura);


    console.log(statesIMC(imc))
}) ()