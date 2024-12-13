const multiplicaPorDez = valor => {
    if (typeof valor !== 'number'){
        console.log('O valor inserido deverá ser numérico.')
    }

    return valor * 10
}

try {
    const valor = parseFloat(prompt('Insira um valor qualquer:'))
    console.log(`O resultado do número ${valor} x 10 é igual a: ${multiplicaPorDez(valor)}`)
} catch (err) {
    console.log('Erro encontrado na execução:', err.message)
}