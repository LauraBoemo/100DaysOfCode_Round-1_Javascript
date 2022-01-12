const ferrari = {
    modelo: 'F40',
    velMax: 340
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Acessando quem seria o protótipo de ferrari... 
console.log(ferrari.__proto__) // Vai retornar um objeto vazio

console.log(ferrari.__proto__ === Object.prototype) // Vai retornar TRUE
console.log(volvo.__proto__ === Object.prototype) // Vai retornar TRUE
console.log(Object.prototype.__proto__) // Retornará nullo

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // Ambos são funções
console.log(Object.prototype, MeuObjeto.prototype) // {} MeuObjeto {}

// Cadeia de protótipos... Prototype Chain

Object.prototype.attr0 = 'Z'
// O avó tem como protótipo o Object.prototype
const avo = { attr1: 'A'}
// O pai tem como protótipo o avô
const pai = { __proto__: avo, attr2: 'B'}
// O filho tem como protótipo o pai
const filho = { __proto__: pai, attr2: 'C'}

console.log(filho.attr1) // Vai retornar A
console.log(filho.attr0) // Vai retornar Z
