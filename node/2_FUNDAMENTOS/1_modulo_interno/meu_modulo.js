module.exports = {
    soma(a, b) {
        console.log(`${a + b}`)
    },

    subtracao(a, b) {
        console.log(`${a - b}`)
    },

    multiplicacao(a, b) {
        console.log(`${a * b}`)
    },

    divisao(a, b) {
        if (b <= 0) {
            console.log(`Erro`)
        } else {
            console.log(`${a / b}`)
        }
    }
}