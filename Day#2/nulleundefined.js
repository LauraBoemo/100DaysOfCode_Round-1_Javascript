let valor // Declarada mas não inicializada
console.log(valor) // Vai gerar "Undefined"
console.log(valor2) // Vai gerar "Not defined" uma vez que sequer declarado foi "valor2"
valor = null // O null declara a ausência de valor, logo essa variável não aponta para nenhum local na memória
console.log(valor) // Vai retornar null, variavel zerada que não aloca/aponta nada na memória
// console.log(valor.toString()) // Não é possível acessar propriedades de variáveis nulas
const produto = {}
console.log(produto) // Retorna {} (objeto vazio)
console.log(produto.preco) // Retorna Undefined
console.log(produto.preco.a) // Retorna erro porque não é possível acessar uma propriedade de algo nulo

produto.preco = 3.50
console.log(produto.preco) // aí funciona   

