let contador = 1

while(contador <= 10) {
    console.log(`contador: ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++) {
    console.log(`contador: ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in notas) {
    console.log(i, nota[i])
    // Nesse caso, apenas pega os índices, o valor ainda precisa do array[]
}

const pessoa = {
    nome: 'Laura',
    sobrenome: 'Boemo',
    idade: 18,
    peso: 52
}

// O in também functiona com objetos

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}