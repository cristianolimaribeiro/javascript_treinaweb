function mensagem(){
    var number = Math.trunc((Math.random()*3)+1);

    switch(number){

        case 1: console.log('Se crime não compensa, então tenho a dizer que o meu emprego é um crime!'); break;

        case 2: console.log('A prova que a luz é mais rápida que o som, é o facto de certas pessoas parecerem brilhantes até as ouvirmos falar.'); break;

        case 3: console.log('Quem disse que dinheiro não traz felicidade não sabia onde fazer compras!'); break;
    }
}