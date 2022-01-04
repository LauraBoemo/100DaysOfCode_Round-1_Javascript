function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = {name: 'Laura'} // O erro é que na linha 15 ta "nome"
imprimirNomeGritando(obj)