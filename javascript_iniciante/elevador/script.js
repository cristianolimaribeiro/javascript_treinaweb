var Elevador = {
    andar: 0,
    total: 5,
    up(){
        if(this.andar < this.total){
            this.andar++;
        }
        this.print();
    },
    down(){
        if(this.andar > 0){
            this.andar--;
        }
        this.print();
    },
    print(){
        console.log(`Andar: ${this.andar}`);
    }
}

Elevador.print();