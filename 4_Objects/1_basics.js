// Objetos são uma coleção de chave (identificador) e valor

// Aqui estou criando um objeto... 
const produto = new Object

// Aqui eu estou dinamicament adicionando atributos através de parâmetros
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 2020

// Nesse caso vai aparecer certinho nome, marca e preço
console.log(produto)

// também da pra apagar dinamicamente
delete produto.preco
delete produto['marca do produto']

// aparece deletadinho bonitinho
console.log(produto)

// Agora montando de um jeito diferente...
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    // Olha que massa... da pra colocar um array
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    // E funções...
    calcularValorSeguro: function() {
        // ...
    }
}

// Altrando atributos a partir da notação ponto
carro.proprietario.endereco.numero = 2000
carro['proprietario']['endereco']['numero'] = 2000

// Todos os atributos de condutores vai ser excluido
delete carro.condutores