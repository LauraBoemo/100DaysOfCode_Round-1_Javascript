// Vendo um pouco sobre variaveis numericas...

// Essa constante define um número!
const peso1 = 1.0

// Essa daqui também!
const peso2 = Number('2.5')

// Elas são impressas corretamente como números...
console.log(peso1, peso2)

// E, apesar de terem ".", a primeira é lida como inteiro e a segunda como flutuante...
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// Com variáveis numéricas podemos executar calculos...

const avaliacao1 = 9.856
const avaliacao2 = 6.824

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso2 + peso1)

console.log(media)

// Para colocar um limite nos pontos...
console.log(media.toFixed(2))

// Para transformar em string...
console.log(media.toString())

// Também da pra transformar em binarios...
console.log(media.toString(2))

console.log(typeof media)

// Curiosidade... o "Number" é uma função

console.log(typeof Number)

// Usar variaveis de number tem algumas loucuras

console.log(7/0) // Isso gera algo chamado "Infinity"
console.log("10"/5) // Isso aqui é bizarro, mas retorna 2... ele meio que "tenta" ver se da pra converter pra number o "10"
console.log("10,2"/2) // Isso aqui da erro mas 10.2 nao
console.log("Wow" * 2) // Vai retornar NaN Not a Number
console.log(0.1 + 0.7) // Retorna 0.799999. A especificacao (i3e) que calcula ponto flutuante no JS é meio bagaçada mas é RAPIDA. Se você quisesse o resultado exato, iria demorar bem mais
// console.log(10.toString()) // Da erro, ele nao le assim