{
    {
        {
            {
                var sera = 'Será?'
            }
        }
    }
}

console.log(sera) // Ele alcança o var mesmo dentro de várias camadas de blocos

function teste() {
    var local = 123
    console.log(local)
}

teste() // Possível ver o retorno de local
console.log(local) // Não é possível ver o retorno de local

// Var foras de funções são globais! E fuja do escopo global...

var numero = 1

{
    var numero = 2
    console.log('Dentro: ', numero) // Retorna 2
}

console.log('Fora: ', numero) // Retorna 2

// Pegando a diferença do Var com o Let

var numero = 1 // Var contém escopo global

{
    let numero = 2 // Let contém escopo de bloco. Ele só existe nesse bloco. Logo...
    console.log('Dentro: ', numero) // Aqui retorna 2
}

console.log('Fora: ', numero) // Aqui retorna 1