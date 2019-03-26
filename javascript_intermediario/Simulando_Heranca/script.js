function  Animal(){
    this.sleep = function(){
        console.log('zzzzzzzz');
    }
}

function Dog(){
    this.bark = function(){
        console.log('Woof');
    }
}

Dog. prototype = new Animal();

var myDog = new Dog();

myDog.sleep();

myDog.bark();