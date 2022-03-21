/*1: Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final. */

const helloName = (name) => {
      return `Olá, ${name}!`
}
console.log(helloName('Renato')
)
//fim

/*2: Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. 
Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.
*/

const ageForDays = (age) => {
      return age * 365
}
console.log(ageForDays(25))

//fim 

/*3: Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos: */
const wage = (hours, dolarPerHour) => {
      wagePerMonth = hours * dolarPerHour
      return `Salário igual a R$${wagePerMonth}`
}
console.log(wage(220, 5.50))
//fim