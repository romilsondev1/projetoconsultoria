function teste(){
    var res1 = [document.querySelector('input#res1'), document.querySelector('input#res2'), document.querySelector('input#res3')|document.querySelector('input#res4')
    , document.querySelector('input#res5'), document.querySelector('input#res6'), document.querySelector('input#res7'),
    document.querySelector('input#res8'), document.querySelector('input#res9'), document.querySelector('input#res10'),
    document.querySelector('input#res11'), document.querySelector('input#res12'), document.querySelector('input#res13'), 
    document.querySelector('input#res14'), document.querySelector('input#res15'), document.querySelector('input#res16'),
    document.querySelector('input#res17'), document.querySelector('input#res18'), document.querySelector('input#res19'),
    document.querySelector('input#res20'), document.querySelector('input#res21'), document.querySelector('input#res22')]


    var result = document.querySelector('div#resultado')


    if (res1 = ['sim', undefined, 'sim', undefined, 'sim', undefined, 'sim', undefined, 'sim', undefined, 'sim', undefined ,'sim', null,
     'sim', undefined, 'sim', undefined, 'sim', undefined, 'sim', undefined]){
        result.innerHTML = 'O seu nível é básico, o melhor treinamento para você é o White Belt'
        result.style = ('text-align: center; font-size:30px;')
     }else {
         result.innerHTML = 'falhou'
     }
}
