const chalk = require("chalk");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Qual a sua linguagem de programação favorita?",
  (language) => {
    if (language === "html" || language === "css") {
      console.log(chalk.bgRed("Isso não é linguagem de programação"));
    } else {
      console.log(chalk.bgGreen(`A minha linguagem preferida é ${language}`));
    }
    readline.close();
  }
);
