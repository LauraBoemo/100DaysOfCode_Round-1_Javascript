// JSON contém FUNÇÕES. O JSON é um formato de dados para interoperabilidade entre sistemas.
// Um formato textual que não carrega nada de específico em relação à sistemas -- todas as linguagens podem ler e gerar.

const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))
// Nesse caso, o JSON terá todos os elementos inteiros mas a função será excluida do JSON.
// JSON contém APENAS dados!

console.log(JSON.parse("{a: 1, b: 2, c: 3}")) // Não vai funfar
console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) // Não vai funfar
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // Vai funfar!!!
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}')) // Vai funfar!!!

