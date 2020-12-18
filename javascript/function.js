function newsletter (){
    var email = window.document.querySelector('input#email')
    var msg = window.document.getElementById('information')
    var inform= window.document.getElementById('information1')
    var cont = String(email.value)
    if (cont != '') {
        msg.innerHTML=('Você foi cadastrado com sucesso!')
        msg.style = ('text-align: center; font-size:30px;')
        inform.innerHTML = ('OBRIGADO...')
        inform.style = ('color: #e75500')
    } else {
        msg.innerHTML=('Por favor informe o seu email corretamente!')
        msg.style = ('text-align: center; font-size:30px;')
        inform.innerHTML = ('DESCULPE...')
        inform.style = ('color: #e75500')
    }
    

}

