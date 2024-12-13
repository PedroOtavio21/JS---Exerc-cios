function converteMinuscula(palavra){
    if (typeof palavra !== 'string' || palavra.trim() === ''){
        throw new Error('O valor da variável deverá ser uma string não vazia')
    }
    return palavra.toLocaleLowerCase()
}

try {
    const palavra = prompt('Insira uma palavra qualquer:')
    console.log(`A palavra inserida ${palavra} convertida para minúsculo é igual a: ${converteMinuscula(palavra)}`)
} catch (err) {
    console.log('Erro encontrado na execução:', err.message)
}