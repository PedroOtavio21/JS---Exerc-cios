function areaRetangulo(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('Os valores inseridos devem ser numéricos!')
    }
    return x * y
}

try {
    console.log(`Área de retângulo, com lado ${5} e largura ${9}: ${areaRetangulo(5, 9)}`)
} catch (err) {
    console.log('Erro encontrado:', err.message)
}