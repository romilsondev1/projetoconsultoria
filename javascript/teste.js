function teste(){
    var result = document.getElementById('resultado')
    var retorn = document.querySelector('a#retorno')
    var comp = document.querySelector('span#complemento')
    var res1 = document.getElementsByName('optradio1')
    var res2 = document.getElementsByName('optradio2')
    var res3 = document.getElementsByName('optradio3')
    var res4 = document.getElementsByName('optradio4')
    var res5 = document.getElementsByName('optradio5')
    var res6 = document.getElementsByName('optradio6')
    var res7 = document.getElementsByName('optradio7')
    var res8 = document.getElementsByName('optradio8')
    var res9 = document.getElementsByName('optradio9')
    var res10 = document.getElementsByName('optradio10')
    var res11 = document.getElementsByName('optradio11')

    if (res1[0].checked && res2[0].checked && res3[0].checked && res4[0].checked && res5[0].checked && res6[0].checked 
        && res7[0].checked && res8[0].checked && res9[0].checked && res10[0].checked && res11[0].checked){
            
            result.innerHTML = ('Parabéns seu nível é máximo, não precisa de treinamento!')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            

    }else if (res1[0].checked && res2[1].checked && res3[1].checked && res4[1].checked && res5[1].checked && res6[1].checked 
        && res7[1].checked && res8[1].checked && res9[1].checked && res10[1].checked && res11[1].checked ){
        
            result.innerHTML=('Seu nível é básico, o treinamento indicado para você é White Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento com um ótimo desconto...'
            comp.style = 'font-size:20px'

    }else if (res1[0].checked && res2[0].checked && res3[1].checked && res4[1].checked && res5[1].checked && res6[1].checked 
        && res7[1].checked && res8[1].checked && res9[1].checked && res10[1].checked && res11[1].checked ){
        
            result.innerHTML=('Seu nível é básico, o treinamento indicado para você é White Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento com um ótimo desconto...'
            comp.style = 'font-size:20px'

    }else if (res1[0].checked && res2[0].checked && res3[0].checked && res4[1].checked && res5[1].checked && res6[1].checked 
        && res7[1].checked && res8[1].checked && res9[1].checked && res10[1].checked && res11[1].checked ){
        
            result.innerHTML=('Seu nível é intermediário, o treinamento indicado para você é Yellow Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento com um ótimo desconto...'
            comp.style = 'font-size:20px'
   
        }else if (res1[0].checked && res2[0].checked && res3[0].checked && res4[0].checked && res5[1].checked && res6[1].checked 
        && res7[1].checked && res8[1].checked && res9[1].checked && res10[1].checked && res11[1].checked ){
        
            result.innerHTML=('Seu nível é médio, o treinamento indicado para você é Green Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento com um ótimo desconto...'
            comp.style = 'font-size:20px'
    
    }else if (res1[0].checked && res2[0].checked && res3[0].checked && res4[0].checked && res5[0].checked && res6[1].checked 
        && res7[1].checked && res8[1].checked && res9[1].checked && res10[1].checked && res11[1].checked ){
        
            result.innerHTML=('Seu nível é médio, o treinamento indicado para você é Green Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento com um ótimo desconto...'
            comp.style = 'font-size:20px'
    
    }else if (res1[0].checked && res2[0].checked && res3[0].checked && res4[0].checked && res5[0].checked && res6[0].checked 
        && res7[1].checked && res8[1].checked && res9[1].checked && res10[1].checked && res11[1].checked ){
        
            result.innerHTML=('Seu nível é experiente, mas o treinamento indicado para você é Green Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento com um ótimo desconto...'
            comp.style = 'font-size:20px'
    
    }else if (res1[0].checked && res2[0].checked && res3[0].checked && res4[0].checked && res5[0].checked && res6[0].checked 
        && res7[0].checked && res8[1].checked && res9[1].checked && res10[1].checked && res11[1].checked ){
        
            result.innerHTML=('Seu nível é experiente, mas o treinamento indicado para você é Black Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento com um ótimo desconto...'
            comp.style = 'font-size:20px'
    
    }else if (res1[0].checked && res2[0].checked && res3[0].checked && res4[0].checked && res5[0].checked && res6[0].checked 
        && res7[0].checked && res8[0].checked && res9[1].checked && res10[1].checked && res11[1].checked ){
        
            result.innerHTML=('Seu nível é profissional, mas o treinamento indicado para você ainda é Black Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento com um ótimo desconto...'
            comp.style = 'font-size:20px'
    
    }else if (res1[0].checked && res2[0].checked && res3[0].checked && res4[0].checked && res5[0].checked && res6[0].checked 
        && res7[0].checked && res8[0].checked && res9[0].checked && res10[1].checked && res11[1].checked ){
        
            result.innerHTML=('Seu nível é alto, o treinamento indicado para você é Master Black Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento com um ótimo desconto...'
            comp.style = 'font-size:20px'
    
    }else if (res1[0].checked && res2[0].checked && res3[0].checked && res4[0].checked && res5[0].checked && res6[0].checked 
        && res7[0].checked && res8[0].checked && res9[0].checked && res10[0].checked && res11[1].checked ){
        
            result.innerHTML=('Seu nível é muito alto, o treinamento indicado para você é Master Black Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF; color:#e7a900'
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento com um ótimo desconto...'
            comp.style = 'font-size:20px'    
    
    }else if (res1[1].checked && res2[1].checked && res3[1].checked && res4[1].checked && res5[1].checked && res6[1].checked 
        && res7[1].checked && res8[1].checked && res9[1].checked && res10[1].checked && res11[1].checked ){
        
            result.innerHTML=('Não conseguimos medir seu nível :( Inicie sua carreira pelo White Belt')
            result.style = 'text-align:center ; margin-top:200px; font-size:25px; font: GOTHAM.TTF;' ;
            retorn.innerHTML = 'Clique aqui ';
            comp.innerHTML =   'para fazer o seu treinamento Grátis...'
            comp.style = 'font-size:20px'
              
    }else {
        
            result.innerHTML=('Infelizmente suas respostas não seguem uma lógica com relação à evolução de um Belt :(')
            result.style = 'text-align:center ; margin-top:200px; font-size:20px; font: GOTHAM.TTF; '    
    }

}
