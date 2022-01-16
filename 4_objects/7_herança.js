const ferrari = {
    modelo: 'F40',
    velMax: 340
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Acessando quem seria o protótipo de ferrari... 
console.log(ferrari.__proto__) // Vai retornar um objeto vazio

console.log(ferrari.__proto__ === Object.prototype) // Vai retornar TRUE
console.log(volvo.__proto__ === Object.prototype) // Vai retornar TRUE
console.log(Object.prototype.__proto__) // Retornará nullo

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // Ambos são funções
console.log(Object.prototype, MeuObjeto.prototype) // {} MeuObjeto {}

// Cadeia de protótipos... Prototype Chain

Object.prototype.attr0 = 'Z'
// O avó tem como protótipo o Object.prototype
const avo = { attr1: 'A'}
// O pai tem como protótipo o avô
const pai = { __proto__: avo, attr2: 'B'}
// O filho tem como protótipo o pai
const filho = { __proto__: pai, attr2: 'C'}

console.log(filho.attr1) // Vai retornar A
console.log(filho.attr0) // Vai retornar Z

// Uma maneira diferente de criar protótipos

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual += this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// Ou seja, aqui eu digo "Ferrari tem Carro como seu protótipo"
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.acelerarMais(100))
console.log(ferrari.status(100))