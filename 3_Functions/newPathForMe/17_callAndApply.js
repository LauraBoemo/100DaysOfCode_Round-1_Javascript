// Call e Apply são maneiras diferentes de se invocar uma função, assim como o bind. 
// A diferença está em como você passa os parâmetros...
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Chamando a função diretamente usando valores default

console.log(produto.getPreco()) // Chamando a função a partir de um objeto

const carro = { preco: 499, desc: .2}
console.log(getPreco.call(carro)) // Chamando com call usando os valores do objeto da constante
console.log(getPreco.apply(carro)) // Chamando com apply usando os valores do objeto da constante

console.log(getPreco.call(carro, 0.17, '$')) // Chamando com call usando os valores do objeto da constante + novos atributos
console.log(getPreco.apply(carro, [0.17, '$'])) // Chamando com bind usando os valores do objeto da constante + novos atributos << esse só pode passar os novos em um array