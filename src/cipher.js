window.cipher = {   // inicio de función
  
  encode: (textoIngresado, desplazar) => {   // sección de cifrar datos ( encode )
    
    let cifradoAscci = "";    

    for (let i = 0; i <= textoIngresado.length; i++) {  

      let cesar = textoIngresado.charCodeAt(i);   
                                                

      if (cesar >= 65 && cesar <= 90) {   // 65 y 90 son los valores en que ronda el abecedario en asccii

             cifradoAscci += String.fromCharCode(((cesar - 65 + desplazar) % 26) + 65);   // cálculos de algoritmo universal para código cesar
      } else if ((cesar >= 97) && (cesar <= 122)) {
        cifradoAscci += String.fromCharCode(((cesar - 97 + (desplazar)) % 26) + 97);
      } 

    }

    return cifradoAscci; 
                            
  },

  decode: (textoIngresado, desplazar) => {    

    let cifradoAscci = '';


    for (let i = 0; i <= textoIngresado.length; i++) {
      let cesar = textoIngresado.charCodeAt(i);
      if ((cesar >= 65) && (cesar <= 90)) {
        cifradoAscci += String.fromCharCode(((cesar - 90 - desplazar) % 26) + 90);
        //cifradoEnAscci es igual a vacio + el cifrado 
      } else if ((cesar >= 97) && (cesar <= 122)) {
        cifradoAscci += String.fromCharCode(((cesar - 122 - desplazar) % 26) + 122);
      }

    }

    return cifradoAscci;
    
  }
};
