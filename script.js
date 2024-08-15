let totalEstudantes = parseInt(prompt("Digite o número total de estudantes na turma:"));

let somaNotas = 0;
let maiorNota = 0;
let menorNota = 100; 

for (let i = 1; i <= totalEstudantes; i++) {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));
    

    somaNotas += nota;
    
    if (nota > maiorNota) {
        maiorNota = nota;
    }

    if (nota < menorNota) {
        menorNota = nota;
    }
}

let mediaTurma = somaNotas / totalEstudantes;

document.write(`Média da turma: ${mediaTurma.toFixed(2)}`);
document.write(`Maior nota: ${maiorNota}`);
document.write(`Menor nota: ${menorNota}`);
