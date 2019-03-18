
function parOuImpar(){
    var numb = document.getElementById('numb').value;
   
    if(numb % 2 == 1){
        document.getElementById('resposta').innerHTML = 'é impar';
    } 
    else{
        document.getElementById('resposta').innerHTML =  'é par';
    }

}