   document.getElementById("cifrar").addEventListener("click", function () {   
  


    let textoIngresado = document.getElementById('key1').value;   

    
                    
    let desplazar = parseInt(document.getElementById('offset1').value);

     
    document.getElementById('textCipher').value += cipher.encode(textoIngresado, desplazar);  
  
  })    
   document.getElementById("decifrar").addEventListener("click", function () {   
    let textoIngresado = document.getElementById('key1').value;   
    let desplazar = parseInt(document.getElementById('offset1').value); 
  
  
    document.getElementById('textCipher').value += cipher.decode(textoIngresado, desplazar);  
  
  });
