package circuitosdigitais;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class tarefa1 {
	
	public static void main(String[] args) {
		int binario = 11011100;
		int decimal = 220;
		String hexadecimal = "DC";
		System.out.println("Decimal para Binário: " + decimal_para_binario(decimal));
		System.out.println("Binário para Decimal: " + binario_para_decimal(binario));
		System.out.println("Binário para hexadecimal: " + binario_para_hexadecimal(binario));
		System.out.println("Hexadecimal para Binário: " + hexadecimal_para_binario(hexadecimal));
		System.out.println("Hexadecimal para Decimal: " + hexadecimal_para_decimal(hexadecimal));
		System.out.println("Decimal para Hexadecimal: " + decimal_para_hexadecimal(decimal));
		
		//Com zeros
		System.out.println("Decimal para Binário: " + decimal_para_binario(0));
		System.out.println("Binário para Decimal: " + binario_para_decimal(0));
		System.out.println("Binário para hexadecimal: " + binario_para_hexadecimal(0));
		System.out.println("Hexadecimal para Binário: " + hexadecimal_para_binario("0"));
		System.out.println("Hexadecimal para Decimal: " + hexadecimal_para_decimal("0"));
		System.out.println("Decimal para Hexadecimal: " + decimal_para_hexadecimal(0));
	}
	
	private static String decimal_para_binario(Integer numero_decimal) {
	    List<Integer> lista_resto = new ArrayList<Integer>();
	    do {
	        lista_resto.add(numero_decimal % 2);
	        numero_decimal = numero_decimal / 2;
	    } while(numero_decimal != 0);
	    Collections.reverse(lista_resto);
	    return lista_resto.stream().map(Object::toString).collect(Collectors.joining());
	}
	        
	private static int binario_para_decimal(Integer numero_binario) {
	    String numero_binario_str = numero_binario.toString();
	    int resultado = 0;
	    for (int i = 0; i < numero_binario_str.length(); i++) {
	        resultado += Character.getNumericValue(numero_binario_str.charAt(i)) * Math.pow(2, numero_binario_str.length() - i -1);
	    }
	    return resultado;
	}

	private static String binario_para_hexadecimal(Integer numero_binario) {
	    Integer decimal = binario_para_decimal(numero_binario);
	    String hexadecimal = decimal_para_hexadecimal(decimal);
	    return hexadecimal;
	}

	private static String hexadecimal_para_binario(String numero_hexadecimal) {
	    Integer decimal = hexadecimal_para_decimal(numero_hexadecimal);
	    String binario = decimal_para_binario(decimal);
	    return binario;
	}

	private static int hexadecimal_para_decimal(String numero_hexadecimal) {
	    int resultado = 0;
	    for(int i = 0; i < numero_hexadecimal.length(); i++) {
	        int representacao_em_decimal = algarismo_hexadecimal_para_decimal(String.valueOf(numero_hexadecimal.charAt(i)));
	        resultado += ((int)representacao_em_decimal) * Math.pow(16, numero_hexadecimal.length() - i - 1);
	    }
	    return resultado;
	}

	private static String decimal_para_hexadecimal(Integer numero_decimal) {
	    List<String> lista_resto = new ArrayList<String>();
	    int resto = 0;
	    do {
	        resto = numero_decimal % 16;
	        String representacao_em_hexadecimal = algarismo_decimal_para_hexadecimal(resto);
	        lista_resto.add(representacao_em_hexadecimal);
	        numero_decimal = numero_decimal / 16;
	    } while(numero_decimal != 0);
	    Collections.reverse(lista_resto);
	    return String.join("", lista_resto);
	}

	private static String algarismo_decimal_para_hexadecimal(Integer algarismo) {
	    switch(algarismo) {
	        case 10:
	            return "A";
	        case 11:
	            return "B";
	        case 12:
	            return "C";
	        case 13:
	            return "D";
	        case 14:
	            return "E";
	        case 15:
	            return "F";
	        default:
	            return algarismo.toString();
	    }
	}

	private static int algarismo_hexadecimal_para_decimal(String algarismo) {
	    algarismo = algarismo.toUpperCase();
	    switch(algarismo) {
	        case "A":
	            return 10;
	        case "B":
	            return 11;
	        case "C":
	            return 12;
	        case "D":
	            return 13;
	        case "E":
	            return 14;
	        case "F":
	            return 15;
	        default:
	            return Character.getNumericValue(algarismo.charAt(0));
	    }
	}

}