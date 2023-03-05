const nome = "Raoni"
const idade = 2023 - 1980
const cidadaDeNascimento = "Joinville"

  //sem template string
//const apresentacao = "Meu nome é " + nome + ", minha cidade é " + idade + " e nasci na cidade de " + cidadaDeNascimento;

  //com template string
const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadaDeNascimento}`;

console.log(apresentacao)