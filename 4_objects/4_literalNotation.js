const a = 1
const b = 2
const c = 3

// O objeto está puxando já os valores dos atributos
const obj = { a, b ,c }

const nomeAttr = 'Nota'
const valorAttr = 7.87
const obj2 = {}
obj2[nomeAttr] = valorAttr
console.log(obj2)
// Retorna { Nota: 7.87 }

const obj3 = {[nomeAttr]: valorAttr}
// Retorna { Nota: 7.87 }

const obj4 = {
    // Jeito longo...
    funcao1: function() {
        // Fazendo coisas de função aqui...
    },
    // Jeito curto...
    funcao2() {
        // Fazendo coisas de função aqui...
    }
}