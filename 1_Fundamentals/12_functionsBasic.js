// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3) // Retornará 5, funfou :)
imprimirSoma(2) // Retornará Nan (undefined)
imprimirSoma(2, 3, 7, 10) // Ele soma os dois primeiros! O resto foda-se :D
imprimirSoma() // Nan

// Função com retorno

function soma(a, b) {
    return a + b
}
console.log(soma(2,3)) // Retorna 5, funfou
console.log(soma(2)) // Retorna 2, considera o segundo como zero

// Armazenando uma função em uma variável

const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// Retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))