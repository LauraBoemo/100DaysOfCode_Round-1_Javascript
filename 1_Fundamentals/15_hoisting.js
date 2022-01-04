// Hoisting é como um "içamento" de variávis para o topo, ele para
// a sequência hierarquica do código, realocando...
console.log('a: ', a) 
// Aqui a variável foi içada. Ele vai retornar 'undefined'
// mas não 'not defined'. Ou seja, ele sabe da existencia de a, só não sabe o que há nela
var a = 2
console.log('a: ', a) // Aqui ela já estava definida, ou seja, retorna 2

// E a mesma coisa pode ocorrer dentro de funções,
// Uma vez que var, apesar de ser global, só se limita em funções
function teste() {
    console.log('a: ', a) 
    var a = 2
    console.log('a: ', a) 
}

teste()
console.log('a: ', a) 

// Testando isso com o tipo de variável let, não ocorre o inçamento, no primeiro console.log há erro 
console.log('b: ', b) 
let b = 2
console.log('b: ', b) 
// isso ocorre pq let não é global

