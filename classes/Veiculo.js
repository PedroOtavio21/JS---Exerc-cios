class Veiculo {
    constructor(marca, modelo, velocidadeMaxima){
        this.marca = marca
        this.modelo = modelo
        this.velocidadeMaxima = velocidadeMaxima
    }

    descrever() {
        return `Descrição de veículo:
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        Velocidade Máxima: ${this.velocidadeMaxima}km`
    }
}

const palio = new Veiculo('Fiat', 'Palio', 140)
console.log(palio.descrever())