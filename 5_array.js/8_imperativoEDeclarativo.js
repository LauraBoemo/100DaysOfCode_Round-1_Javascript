const alunos = [
    {nome: 'João', nota: 8},
    {nome: 'Maria', nota: 3}
]

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// Dia vazio, outro dia vazio... meu DEUS eu JURO que é o penúltimo ok... UHUL amanhã voltamos com tudo