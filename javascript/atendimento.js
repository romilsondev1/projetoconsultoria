
function atendimento(){
    var msg = document.querySelector('div#msg')
    var atendimento = document.getElementById('horario')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var comp = document.querySelector('h2#comp')
    var conv = document.querySelector('h1#newsletter')

    //var hora = 20

    msg.innerHTML = (`Agora são ${hora}:${minuto} hrs, é só entrar em contato por um de nossos canais`)

    switch (hora){
        case 8:
        atendimento.style = 'width: 12.5%'
        atendimento.innerText = '% do nosso horário de atendimento '
        comp.innerHTML = 'Que bom tê-lo aqui. Estamos online agora'
        break
        case 9:
        atendimento.style = 'width: 25%'
        atendimento.innerText = '% do nosso horário de atendimento'
        comp.innerHTML = 'Que bom tê-lo aqui. Estamos online agora'
        break
        case 10:
        atendimento.style = 'width: 37.5%'
        atendimento.innerText = '% do nosso horário de atendimento'
        comp.innerHTML = 'Que bom tê-lo aqui. Estamos online agora'
        break
        case 11:
        atendimento.style = 'width: 50%'
        atendimento.innerText = '% do nosso horário de atendimento'
        comp.innerHTML = 'Que bom tê-lo aqui. Estamos online agora'
        break
        case 12:
        atendimento.style = 'width: 100%; background-color: #e75500;'
        atendimento.innerText = 'Estamos em horário de Staff, voltamos às 14:00'
        msg.innerText = (`Agora são ${hora}:${minuto} hrs, deixe uma mensagem em um dos nossos canais!`)
        comp.innerHTML = 'Que pena, parece que não nos encontramos'
        break
        case 13:
        atendimento.style = 'width: 100%; background-color: #e75500;'
        atendimento.innerText = 'Estamos em horário de Staff, voltamos às 14:00'
        msg.innerText = (`Agora são ${hora}:${minuto} hrs, deixe uma mensagem em um dos nossos canais!`)
        comp.innerHTML = 'Que pena, parece que não nos encontramos'
        break
        case 14:
        atendimento.style = 'width: 75%; background-color: #e79600'
        atendimento.innerText = '% do nosso horário de atendimento'
        comp.innerHTML = 'Que bom tê-lo aqui. Estamos online agora'
        break
        case 15:
        atendimento.style = 'width: 87.5%; background-color: #e77000 '
        atendimento.innerText = '% do nosso horário de atendimento'
        comp.innerHTML = 'Que bom tê-lo aqui. Estamos online agora'
        break
        case 16:
        atendimento.style = 'width: 99%; background-color: red'
        atendimento.innerText = '% do nosso horário de atendimento'
        comp.innerHTML = 'Que bom tê-lo aqui. Estamos online agora'
        break
    }

    if (hora < 8){
        atendimento.style = 'width: 100%'
        msg.innerText = `Agora são ${hora}:${minuto} hrs, inciaremos nosso atendimento às 8:00. Obrigado por nos visitar!`
        comp.innerHTML = 'Que pena, parece que não nos encontramos'
        conv.innerHTML = ''
    } else if (hora >= 17){
        atendimento.style = 'width: 100%; background-color: #303030;'
        msg.innerText = `Agora são ${hora}:${minuto} hrs, retornaremos o nosso atendimento amanhã. Obrigado por nos visitar!`
        comp.innerHTML = 'Que pena, parece que não nos encontramos'
        conv.innerHTML = ''
    }
}