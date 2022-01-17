// Simulando um Objeto a partir de um Array...
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray) // Continua sendo um objeto e não um array

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)