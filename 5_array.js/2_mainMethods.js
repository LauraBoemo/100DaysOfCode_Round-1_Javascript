const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Remove último elemento do Array
pilotos.pop()

// Adiciona um elemento ao Array
pilotos.push('Verstappen')

// Remove o primeiro elemento do Array
pilotos.shift()

// Adicione como primeiro
pilotos.unshift('Hamilton')

// Splice pode adicionar ou remover elementos

// Adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa')

// Removendo
pilotos.splice(3, 1) // Tirando o Massa

const algunsPilotos1 = pilotos.slice(2) // Faz um novo array a partir do índice dois até o final

const algunsPilotos2 = pilotos.slice(1, 4) 
// O array de índice 1 entra mas o 4 não...

