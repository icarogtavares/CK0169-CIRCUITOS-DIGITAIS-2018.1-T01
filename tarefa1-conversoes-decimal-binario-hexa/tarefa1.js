
function decimalParaBinario(numeroDecimal) {
    let quociente = numeroDecimal
    let listaResto = []
    do {
        listaResto.push(quociente % 2)
        quociente = Math.floor(quociente / 2)
    } while(quociente != 0)
    let resultado = listaResto.reverse()
    return resultado.join("")
}
        
function binarioParaDecimal(numeroBinario) {
    let numeroBinarioStr = numeroBinario.toString()
    let resultado = 0
    for (let i = 0; i < numeroBinarioStr.length; i++) {
        resultado += Number(numeroBinarioStr[i]) * Math.pow(2, numeroBinarioStr.length - i -1)
    }
    return resultado
}

function binarioParaHexadecimal(numeroBinario) {
    let decimal = binarioParaDecimal(numeroBinario)
    let hexadecimal = decimalParaHexadecimal(decimal)
    return hexadecimal
}

function hexadecimalParaBinario(numero_hexadecimal) {
    let decimal = hexadecimalParaBinario(numero_hexadecimal)
    let binario = decimalParaBinario(decimal)
    return binario
}

function hexadecimalParaBinario(numero_hexadecimal) {
    let numeroHexadecimalStr = numero_hexadecimal.toString()
    let resultado = 0
    for(let i = 0; i < numeroHexadecimalStr.length; i++) {
        let representacaoEmDecimal = algarismoHexadecimalParaDecimal(numeroHexadecimalStr[i])
        resultado += Number(representacaoEmDecimal) * Math.pow(16, numeroHexadecimalStr.length - i - 1)
    }
    return resultado
}

function decimalParaHexadecimal(numeroDecimal) {
    let quociente = numeroDecimal
    let listaResto = []
    let resto = 0
    do {
        resto = quociente % 16
        let representacaoEmHexadecimal = algarismoDecimalParaHexadecimal(resto)
        listaResto.push(representacaoEmHexadecimal)
        quociente = Math.floor(quociente / 16)
    } while(quociente != 0)
    resultado = listaResto.reverse()
    return resultado.join("")
}

function algarismoDecimalParaHexadecimal(algarismo) {
    switch(algarismo) {
        case 10:
            return "A"
        case 11:
            return "B"
        case 12:
            return "C"
        case 13:
            return "D"
        case 14:
            return "E"
        case 15:
            return "F"
        default:
            return algarismo
    }
}

function algarismoHexadecimalParaDecimal(algarismo) {
    algarismo = algarismo.toString().toUpperCase();
    switch(algarismo) {
        case "A":
            return 10
        case "B":
            return 11
        case "C":
            return 12
        case "D":
            return 13
        case "E":
            return 14
        case "F":
            return 15
        default:
            return algarismo
    }
}

console.log(
`************************
** Binário: 1101 1100 **
****  Decimal: 220  ****
***  Hexadecimal: DC ***
************************`)
const binario = 11011100
const decimal = 220
const hexadecimal = "DC"

console.log("Decimal para Binário: " + decimalParaBinario(decimal))
console.log("Binário para Decimal: " + binarioParaDecimal(binario))
console.log("Binário para hexadecimal: " + binarioParaHexadecimal(binario))
console.log("Hexadecimal para Binário: " + hexadecimalParaBinario(hexadecimal)) // String
console.log("Hexadecimal para Decimal: " + hexadecimalParaBinario(hexadecimal)) //String
console.log("Decimal para Hexadecimal: " + decimalParaHexadecimal(decimal))

//Com zeros
console.log("Decimal para Binário: " + decimalParaBinario(0))
console.log("Binário para Decimal: " + binarioParaDecimal(0))
console.log("Binário para hexadecimal: " + binarioParaHexadecimal(0))
console.log("Hexadecimal para Binário: " + hexadecimalParaBinario("0"))
console.log("Hexadecimal para Decimal: " + hexadecimalParaBinario("0"))
console.log("Decimal para Hexadecimal: " + decimalParaHexadecimal(0))