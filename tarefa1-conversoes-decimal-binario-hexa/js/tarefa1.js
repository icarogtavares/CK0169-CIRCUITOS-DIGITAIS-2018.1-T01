
function decimalParaBinario(numeroDecimal) {
    if(!isDec(numeroDecimal)) return null

    let quociente = Number(numeroDecimal)
    let listaResto = []
    do {
        listaResto.push(quociente % 2)
        quociente = Math.floor(quociente / 2)
    } while(quociente != 0)
    let resultado = listaResto.reverse()
    return resultado.join("")
}
        
function decimalParaHexadecimal(numeroDecimal) {
    if(!isDec(numeroDecimal)) return null

    let quociente = Number(numeroDecimal)
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

function decimalParaBCD(numeroDecimal) {
    if(!isDec(numeroDecimal)) return null

    let numeroDecimalStr = numeroDecimal.toString()
    let resultado = ""
    for(let i = 0; i < numeroDecimalStr.length; i++) {
        if(!algarismoDecimalParaBCD(numeroDecimalStr[i])) return null
        resultado += algarismoDecimalParaBCD(numeroDecimalStr[i])
    }

    return resultado
}

function decimalParaGray(numeroDecimal) {
    if(!isDec(numeroDecimal)) return null

    let binario = decimalParaBinario(numeroDecimal)
    return binarioParaGray(binario)
}

function binarioParaDecimal(numeroBinario) {
    if(!isBin(numeroBinario)) return null

    let numeroBinarioStr = numeroBinario.toString()
    let resultado = 0
    for (let i = 0; i < numeroBinarioStr.length; i++) {
        resultado += Number(numeroBinarioStr[i]) * Math.pow(2, numeroBinarioStr.length - i -1)
    }
    return resultado
}

function binarioParaHexadecimal(numeroBinario) {
    if(!isBin(numeroBinario)) return null

    let numeroBinarioStr = numeroBinario.toString()
    let resultado = ""
    let bin4Bits = ""
    let j = 0
    for(let i = numeroBinarioStr.length -1; i >= 0; i--) {
        if(j==4) {
            resultado = parseInt(bin4Bits, 2).toString(16).toUpperCase() + resultado //convertendo os 4 bits lidos em um HEXADECIMAL
            j = 0
            bin4Bits = ""
        }
        bin4Bits = numeroBinarioStr[i] + bin4Bits
        j++
    }
    if(j != 0) {
        resultado = parseInt(bin4Bits, 2).toString(16).toUpperCase() + resultado
    }
    return resultado
}

function binarioParaBCD(numeroBinario) {
    if(!isBin(numeroBinario)) return null
    let decimal = binarioParaDecimal(numeroBinario)
    return decimalParaBCD(decimal);
}

function binarioParaGray(numeroBinario) {
    if(!isBin(numeroBinario)) return null

    let numeroBinarioStr = numeroBinario.toString()
    let resultado = ""
    let mudou = false
    for(let i = 0; i < numeroBinarioStr.length; i++) {
        let isDigitoEq1 = numeroBinarioStr[i] == "1"
        if(mudou) {
            resultado += isDigitoEq1 ? "0" : "1"
            mudou = isDigitoEq1
            continue
        }
        mudou = isDigitoEq1
        resultado += numeroBinario[i]
    }
    return resultado
}

function hexadecimalParaBinario(numeroHexadecimal) {
    if(!isHex(numeroHexadecimal)) return null
    
    let decimal = hexadecimalParaDecimal(numeroHexadecimal)
    let binario = decimalParaBinario(decimal)

    return binario
}

function hexadecimalParaDecimal(numeroHexadecimal) {
    if(!isHex(numeroHexadecimal)) return null

    let numeroHexadecimalStr = numeroHexadecimal.toString()
    let resultado = 0
    for(let i = 0; i < numeroHexadecimalStr.length; i++) {
        let representacaoEmDecimal = algarismoHexadecimalParaDecimal(numeroHexadecimalStr[i])
        resultado += Number(representacaoEmDecimal) * Math.pow(16, numeroHexadecimalStr.length - i - 1)
    }
    return resultado
}

function hexadecimalParaBCD(numeroHexadecimal) {
    if(!isHex(numeroHexadecimal)) return null
    let decimal = hexadecimalParaDecimal(numeroHexadecimal);
    return decimalParaBCD(decimal);
}

function hexadecimalParaGray(numeroHexadecimal) {
    if(!isHex(numeroHexadecimal)) return null

    let binario = hexadecimalParaBinario(numeroHexadecimal)
    return binarioParaGray(binario)
}

function bcdParaDecimal(bcd) {
    let bcdStr = bcd.toString()
    let resultado = ""
    let bin4Bits = ""
    let j = 0
    for(let i = bcdStr.length -1; i >= 0; i--) {
        if(j==4) {
            if(!algarismoBCDParaDecimal(bin4Bits)) return null
            resultado = algarismoBCDParaDecimal(bin4Bits) + resultado //convertendo os 4 bits BCD lidos em um DECIMAL
            j = 0
            bin4Bits = ""
        }
        bin4Bits = bcdStr[i] + bin4Bits
        j++
    }
    if(j != 0) {
        if(!algarismoBCDParaDecimal(bin4Bits)) return null
        resultado = algarismoBCDParaDecimal(bin4Bits) + resultado
    }
    return resultado
}

function bcdParaBinario(bcd) {
    let decimal = bcdParaDecimal(bcd)
    return decimal ? decimalParaBinario(decimal) : null
}

function bcdParaHexadecimal(bcd) {
    let decimal = bcdParaDecimal(bcd)
    return decimal ? decimalParaHexadecimal(decimal) : null
}

function bcdParaGray(bcd) {
    let binario = bcdParaBinario(bcd)
    return binario? binarioParaGray(binario) : null
}

function algarismoDecimalParaBCD(algarismo) {
    switch(algarismo) {
        case "0":
            return "0000"
        case "1":
            return "0001"
        case "2":
            return "0010"
        case "3":
            return "0011"
        case "4":
            return "0100"
        case "5":
            return "0101"
        case "6":
            return "0110"
        case "7":
            return "0111"
        case "8":
            return "1000"
        case "9":
            return "1001"
        default:
            return null
    }
}

function algarismoBCDParaDecimal(algarismo) {
    switch(algarismo) {
        case "0000":
        case "000":
        case "00":
        case "0":
            return "0"
        case "0001":
        case "001":
        case "01":
        case "1":
            return "1"
        case "0010":
        case "010":
        case "10":
            return "2"
        case "0011":
        case "011":
        case "11":
            return "3"
        case "0100":
        case "100":
            return "4"
        case "0101":
        case "101":
            return "5"
        case "0110":
        case "110":
            return "6"
        case "0111":
        case "111":
            return "7"
        case "1000":
            return "8"
        case "1001":
            return "9"
        default:
            return null
    }
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
    algarismo = algarismo.toString().toUpperCase()
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

function isBin(bin) {
    return /^[10]+$/.test(bin.toString())
}

function isDec(dec) {
    return /^\d+$/.test(dec.toString())
}

function isHex(hex) {
    return /^[0-9A-Fa-f]+$/.test(hex.toString())
}