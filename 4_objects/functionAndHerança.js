// Ao criar um objeto herdando uma função, ele herdará a função construtora deste.
// O contrário não acontece com os outros métodos, que puxarão o Object.prototype

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj1.nome = 'Rafa'
obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype