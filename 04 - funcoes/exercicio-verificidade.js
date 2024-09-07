function escrevaMeuNome (nome){
    return 'Vitor'
}


function verificadorIdade (idade){
    if(idade < 18){
        console.log(escrevaMeuNome() + ' é menor de idade')
    }
    else{
        console.log(escrevaMeuNome() + ' é maior de idade')
    }
}
verificadorIdade('19')