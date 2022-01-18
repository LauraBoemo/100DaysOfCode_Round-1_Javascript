// Percorrer um array com mais propósito = Reduce
// Transformando array em outras coisas!

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Aqui estou pegando apenas as notas, retornará --> [ 7.3, 9.2, 9.8, 8.7 ]
console.log(alunos.map(a => a.nota)) 
// Após fazer um array só das notas, começo a usar o reduce. 
// O primeiro parâmetro do reduce é uma callback, o segundo é um valor atual (seguinte)
// Nosso objetivo é ir somando esses valores.
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
    // Isso aqui tudo retorna
    // 7.3 9.2 // Ou seja, 7.3 virou o callback e o 9.2 o atual
    // 16.5 9.8 // Após a soma da linha anterior, que retornou 16,5, o 16 sobe para o callback e o atual chamou o próximo elemento
    // 26.3 8.7 // E assim eles foram se somando 
}, 20) // Esse vírgula 20 pode substituir o 7.3 no começo, definindose como valor inicial

// Até resultar..
console.log(resultado)

// Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

// Fazendo próprio reduce...
Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}