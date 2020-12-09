function validar_form_contato(){
    var fnome = formcontato.fname.value;
    var lname = formcontato.lname.value;
    var fendereco = formcontato.fendereco.value;

    if (fnome == ""){
        alert('Campo nome é obrigatório')
        formcontato.fname.focus()
        return false
    }
    if (lname == ""){
        alert('Campo sobrenome é obrigatório')
        formcontato.lname.focus()
        return false
    }
    if (fendereco == ""){
        alert('Campo endereço é obrigatório')
        formcontato.fendereco.focus()
        return false
    }
}