const sequencia = {
    _valor: 1, // Convenção... é uma variável que só pode ser acessada internamente, ou seja, dentro do objeto
    get valor() { return this._valor++ },
    set valor(valor) { this._valor = valor},
}

console.log(sequencia.valor, sequencia.valor)
// Retorna 1 e 2... ele automaticamente já usa o get e o set

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)