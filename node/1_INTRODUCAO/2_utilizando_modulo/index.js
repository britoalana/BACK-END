// const fs = require('fs')

// fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    //lê o arquivo
//     if (err) {
//         console.log(err)

        
//     }
//     console.log(data)
// })

// const fs = require('fs')
// fs.appendFile('arquivo.txt', 'Última linha', function (err){
// //adiciona coisas em arquivos existentes

// if
// (err) throw(err)

// console.log('Uptated!')
// })

// const fs = require('fs')
// fs.open('arquivo2.txt', 'w', function (err){
//     // w(flag/ segundo requisito) - escrita
// //cria arquivos sem informações

// if
// (err) throw(err)

// console.log('Created!')
// })

// const fs = require('fs')
// fs.writeFile('arquivo2.txt', 'Quero ir pra casa', function (err){
//substituir o texto

// if
// (err) throw(err)

// console.log('Saved!')
// })

// const fs = require('fs')
// fs.unlink('arquivo2.txt', function (err){
//excluir arquivo

// if
// (err) throw(err)

// console.log('Saved!')
// })

const fs = require('fs')
fs.rename('arquivo.txt', 'novo_arquivo', function (err){
//renomear arquivo

if
(err) throw(err)

console.log('Uptaded!')
})