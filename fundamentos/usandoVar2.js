var numero = 1
{
    var numero = 2
    console.log('dentro = ',numero)
}
console.log('fora = ',numero)

// Var são globais, portanto mesmo utilizando em blocos diferentes, ele acaba sendo sobrescrevendo, a menos que estivesse usando Function.