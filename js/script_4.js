function verifica() {
    if (document.forms[0].email.value.length == 0) {
      alert('Por favor, informe o seu EMAIL.');
      return false;
    }
    return true;
  }
  
  function checarEmail(){
  if( document.forms[0].email.value=="" 
     || document.forms[0].email.value.indexOf('@')==-1 
       || document.forms[0].email.value.indexOf('.')==-1 )
      {
         alert( "Por favor, informe um E-MAIL válido!" );
         return false;
      }
  }
  

function Enviar() {
    var nome = document.getElementById("nomeid");
    
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    }

