// 1st example

function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo(true)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo()
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})

// 2nd example

function test1(num) {
    if(num > 7)
        console.log(num) // Executa se for maior que 7
        console.log('Final') // Executa em qualquer momento, está fora do laço
}

test1(6)
test1(8)
