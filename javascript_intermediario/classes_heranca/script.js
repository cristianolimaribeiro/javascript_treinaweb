class Animal{
    sleep(){
        console.log('zzzzz');
    }
}

class Dog extends Animal{
    bark(){
        console.log('woof');
    }
}

var myDog = new Dog();