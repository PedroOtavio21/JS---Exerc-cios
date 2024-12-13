function verificaNumeroPar(number){
    if (typeof number !== 'number'){
        throw new Error('O valor inserido deverá ser um número.')
    }

    if(number % 2 === 0){
        return true
    } else {
        return false
    }
}

try {
    const num = parseFloat(prompt('Insira um número qualquer:'))
    const result = verificaNumeroPar(num) ? 'Par' : 'Impar'

    prompt('O número inserido é:', result)
} catch (err) {
    console.log('Erro encontrado em execução:', err.message)
}