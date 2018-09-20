const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna o char que estiver na quarta posição (começando do zero).
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf(3))

console.log(escola.substring(1)) // Imprimi do "o" para frente
console.log(escola.substring(0, 3)) // Imprimi do 0 ao 3 char

console.log('Escola '.concat(escola).concat("!")) // Concat = concatena
console.log('Escola ' + (escola) + ("!"))
console.log(escola.replace(3, 'e')) // Substitui o 3 pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) // Gera um array separando com a vírgula