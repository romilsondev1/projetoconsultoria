<?php

if{mail(trim($_POST('email')), trim($_POST('nome')), trim($_POST('numero'),"from:romilsoncavalcante8@gmail.com"))}{
    $resultado = "sua mensagem foi enviada"
}else{
    $resultado = "não foi enviado"
}

<?php echo resultado?>