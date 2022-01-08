// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite à função acessar e manipular variáveis externas à função (contexto léxico)

// Contexto léxico em ação!
const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) 
// Retorna 'local'... Isso porque a função fora declara o valor de x, o retorno de x está 
// na função dentro, e a funcao fora retorna dentro. dentro busca o valor de x que é seu 
// escopo maior, que no caso é fora.