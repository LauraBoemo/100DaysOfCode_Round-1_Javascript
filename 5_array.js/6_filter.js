// Transofrmar um Array em outro >> Map
// Filtrar um Array >> Filter

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(p) {
    // Os return a seguir não são executáveis, mas vou escrevendo o que retornariam...
    return false // Retornaria um array vazio, não há nada sendo filtrado 
    return true // Retornaria todos os arrays, passa tudo
    // Ou seja, para cada elemento que você recebeu em p, retornou true or false acima
    return p.preco > 2500 // Aqui só passa o Ipad
}))

// Aqui, por exemplo, quero buscar todos os elementos que são caros e frágeis...
// Fazendo por meio de 2 métodos...
// Criando uma arrow "caro" que recebe uma variável produto que verifica se seu preço é maior ou igual a 500
const caro = produto => produto.preco >= 500
// Criando uma arrow fragil que recebe a variável produto, cuja só vê se frágil é true
const fragil = produto => produto.fragil
// Resultado final aqui :)
console.log(produtos.filter(caro).filter(fragil))

// Implementando um filter (e o vendo agir por baixo dos panos)...
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}