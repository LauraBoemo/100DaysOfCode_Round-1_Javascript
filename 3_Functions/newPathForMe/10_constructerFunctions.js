// Função construtora é como uma Classe...

const { type } = require("os")

// Aqui a função construtora
function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado: let, var ou const
    // Ou seja, um atributo que pertence apenas à função carro
    // Ou seja, eu não posso receber, por exemplo, "carro.velocidadeAtual". 
    let velocidadeAtual = 0

    // Método público (função pública): sempre this
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidade += delta 
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
    // Caso queira deixar privado só passar pra const var ou let
}

// Instância (chamada pelo "new") da função construtora Carro
const uno = new Carro() // Ou só "Carro" nesse caso 
uno.acelerar() // Chamando o .acelerar do método público da função 
console.log(uno.getVelocidadeAtual())

// Instância da função construtora Carro
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // Isso aqui é função
console.log(typeof ferrari) // Isso aqui é um objeto instanciado a partir da função 