const x = "10";

//verificar se é um inteiro

if (!Number.isInteger(x)) {
  throw new Error("O valor de x não é um número inteiro");
}

console.log('Continuando execução...')