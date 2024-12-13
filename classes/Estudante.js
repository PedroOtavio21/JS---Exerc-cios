class Estudante {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        this.notas = []
    }

    adicionarNota(nota){
        if (typeof nota !== 'number'){
            throw new Error('A nota deverá ser de tipo numérico')
        }
        this.notas.push(nota)
    }

    calcularMedia(){
        const soma = this.notas.reduce((resultado, nota) => resultado += nota, 0)
        return soma / this.notas.length
    }
}

const pedro = new Estudante('Pedro', 22)
pedro.adicionarNota(7.0)
pedro.adicionarNota(8.2)
pedro.adicionarNota(7.8)
console.log(`Média das notas do aluno ${pedro.nome}: ${pedro.calcularMedia()}`)