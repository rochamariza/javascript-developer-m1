/* 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]*/

   const notasAlunos = [2, 7, 3, 8, 10, 4]

   for (let i = 0; i < notasAlunos.length; i++) {
    const lista = notasAlunos.filter(notasAlunos => notasAlunos < 5);
    console.log(lista, 'Ficaram em Recuperação')
    const lista1 = notasAlunos.filter(notasAlunos => notasAlunos > 5)
    console.log(lista1, 'Passaram')
   }