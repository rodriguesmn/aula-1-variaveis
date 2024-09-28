let nome 
let idade
console.log (typeof nome, typeof idade)
// será impresso undefined pois a variavel não atribui valor
nome = prompt ('qual seu nome?')
idade = prompt ('qual sua idade?')

console.log (typeof nome, typeof idade)
//será impresso string pois a variavel atribuiu valor

console.log ('olá', nome, 'você tem ', idade)