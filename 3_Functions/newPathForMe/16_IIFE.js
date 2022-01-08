// IIFE -> Immediately Invoked Function Expression

// Função autoinvocada: uma função que, quando o código por si só executar, ela será também executada;
// entretando, ela não irá pertencer ao escopo global, e sim ao seu escopo local.
// ela evita manipular dados diretamente no escopo do browser 

(function() {
    console.log('será executado na hora!')
    console.log('Foge do escopo mais abrangente :)')
})()