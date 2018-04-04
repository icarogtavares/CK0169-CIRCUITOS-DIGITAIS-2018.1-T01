package circuitosdigitais;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Tarefa1 {
	
	public static void main(String[] args) {
		int binario = 11011100;
		int decimal = 220;
		String hexadecimal = "DC";
		
		System.out.println("Decimal para Binário: " + decimalParaBinario(decimal));
		System.out.println("Binário para Decimal: " + binario_para_decimal(binario));
		System.out.println("Binário para hexadecimal: " + binarioParaHexadecimal(binario));
		System.out.println("Hexadecimal para Binário: " + hexadeximalParaBinario(hexadecimal));
		System.out.println("Hexadecimal para Decimal: " + hexadecimalParaDecimal(hexadecimal));
		System.out.println("Decimal para Hexadecimal: " + decimalParaHexadecimal(decimal));
		
		//Com zeros
		System.out.println("Decimal para Binário: " + decimalParaBinario(0));
		System.out.println("Binário para Decimal: " + binario_para_decimal(0));
		System.out.println("Binário para hexadecimal: " + binarioParaHexadecimal(0));
		System.out.println("Hexadecimal para Binário: " + hexadeximalParaBinario("0"));
		System.out.println("Hexadecimal para Decimal: " + hexadecimalParaDecimal("0"));
		System.out.println("Decimal para Hexadecimal: " + decimalParaHexadecimal(0));
	}
	
	private static String decimalParaBinario(Integer numeroDecimal) {
		int quociente = numeroDecimal;
	    List<Integer> listaResto = new ArrayList<Integer>();
	    do {
	        listaResto.add(quociente % 2);
	        quociente = quociente / 2;
	    } while(quociente != 0);
	    Collections.reverse(listaResto);
	    return listaResto.stream().map(Object::toString).collect(Collectors.joining());
	}
	        
	private static int binario_para_decimal(Integer numeroBinario) {
	    String numeroBinarioStr = numeroBinario.toString();
	    int resultado = 0;
	    for (int i = 0; i < numeroBinarioStr.length(); i++) {
	        resultado += Character.getNumericValue(numeroBinarioStr.charAt(i)) * Math.pow(2, numeroBinarioStr.length() - i -1);
	    }
	    return resultado;
	}

	private static String binarioParaHexadecimal(Integer numeroBinario) {
	    Integer decimal = binario_para_decimal(numeroBinario);
	    String hexadecimal = decimalParaHexadecimal(decimal);
	    return hexadecimal;
	}

	private static String hexadeximalParaBinario(String numeroHexadecimal) {
	    Integer decimal = hexadecimalParaDecimal(numeroHexadecimal);
	    String binario = decimalParaBinario(decimal);
	    return binario;
	}

	private static int hexadecimalParaDecimal(String numeroHexadecimal) {
	    int resultado = 0;
	    for(int i = 0; i < numeroHexadecimal.length(); i++) {
	        int representacao_em_decimal = algarismoHexadecimalParaDecimal(String.valueOf(numeroHexadecimal.charAt(i)));
	        resultado += ((int)representacao_em_decimal) * Math.pow(16, numeroHexadecimal.length() - i - 1);
	    }
	    return resultado;
	}

	private static String decimalParaHexadecimal(Integer numeroDecimal) {
	    List<String> listaResto = new ArrayList<String>();
		int quociente = numeroDecimal;
	    int resto = 0;
	    do {
	        resto = quociente % 16;
	        String representacaoEmHexadecimal = algarismoDecimalParaHexadecimal(resto);
	        listaResto.add(representacaoEmHexadecimal);
	        quociente = quociente / 16;
	    } while(quociente != 0);
	    Collections.reverse(listaResto);
	    return String.join("", listaResto);
	}

	private static String algarismoDecimalParaHexadecimal(Integer algarismo) {
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

	private static int algarismoHexadecimalParaDecimal(String algarismo) {
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