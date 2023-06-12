// usuário solicita o download  
// o log começa a ser gerado
// o livro começa a ser baixado

const fs = require('fs')

console.log('inicio')

fs.writeFileSync ('arquivo.txt', 'oi')

console.log('fim')