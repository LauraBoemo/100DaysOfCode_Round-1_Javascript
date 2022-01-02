// Aritméticos...
const [a, b, c, d] = [3, 5, 1, 15]
const soma = a + b + c + d
const subtracao = d - b 
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, -divisao, modulo)

// Relacionais... (sim ou não)
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)

// Lógicos...
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))
console.log(compras(false, true))

// Unários...
let num1 = 1
let num2 = 2

num1++
--num1

console.log(++num1 == num2--) // Vai dar verdadeiro

// Ternario

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.1))
console.log(resultado(6.7))