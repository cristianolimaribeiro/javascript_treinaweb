function numPrimo(num){
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return 'Não é número primo'
        }
    }
    return num !== 1 
}