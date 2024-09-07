const precoEtiqueta = 100

function aplicarDesconto (desconto){
    return desconto / 100
}
function um(debito){
    debito  = precoEtiqueta - (precoEtiqueta * aplicarDesconto(10));
    console.log('R$' + debito);
}
function dois(pix){
    pix =  precoEtiqueta - (precoEtiqueta * aplicarDesconto(15));
    console.log('R$' + pix);
}
function tres(divisao){
    divisao = precoEtiqueta / 2;
    console.log('R$' + divisao);
}
function quatro(divisaomais){
    divisaomais = (precoEtiqueta * aplicarDesconto(10)) + precoEtiqueta;
    console.log('R$' + divisaomais);
}
function metodoDePagamento(metodo){
    metodo = 'Quatro'
    if (metodo === 'Um'){
        um();
    }
    else if (metodo === 'Dois'){
        dois();
    }
    else if (metodo === 'Três'){
        tres();
    }
    else if(metodo === 'Quatro'){
        quatro();
    }
}
metodoDePagamento();
