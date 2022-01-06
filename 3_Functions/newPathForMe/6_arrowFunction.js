// Creio que eu já tenha comentado isso antes, mas as Funções Arrows contém 2 grandes objetivos...
// 1º Conter uma sintaxe mais enxuta
// 2ª Contém um "this" associado ao contexto em que a função foi escrita

// 1. Exemplos do ponto 1: A Sintaxe Reduzida...

// Função normal...
let dobro = function(a) {
    return 2 * a
}

// Função arrow...
dobro = (a) => {
    return 2 * a
}
// Aqui há uma característica importante da função arrow: ela sempre será anônima;
// Ou seja, caso você eventualmente queira chamar a função arrow, terá de armazená-la em uma variável ou constante

// Função arrow, ainda mais reduzida...
dobro = a => 2 * a
// Nesse caso, dava para retirar os parêteses visto que a função contém apenas um parâmetro;
// Do mesmo modo, ao retirar os "{}" a função de retorno ("Return") se torna implícita
// Acredite... quanto mais funções específicas no teu código melhor, consequentemente, haverão várias funçõeszinhas assim
// Funções muito específicas, com pouca responsabilidade e muitos reusos = <3 (código funcional por meio de composição de funções)
// Isso de cima se chama de paradigma da programação funcional

// Outro exemplo...

// Função normal
let ola = function() {
    return 'Olá'
}

// Funções arrows...
ola = () => 'Olá' // Parâmetro vazio
ola = _ => 'Olá' // Isso, na verdade, é um parâmetro válido. Mas faz um bom trabalho
console.log(ola())

// 2. Exemplos do ponto 2: O "This" Fixo -- baseado em onde a função foi escrita...

// Função normal... (se lembra dela?)
function Pessoa() {
    this.idade = 0
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000) 
}
new Pessoa

// Função arrow...
function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
    // Aqui temos a arrow function funcionando com seu this em sua mais pura forma. OU seja,
    // ela tá buscando o "this" que está dentro do contexto léxico da função, que no caso é a função Pessoa
    // Ou seja, ela busca o this exato do objeto exato
    // Em outras palavras: o "this" não varia conforme quem chama ele...
}
new Pessoa

// 3. Botando o this com um bind... experimento...

// Função normal...
let comparaComThis = function(param) {
    console.log(this === param)
}
comparaComThis(global) // O "this" da linha 69 (hihi) tá sendo levado como um Objeto Global, um "this" global. Vai dar verdadeiro, exisete "this" no escopo global
const obj = {} // Há um objeto vazio aqui... há "this"
comparaComThis = comparaComThis.bind(obj) // Apontando o this para objeto
comparaComThis(global) // Olhando globalmente, a resposta será falso, não há objetos
comparaComThis(obj) // Olhando dentro do obj, por sua vez, será true

// Função Arrow...
let comparaComThisArrow = param => console.log(this === param)
// O "this" dessa função é um módulo do node, será sempre previsível
comparaComThisArrow(global) // True
comparaComThisArrow(module.exports) // True

// Testando se o Bind enfrenta a Arrow, será que ele aponta pro obj?
comparaComThisArrow = comparaComThisArrow.bind(obj)
// A resposta é: a arrow function ganha... o this aponta e sempre apontará para o objeto em que a função foi escrita
