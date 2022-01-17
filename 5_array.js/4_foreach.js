// Foreach ajuda a percorrer (assim como o Map, Filter e Reduce, mas o Foreach não tem muito proósito, ENFIM)

// É como se tivesse um laço for passando pelos elementos
const aprovados = ['Laura', 'Murilo', 'Nath']
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array) // Aqui ele imprime o array inteiro
})

// Mais curto...
aprovados.forEach(nome => console.log(nome))

// Salvando em variável...
const exibirAprovados = aprovado = console.log(aprovado)
aprovados.forEach(exibirAprovados)

// Exemplo de implementação...
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Laura', 'Murilo', 'Nath']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})