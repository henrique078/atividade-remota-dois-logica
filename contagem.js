// Verificar quantidade de alunos e se o numero e par, impar ou zero;
// % -> MOD: retorna o resto da divisão

let numeroAlunos = 10;

for (let contador = 0; contador < numeroAlunos; contador++) {
    if (contador % 2 === 0 && contador != 0) {
        console.log (`O número do aluno é ${contador} - PAR`)
    } else if (contador % 2 != 0 ){
        console.log(`O número do aluno é ${contador} - ÍMPAR`)
    } else if (contador === 0) {
        console.log(`O número do aluno é ${contador} - ZERO`)
    };
};