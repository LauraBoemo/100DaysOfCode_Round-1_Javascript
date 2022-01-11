// O identificador "pessoa" aponta para um endereço de memória, que é onde o objeto é armazenado
const pessoa = { nome: 'João'}
// Nesse caso, a constante pessoa continua apontando para o mesmo endereço de memória, mas o objeto foi alterado
pessoa.nome = 'Pedro'
// Por isso que, apesar de ser declarado em uma constante, o objeto vai variar :) 

// Pessoa está recebendo um novo objeto, esse novo objeto está em um outro endereço da memória
// Isso vai dar erro...
pessoa = { nome: 'Ana'}

// Aqui eu estou congelando o objeto pessoa, agora, de fato, não há mais como alterar ele
Object.freeze(pessoa)

// Aqui, por ex, ele só vai ignorar e continuar como Pedro (linha 4)
pessoa.nome = 'Maria'
// Ele também não aceita coisas novas...
pessoa.end = 'Rua ABC'

// Constante constante
const pessoaConstante = Object.freeze({nome: 'João'})