const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

// A grande questão desse código é que não sabemos o que a "minhafuncao()" irá retornar ao ser
// chamada pelo exec(). Nesse caso, ela vai puxar o valor global, pois ele está no escopo global.
// Assim ignorando o valor local, que só existe dentro de exec. Basicamente, o valor local nao altera
// a constante do valor global. Isso é contexto léxico.