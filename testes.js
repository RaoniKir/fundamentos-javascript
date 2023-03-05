var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

// função sem retorno
function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

// função sem retorno, com parâmetro
function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

   // Função com retorno, sem parâmetro

   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

   // Função sem retorno, com parâmetro

   function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

   // Função com retorno, sem parâmetro

   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

   // função usando return e mais de um parâmetro

   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3;
}
   console.log(operacaoMatematica(15, 30, 45))

   //
   function comParametro(param) {
    console.log(param)
}
comParametro()