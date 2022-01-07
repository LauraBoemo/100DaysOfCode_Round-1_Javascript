// Callback é uma função que é chamada quando algum evento acontece 

// Exemplo 1. Nesse caso, o forEach dispara uma ação cada vez que encontra um novo elemento, o que
// é um evento

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// Okay, o que está acontecendo aqui é que, para cada elemento do array 'Fabricantes', o 
// forEach vai chamar eles e enviar para imprimir. Nesse caso, ele sempre eviará nome e índice 
fabricantes.forEach(imprimir)

// Observando de outra maneira...
fabricantes.forEach(function(a) {
    console.log(a) // Vai retornar o nome dos fabricantes
})

// Bônus... passando para arrow function...
fabricantes.forEach(a => console.log(a))

// Exemplo 2. Nesse caso, pegaremos um arraw e faremos uma lista de todas as notas maiores que 7,
// farei usando e sem usar callback

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem usar Callback
let notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Usando Callback... torna a função muito mais simples e esperta: declaramos o "notasBaixas2" como
// o array notas só que filtrado como o .filter, ou seja, só entra em "notasBaixas" o que passar
// como verdadeiro pela nossa função de filter. Enquanto isso, nossa função de filter é justametne
// uma função que recebe notas (o próprio filter passa o valor do índice do arraw) e, se for maior que
// 7, então ele entra no "notasBaixas2"
notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasBaixas2)

// Fazendo com arrow fica ainda melhor
notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// Exemplo 3.
// Nesse caso, esse exemplo é melhor de ser visto no browser...
document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log('O evento ocorreu!')
}