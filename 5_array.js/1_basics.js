console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Undefined

// Adicionando novos elementos
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length) // 5 elementos

aprovados[9] = 'Rafael'
console.log(aprovados.length) // Todos os valores entre 9 e o resto serão undefined

console.log(aprovados)
aprovados.sort() // Coloca em ordem alfabética
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)