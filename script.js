function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var hr = hora + ':' + minuto

   //var hora = 23

    msg.innerHTML = `Agora são ${hr} horas`

    if (hora >= 0 && hora <= 12){
            img.scr = 'manha.png'
            document.body.style.background = '#ecd4ae'        

    }else if (hora >= 12 && hora <= 18){
            img.src = 'tarde.png'
            document.body.style.background = '#e4a363'
    }else {
            img.src = 'noite.png'
            document.body.style.background = '#453d64'
    }       

}

   
