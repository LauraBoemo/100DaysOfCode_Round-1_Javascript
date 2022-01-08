// Função factory é uma função que retorna um objeto

// Funções factory buscam evitar isso daqui...
const prod1 = {
    nome: 'nome',
    preco: 45
}
const prod2 = {
    nome: 'nome2',
    preco: 45
}
const prod3 = {
    nome: 'nome3',
    preco: 45
}

// Funções factory são assim...
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

// Toda vez que eu chamar criarPessoa a função criará uma nova instância de pessoa que pode ser trabalhada
console.log(criarPessoa())

// Agora recebendo parametros que irão compor os atributos do objeto...
function criarProduto(nome, preco) {
    return {
        // nome: `${nome}`,
        // preco: preco
        nome,
        preco
    }
}
console.log(criarProduto('bombom', 4.50))