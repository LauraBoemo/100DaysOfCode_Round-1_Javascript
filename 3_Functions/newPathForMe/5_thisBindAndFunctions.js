// A Classe é a forma do bolo, e os Objetos são todos os bolos possíveis de se fazer naquele formato...
// O "this", no caso do JS, nesse caso, é a palavra reservada que encontra a Classe em que o Objeto pertence.

// O "this" em questão, quando chamado dentro de funções comuns, pode variar conforme o escopo que for chamado. 
// Nesse caso, pode ser um escopo global, de função, etc; chamamos isso de "Contexto Léxico"
// Para fugir dessa irregularidade, a arrow function existe por dois motivos: um para tornar o código mais enxuto, 
// outro para ter a certeza de que um "this" declarado em sua função será sempre executado no mesmo "Contexto Léxico".

// 1. Observando a relação "this" e "Função Bind"

// Criando um objeto (conjunto chave-valor) para experimentar
const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

// Aqui a função irá rodar normalmente, emitindo o 'Bom dia'
pessoa.falar() 
// Aqui, no entanto, existirá um conflito...
const falar = pessoa.falar 
// Esse conflito, que gera 'Undefined', é o conflito entre os paradigmas da programação funcional e a programação orientada a objetos (OOO)
// Porque o falar que estamos tentando armazenar já está chamando o "this" como uma função, ele basicamente não sabe mais da onde que vem o "this" 

// Para isso, eis a solução...
const falarDePessoa = pessoa.falar.bind(pessoa)
// Nesse caso, usando o .bind, a função "falar" estará direcionada ao bloco de pessoa, ou seja, o seu "this"
// Bind > "Amarrar um objeto à uma função", ou seja, sempre ao chamar a função, o "this" será o objeto referenciado pela função bind
falarDePessoa()

// 2. Instanciando e compreendendo a relação "this" e "Função Bind"
// Criando função Pessoa
function Pessoa() {
    // Criando atributo 'idade' recebendo 0
    this.idade = 0
    // Ou seja, no momento que eu instanciar essa função (chamá-la), terei o atributo idade para manipular
    // Chamada da função setInterval, ela existe para disparar outra função (ou qualquer coisa) a partir de um determinado tempo
    setInterval(function() {
        // Nesse caso, passei para o setInterval uma função "anônima", que ainda não fora disparada outrora
        this.idade++
        // Incrementando idade
        console.log(this.idade)
        // Imprimir no console para ter visibilidade
        // Não vou perder o dia
    }.bind(this), 1000) 
    // Repete a cada 1000 milisegundos, um segundo
    // Note que eu coloquei o ".bind", que se refere à amarração do "this" do objeto ao "this" da função
    // Sem o bind, a função não apontaria para pessoa.  
}
// A partir disso tudo, posso instanciar (criar um meio de chamá-la) a função pessoa para criar um objeto 
new Pessoa

// 3. Outra maneira de se seguir o uso do "this", mas sem usar o "bind"... seguindo o mesmo exemplo anterior...
function Pessoa() {
    this.idade = 0
    const self = this
    // O que está acontecendo: a constante "self" está armazenando o "this". Como o "this" dessa linha
    // já está dentro do objeto que o armazena, não há necessidade de referenciá-lo usando "bind"
    setInterval(function() {
        self.idade++
        // Assim, aqui, podemos utilizar a constante "self" invés de colocar o "bind" no final
        console.log(self.idade)
    }/*.bind(this)*/, 1000) 
}
new Pessoa