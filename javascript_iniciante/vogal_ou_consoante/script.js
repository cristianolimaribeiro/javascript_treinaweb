function vogalOuConsoante(){
    var letra = document.getElementById('letra').value;
    var vogal = false;

    switch(letra){
        case 'a': vogal = true; break;
        case 'e': vogal = true; break;
        case 'i': vogal = true; break;
        case 'o': vogal = true; break;
        case 'u': vogal = true; break;
    }
    if(vogal){
        document.getElementById('resposta').innerHTML = 'É vogal'
    }
    else{
        document.getElementById('resposta').innerHTML = 'É consoante'
    }
}