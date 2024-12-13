class Animal{
    constructor(nome, som){
        this.nome = nome
        this.som = som
    }

    falar(){
        return `O ${this.nome} faz ${this.som}!`
    }
}

const gato = new Animal('Gato', 'Miau')
console.log(gato.falar())