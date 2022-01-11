const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Resgatando apenas as chaves do objeto
console.log(Object.keys(pessoa))

// Resgatando apenas os valores do objeto
console.log(Object.values(pessoa))

// Retorna um array com os subarrays (que são o objeto e os valores)
console.log(Object.entries(pessoa))

// Desestruturando os elementos do array
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// Desestruturando os elementos do array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Atribuindo propriedades ao objeto... Nome do Objeto, Key, atributos e valor
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
console.log(pessoa.dataNascimento)

// Object.assign (EMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 1 }
const o2 = { c: 1, a: 4 }
const obj = Object.assign(dest, o1, o2)
// Ele concatenou todos os objetos em dest e os repetidos foram sobreescritos