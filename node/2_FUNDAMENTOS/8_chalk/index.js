//melhorar a usabilidade do terminal
const chalk = require('chalk')

const nota = 9

if(nota >= 7){
    console.log(chalk.green.bgGreen('Parabéns, você foi aprovado'))
}else{
    console.log(chalk.grey.bgBlue('Parabéns, você foi reprovado'))
}


