// Estratégia 1 para gerar valor padrão, forma mais famosa
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
// Ele nunca receberá 0, o mínimo é 1 (false true etc)

// Essa é a mais robusta, porém 101% segura 
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // Mais segura 

    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 3, 2), soma2(0, 0, 0))

// Valor padrão do es2015, a melhor
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))