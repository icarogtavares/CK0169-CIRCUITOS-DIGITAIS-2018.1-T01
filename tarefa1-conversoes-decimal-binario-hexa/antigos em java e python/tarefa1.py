import math

def decimal_para_binario(numero_decimal):
    quociente = numero_decimal
    lista_resto = []
    while(True):
        lista_resto.append(quociente % 2)
        quociente = quociente // 2
        if(quociente == 0):
            break
    resultado = list(reversed(lista_resto))
    return "".join(str(e) for e in resultado)
        
def binario_para_decimal(numero_binario):
    numero_binario_str = str(numero_binario)
    resultado = 0
    for i in range(0, len(numero_binario_str)):
        resultado += int(numero_binario_str[i]) * math.pow(2, len(numero_binario_str) - i -1)
    return int(resultado)

def binario_para_hexadecimal(numero_binario):
    decimal = binario_para_decimal(numero_binario)
    hexadecimal = decimal_para_hexadecimal(decimal)
    return "".join(str(e) for e in hexadecimal)

def hexadecimal_para_binario(numero_hexadecimal):
    decimal = hexadecimal_para_decimal(numero_hexadecimal)
    binario = decimal_para_binario(decimal)
    return "".join(str(e) for e in binario)

def hexadecimal_para_decimal(numero_hexadecimal):
    numero_hexadecimal_str = str(numero_hexadecimal)
    resultado = 0
    for i in range(0, len(numero_hexadecimal_str)):
        representacao_em_decimal = algarismo_hexadecimal_para_decimal(numero_hexadecimal_str[i])
        resultado += int(representacao_em_decimal) * math.pow(16, len(numero_hexadecimal_str) - i -1)
    return int(resultado)
    
def decimal_para_hexadecimal(numero_decimal):
    quociente = numero_decimal
    lista_resto = []
    resto = 0
    while(True):
        resto = quociente % 16
        representacao_em_hexadecimal = algarismo_decimal_para_hexadecimal(resto)
        lista_resto.append(representacao_em_hexadecimal)
        quociente = quociente // 16
        if(quociente == 0):
            break

    resultado = list(reversed(lista_resto))
    return "".join(str(e) for e in resultado)

def algarismo_decimal_para_hexadecimal(algarismo):
    if(algarismo == 10):
        return "A"
    elif(algarismo == 11):
        return "B"
    elif(algarismo == 12):
        return "C"
    elif(algarismo == 13):
        return "D"
    elif(algarismo == 14):
        return "E"
    elif(algarismo == 15):
        return "F"
    else:
        return algarismo

def algarismo_hexadecimal_para_decimal(algarismo):
    algarismo_str = str(algarismo).upper()
    if(algarismo_str == "A"):
        return 10
    elif(algarismo_str == "B"):
        return 11
    elif(algarismo_str == "C"):
        return 12
    elif(algarismo_str == "D"):
        return 13
    elif(algarismo_str == "E"):
        return 14
    elif(algarismo_str == "F"):
        return 15
    else:
        return algarismo

if(__name__ == "__main__"):
    print(  "************************",
            "** Binário: 1101 1100 **",
            "****  Decimal: 220  ****",
            "***  Hexadecimal: DC ***",
            "************************",
            sep="\n")

    binario = 11011100
    decimal = 220
    hexadecimal = "DC"
    
    print("Decimal para Binário:", decimal_para_binario(decimal))
    print("Binário para Decimal:", binario_para_decimal(binario))
    print("Binário para hexadecimal:", binario_para_hexadecimal(binario))
    print("Hexadecimal para Binário:", hexadecimal_para_binario(hexadecimal)) # String
    print("Hexadecimal para Decimal:", hexadecimal_para_decimal(hexadecimal)) # String
    print("Decimal para Hexadecimal:", decimal_para_hexadecimal(decimal))

    print("Decimal para Binário:", decimal_para_binario(0))
    print("Binário para Decimal:", binario_para_decimal(0))
    print("Binário para hexadecimal:", binario_para_hexadecimal(0))
    print("Hexadecimal para Binário:", hexadecimal_para_binario("0"))
    print("Hexadecimal para Decimal:", hexadecimal_para_decimal("0"))
    print("Decimal para Hexadecimal:", decimal_para_hexadecimal(0))