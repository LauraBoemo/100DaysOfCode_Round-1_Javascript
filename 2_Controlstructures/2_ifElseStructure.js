// If and else...

const imprimirResultado = function(nota) {
    // if(nota >= 7) {
    //     console.log('Aprovado')
    // } else {
    //     console.log('Reprovado')
    // }

    nota >= 7 ? console.log('Aprovado') : console.log('Reprovado')
}

imprimirResultado(10)

// If and else if

Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de Nota')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Ué')
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado(-1)