const nome = 'Lau3a'

// Mostra a leta no local
console.log(nome.charAt(4))
console.log(nome.charAt(5))

// Mostra o valor em ASCII do dígito 3
console.log(nome.charCodeAt(3))

// Vai escrever da primeira letra até o final (começa em zero)
console.log(nome.substring(1))

// Vai da primeira vulgo 0 até terceira
console.log(nome.substring(0, 3))

// Juntando coisas na string...
console.log('Nome... '.concat(nome).concat('!'))
console.log('Nome... ' + nome + '!')

// Substitui todos os digitos p e
console.log(nome.replace(/\d/, 'e'))

// Substitui todos os digitos e letras p e
console.log(nome.replace(/\w/g, 'e'))

// Vai gerar um array com esses 3 elementos a partir da divisão da ','
console.log('Ana,Maria,Pedro'.split(','))