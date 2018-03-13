
function decimal_para_binario(numero_decimal) {
    let quociente = numero_decimal
    let lista_resto = []
    while(quociente != 0) {
        lista_resto.push(quociente % 2)
        quociente = Math.floor(quociente / 2)
    }
    let resultado = lista_resto.reverse()
    return resultado.join("")
}
        
function binario_para_decimal(numero_binario) {
    let numero_binario_str = numero_binario.toString()
    let resultado = 0
    for (let i = 0; i < numero_binario_str.length; i++) {
        resultado += Number(numero_binario_str[i]) * Math.pow(2, numero_binario_str.length - i -1)
    }
    return resultado
}

function binario_para_hexadecimal(numero_binario) {
    let decimal = binario_para_decimal(numero_binario)
    let hexadecimal = decimal_para_hexadecimal(decimal)
    return hexadecimal
}

function hexadecimal_para_binario(numero_hexadecimal) {
    let decimal = hexadecimal_para_decimal(numero_hexadecimal)
    let binario = decimal_para_binario(decimal)
    return binario
}

function hexadecimal_para_decimal(numero_hexadecimal) {
    let numero_hexadecimal_str = numero_hexadecimal.toString()
    let resultado = 0
    for(let i = 0; i < numero_hexadecimal_str.length; i++) {
        let representacao_em_decimal = algarismo_hexadecimal_para_decimal(numero_hexadecimal_str[i])
        resultado += Number(representacao_em_decimal) * Math.pow(16, numero_hexadecimal_str.length - i - 1)
    }
    return resultado
}

function decimal_para_hexadecimal(numero_decimal) {
    let quociente = numero_decimal
    let lista_resto = []
    let resto = 0
    while(quociente != 0) {
        resto = quociente % 16
        let representacao_em_hexadecimal = algarismo_decimal_para_hexadecimal(resto)
        lista_resto.push(representacao_em_hexadecimal)
        quociente = Math.floor(quociente / 16)
    }
    resultado = lista_resto.reverse()
    return resultado.join("")
}

function algarismo_decimal_para_hexadecimal(algarismo) {
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

function algarismo_hexadecimal_para_decimal(algarismo) {
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
console.log("Decimal para Binário: " + decimal_para_binario(220))
console.log("Binário para Decimal: " + binario_para_decimal(11011100))
console.log("Binário para hexadecimal: " + binario_para_hexadecimal(11011100))
console.log("Hexadecimal para Binário: " + hexadecimal_para_binario("DC"))
console.log("Hexadecimal para Decimal: " + hexadecimal_para_decimal("DC"))
console.log("Decimal para Hexadecimal: " + decimal_para_hexadecimal(220))