// Ok, detalhe importante aqui
console.log(typeof String) // Function
console.log(typeof Array)  // Function
console.log(typeof Object) // Function
// O que isso significa? Significa que esses 3 (String, Array e Object) contém um atributo chamado .prototype
// Toda função contém um atributo chamado .prototype
// Ex.1
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Murilo Leitão'.reverse()) //oãtieL oliruM
// Ex.2
Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3], first()) // 1
// Ex.3
String.prototype.toString = function() {
    return 'Eita'
}
console.log('Laura'.reverse())

function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

// Simulando o New
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)