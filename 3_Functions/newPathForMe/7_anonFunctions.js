// Funções anônimas são, basicamente, funções sem nomes. 
// Como essa, que está atribuída à uma const...
const soma = function(x, y) {
    return x + y
}

// Funções, no geral, podem receber outras funções nos seus atributos...
const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a ,b))
}
imprimirResultado(3, 4) // Aqui, ele assumirá que a função é a função soma da linha 3, como declarado na linha 7
imprimirResultado(3, 4, soma)  // Aqui apontamos diretamente e completamente para a função soma
imprimirResultado(3, 4, function(x, y) { 
    return x - y
}) // Aqui montamos a função ao mesmo tempo em que declaramos ela nos nossos parâmetros
imprimirResultado(3, 4, (x, y) => x * y) // Aqui temos uma função arrow dentro dos parâmetros

// O mesmo também pode ser feito dentro de objetos, como essa const pessoa
const pessoa = {
    // Nesse caso, declaramos a função anônima dentro de um objeto
    falar: function() {
        console.log('Opa')
    },
    // ou... (só que essa não é anônima)
    falar2() {
        console.log('Opa')
    }
}
pessoa.falar()

// Obs.: Todas as funções arrows são funções anônimas