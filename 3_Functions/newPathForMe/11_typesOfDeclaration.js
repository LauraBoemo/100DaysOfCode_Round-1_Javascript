// Maneiras de se declarar funções

// 1. Function declaration
// - Forma mais tradicional;
// - Utiliza a palavra reservada 'function' + nome da função + parâmetros + corpo da função
function soma(x, y) {
    return x + y
}

// 2. Function expression
// - Forma de armazenar uma função anônima em uma variável, let ou const
// - Declara a variável + iguala ela à função anônima + faz a function 
const sub = function(x, y) {
    return x - y
}

// 3 - Named function expression
// Combo das outras duas
// A úniva vantagem é que o nome da função aparece na stack quando debuga
const mult = function mult(x, y) {
    return x * y
}

// Diferença entre o tipo 1 e o 2
// Apenas no tipo 1, podemos chamar a função antes dela ter sido declarada - o hoisting