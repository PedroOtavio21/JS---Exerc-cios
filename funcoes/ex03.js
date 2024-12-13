function convertePolegadasParaCentimetros(value){
    if (typeof value !== 'number'){
        throw new Error('Valor inserido deverá ser um número em polegadas.')
    }
    return value * 2.54
}

try {
    const polegada = parseFloat(prompt('Insira um valor qualquer desejado em polegadas:'))
    const resultado = convertePolegadasParaCentimetros(polegada)
    console.log(`${polegada} polegadas equivalem a ${resultado} cm`)
} catch (err) {
    console.log('Erro encontrado na execução:', err.message)
}