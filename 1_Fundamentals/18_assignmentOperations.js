const a = 7
let b = 3

b += a // b = b + a
b -= 4 // b = b - 4
b *= 2 // b = b * 2
b /= 2 // b = b / 2
b %= 2 // b = b % 2

// Destructuring objects!!
// Esse é um recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua',
        numero: 1000
    }
}

// Nessa linha, estou ordenando que os atributos "nome" e "idade"
// sejam retirados do objeto pessoa

const {nome, idade} = pessoa
console.log(nome, idade)

//  Da pra extrair colocando em variaveis

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true}
console.log(sobrenome, bemHumorada)
// Nesse caso esses atributos não existem, e o bem humorada tem por padrao o true

const {endereco: { logradouro, numero, cpf}} = pessoa

// Destructuring arrays!!

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 8, 9]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

// Destructuring and Functions

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}

console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
console.log(rand())

// Destructuring functions and array

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 100]))
console.log(rand([]))
console.log(rand())