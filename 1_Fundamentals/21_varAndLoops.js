for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i: ', i) 
// Ok, a loucura disso aqui é a seguinte...
// O i, apesar de ter sido declarado dentro do for,
// ainda é global, ou seja, ao fim do loop, o console.log
// vai imprimir o até então atual valor de i, que é 10

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i: ', i) 
// Nesse caso, como i é declarado com 'let' sua existencia
// só ocorre dentro do laço. Ou seja, do 0 até 9 será impresso
// mas no ultimo console.log teremos um not defined

const funcs = []

for(var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    }) 
}

funcs[2]()
funcs[8]()
// Ok, aqui tem uma esquisitisse maior ainda... nesse caso,
// as 2 ultimas funçoes chamadas retornarão 10. A explicação é complicada...
// basicamente, isso ocorre porque o var não existe em escopo de função.

const funcs = []

for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    }) 
}

funcs[2]()
funcs[8]()
// Ok, aqui ele imprime o 2 e o 8 corretamente, porque o let existe em qualquer escopo de bloco
// Nesse caso, o escopo de bloco em qustão é justamnte os {} da função também, e o array contém memória de armaznamnto
// logo, funciona