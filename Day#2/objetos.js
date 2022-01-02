// Objeto é uma constituição de chaves e valores
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // Evitar atributos com espaco

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        propriedade: 2,
        obj: {
            propriedade: 3,
        }
    }
}

console.log(prod2)