// Created by Guido Rossi www.guidorossi.com.ar
// License: Creative Commons Attribution-ShareAlike 3.0 Unported http://creativecommons.org/licenses/by-sa/3.0/
// Version: 0.1


function num2txt(n){
  var entero = numeroaletra(parseInt(n));
  var decimal = Math.round((n%1)*100);
  if(decimal < 10){ decimal = "0"+decimal};
  return entero + " con " + decimal + " ctvos.---";
  
  
  function numeroaletra(numero) {
  
  var numero;
  var texto;
  
  switch (numero)
  {
    case 0: return "cero";
      break;
    case 1: return "uno";
      break;
    case 2:   return "dos";
      break;
     case 3:   return "tres";
      break;
       case 4:   return "cuatro";
      break;
       case 5:   return "cinco";
      break;
       case 6:   return "seis";
      break;
       case 7:   return "siete";
      break;
       case 8:   return "ocho";
      break;
       case 9:   return "nueve";
      break;
       case 10:   return "diez";
      break;
       case 11:   return "once";
      break;
       case 12:   return "doce";
      break;
       case 13:   return "trece";
      break;
       case 14:   return "catorce";
      break;
       case 15:   return "quince";
      break;
      case 20:   return "veinte";
      break;
      case 30:   return "treinta";
      break;
      case 40:   return "cuarenta";
      break;
      case 50:   return "cincuenta";
      break;
      case 60:   return "sesenta";
      break;
      case 70:   return "setenta";
      break;
      case 80:   return "ochenta";
      break;
      case 90:   return "noventa";
      break;
      case 100:   return "cien";
      break;
      case 1000:   return "mil";
      break;
      case 1000000:   return "un millon";
      break;
      case 1000000000:   return "mil millones";
      break;
    default: texto = "cero";
  }
  
  if(numero < 20){ texto = "dieci" + numeroaletra(numero-10);}
  else if(numero < 30){ texto = "veinti" + numeroaletra(numero-20);}
  else if(numero > 30 && numero < 100){ texto = numeroaletra(parseInt(numero/10)*10) + " y " + numeroaletra((numero-(parseInt(numero/10)*10)));}
  else if(numero > 100 && numero < 200){ texto = "ciento " + numeroaletra(numero-100);}
  else if(numero > 200 && numero < 500 || numero > 600 && numero < 700 || numero > 800 && numero < 900){ texto = numeroaletra(parseInt(numero/100)) + "cientos " + numeroaletra(numero-(100*parseInt((numero/100))));}
  else if(numero > 500 && numero < 600){ texto = "quinientos " + numeroaletra(numero-500);}
  else if(numero > 700 && numero < 800){ texto = "setecientos " + numeroaletra(numero-500);}
  else if(numero > 900 && numero < 1000){ texto = "novecientos " + numeroaletra(numero-900);}
  else if(numero > 1000 && numero < 2000){ texto = "mil " + numeroaletra(numero-1000);}
  else if(numero > 2000 && numero < 1000000){ texto = numeroaletra(parseInt(numero/1000)) + " mil " + numeroaletra(numero-(1000*parseInt((numero/1000))));}
  else if(numero > 1000000 && numero < 2000000){ texto = "un millon " + numeroaletra(numero-1000000);}
  else if(numero > 2000000 && numero < 1000000000){ texto = numeroaletra(parseInt(numero/1000000)) + " millones " + numeroaletra(numero-(1000000*parseInt((numero/1000000))));}
  else if(numero > 1000000000 && numero < 2000000000){ texto = "mil millones " + numeroaletra(numero-1000000000);}
  else if(numero > 2000000000 && numero < 1000000000000){ texto = numeroaletra(parseInt(numero/1000000000)) + " mil millones " + numeroaletra(numero-(1000000000*parseInt((numero/1000000000))));}
  
  return texto;

  
}
  
  
}


