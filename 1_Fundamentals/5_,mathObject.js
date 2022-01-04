// Calculando a area de uma circunferencia usando math... só pra mostrar que existe

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)

// Outra curiosidade, apesar de Number ser uma função, Math é um Objeto 

console.log(typeof Math)

// Eu nao sei exatamente pq q math é um objeto e nao uma funcao. minha teoria é que
// além de executar funções como .pow, ele também contém seus valores, como o PI, e é isso 
// que o difere.