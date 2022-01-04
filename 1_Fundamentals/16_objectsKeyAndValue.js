const saudacao = 'Opa'
// Nesse caso, saudacao é o identificador/nome/variável
// E 'Opa' é o valor dela. 
// Isso é chamado de Contexto Léxico 1
// Léxico é o local do valor literal odne o dado está sendo armazenado

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2, está dentro da função que é diferente do contexto global (1)
    return saudacao
}

// Logo, onjetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua tal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)