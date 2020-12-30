/*function result()
    var resultado = document.querySelector('div#resultado') 

    resultado.innerHTML = 'Se prepare aqui aparecerá o seu resultado!' */


function teste(){
    var res1 = document.querySelector('input#res1')
    var res2 = document.querySelector('input#res2')
    var res3 = document.querySelector('input#res3')
    var res4 = document.querySelector('input#res4')
    var res5 = document.querySelector('input#res5')
    var res6 = document.querySelector('input#res6')
    var res7 = document.querySelector('input#res7')
    var res8 = document.querySelector('input#res8')
    var res9 = document.querySelector('input#res9')
    var res10 = document.querySelector('input#res10')
    var res11 = document.querySelector('input#res11')
    var result1 = String(res1.value)   
    var result2 = String(res2.value)   
    var result3 = String(res3.value)   
    var result4 = String(res4.value)   
    var result5 = String(res5.value)   
    var result6 = String(res6.value)   
    var result7 = String(res7.value)   
    var result8 = String(res8.value)   
    var result9 = String(res9.value)   
    var result10 = String(res10.value)   
    var result11 = String(res11.value) 

    var result = document.querySelector('div#resultado')



    if (result1 === 'sim' && result2 === 'não' && result3 ==='não' && result4 === 'não' && result5 === 'não' && result6 === 'não' && result7 === 'não' && result8 === 'não' && result9 === 'não' && result10 === 'não' && result11 ==='não'){
        result.innerHTML = 'O seu nível é básico, o melhor treinamento para você é o White Belt'
        result.style = ('text-align: center; font-size:30px;')
    }else if (result1 === 'sim' && result2 === 'sim' && result3 ==='não' && result4 === 'não' && result5 === 'não' && result6 === 'não' && result7 === 'não' && result8 === 'não' && result9 === 'não' && result10 === 'não' && result11 ==='não') {
        result.innerHTML = 'O seu nível é básico, o melhor treinamento para você é o White Belt'
        result.style = ('text-align: center; font-size:30px;')
    }else if (result1 === 'sim' && result2 === 'sim' && result3 ==='sim' && result4 === 'não' && result5 === 'não' && result6 === 'não' && result7 === 'não' && result8 === 'não' && result9 === 'não' && result10 === 'não' && result11 ==='não'){
        result.innerHTML = 'O seu nível é básico, o melhor treinamento para você é o Yellow Belt'
        result.style = ('text-align: center; font-size:30px;')
    }else if (result1 === 'sim' && result2 === 'sim' && result3 ==='sim' && result4 === 'sim' && result5 === 'não' && result6 === 'não' && result7 === 'não' && result8 === 'não' && result9 === 'não' && result10 === 'não' && result11 ==='não'){
        result.innerHTML = 'O seu nível é médio, o melhor treinamento para você é o Green Belt'
        result.style = ('text-align: center; font-size:30px;')
    }else if (result1 === 'sim' && result2 === 'sim' && result3 ==='sim' && result4 === 'sim' && result5 === 'sim' && result6 === 'não' && result7 === 'não' && result8 === 'não' && result9 === 'não' && result10 === 'não' && result11 ==='não'){
        result.innerHTML = 'O seu nível é médio, o melhor treinamento para você é o Green Belt'
        result.style = ('text-align: center; font-size:30px;')
    }else if (result1 === 'sim' && result2 === 'sim' && result3 ==='sim' && result4 === 'sim' && result5 === 'sim' && result6 === 'sim' && result7 === 'não' && result8 === 'não' && result9 === 'não' && result10 === 'não' && result11 ==='não'){
        result.innerHTML = 'O seu nível é alto, mas o treinamento indicado para você ainda é o Green Belt'
        result.style = ('text-align: center; font-size:30px;')
    }else if (result1 === 'sim' && result2 === 'sim' && result3 ==='sim' && result4 === 'sim' && result5 === 'sim' && result6 === 'sim' && result7 === 'sim' && result8 === 'não' && result9 === 'não' && result10 === 'não' && result11 ==='não'){
        result.innerHTML = 'O seu nível é alto, o melhor treinamento para você é o Black Belt'
        result.style = ('text-align: center; font-size:30px;')
    }else if (result1 === 'sim' && result2 === 'sim' && result3 ==='sim' && result4 === 'sim' && result5 === 'sim' && result6 === 'sim' && result7 === 'sim' && result8 === 'sim' && result9 === 'não' && result10 === 'não' && result11 ==='não'){
        result.innerHTML = 'O seu nível é alto, o melhor treinamento para você é o Black Belt'
        result.style = ('text-align: center; font-size:30px;')
    }else if (result1 === 'sim' && result2 === 'sim' && result3 ==='sim' && result4 === 'sim' && result5 === 'sim' && result6 === 'sim' && result7 === 'sim' && result8 === 'sim' && result9 === 'sim' && result10 === 'não' && result11 ==='não'){
        result.innerHTML = 'O seu nível é muito alto, o melhor treinamento para você é o Master Black Belt'
        result.style = ('text-align: center; font-size:30px;')
    }else if (result1 === 'sim' && result2 === 'sim' && result3 ==='sim' && result4 === 'sim' && result5 === 'sim' && result6 === 'sim' && result7 === 'sim' && result8 === 'sim' && result9 === 'sim' && result10 === 'sim' && result11 ==='não'){
        result.innerHTML = 'O seu nível é muito alto, o melhor treinamento para você é o Master Black Belt'
        result.style = ('text-align: center; font-size:30px;')
    }else if (result1 === 'sim' && result2 === 'sim' && result3 ==='sim' && result4 === 'sim' && result5 === 'sim' && result6 === 'sim' && result7 === 'sim' && result8 === 'sim' && result9 === 'sim' && result10 === 'sim' && result11 ==='sim'){
        result.innerHTML = 'O seu nível é muito alto, você não precisa de treinamento na metodologia!'
        result.style = ('text-align: center; font-size:30px;')
    }
}