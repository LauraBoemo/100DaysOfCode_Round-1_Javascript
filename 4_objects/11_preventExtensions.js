// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensíel:', Object.isExtensible(produto))

produto.nome = 'Borracha' // Vai funfar
produto.descricao = 'Borracha escolar branca' // Não vai funfar 
delete produto.tag // Vai funfar
console.log(produto)

// Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
