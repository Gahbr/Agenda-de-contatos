 // Validação de formulário



 function Validar(){
    let nome = frmContato.nome.value;
    let fone = frmContato.fone.value;
   
       if (nome === ''){
           alert("Preencha o campo Nome");
           frmContato.nome.focus();
           document.querySelector('input[name="nome"]').style.borderColor = 'red';
           document.querySelector('input[name="nome"]').placeholder = 'Preencha o campo Nome!';
         
           return false;
       } else if (fone ===''){
           alert("Preencha o campo Fone");
           frmContato.fone.focus();
           document.querySelector('input[name="fone"]').style.borderColor = 'red';
           document.querySelector('input[name="fone"]').placeholder = 'Preencha o campo Telefone!';
           return false
       } else{
           document.forms["frmContato"].submit();
       }

}