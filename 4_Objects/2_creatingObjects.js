// Criando um objeto utilizando...

// Notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
    // Essa variável, feita com "this", está
    // desencapsulada. Ela pode ser acessada fora
    // da função.
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2000.99, 0.25)
console.log(p1.getPrecoComDesconto, p2.getPrecoComDesconto)

// Função Factory
function criarFunctionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFunctionario('Joao', 7800, 4)
const f1 = criarFunctionario('Maria', 11400, 1)

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função que retorna objeto >> JSON para objeto
const fromJson = JSON.parse('{"info": "oii"')
console.log(fromJson.info)