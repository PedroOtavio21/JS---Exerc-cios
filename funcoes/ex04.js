// Apenas o necessário para resolução
function converteIMC(peso, altura){
    if (typeof peso !== 'number' || typeof altura !== 'number'){
        throw new Error('Valores inseridos de peso ou altura deverão ser de tipo numérico.')
    }

    return peso / (altura * altura)
}

// Conteúdo extra
function resultadoIMC(resultado){
    if (typeof resultado !== 'number'){
        throw new Error('Valor inserido de IMC deverá ser de tipo numérico.')
    }

    return verificaIMC(resultado)
}

function verificaIMC(valorTeste){
    if (typeof valorTeste !== 'number'){
        throw new Error('O valor inserido para verificação deverá ser de tipo numérico.')
    }

    if (valorTeste < 18.5) {
        return 'Magreza' 
    } else if (valorTeste < 25){
        return 'normal'
    } else if (valorTeste < 30){
        return 'sobrepeso'
    } else if (valorTeste < 40){
        return 'obesidade'
    } else {
        return 'obesidade grave'
    }
}

try {
    const peso = parseFloat(prompt('Insira o valor de seu peso:'))
    const altura = parseFloat(prompt('Insira o valor de sua altura:'))

    const imc = converteIMC(peso, altura)
    console.log(`O resultado do cálculo de seu IMC com peso ${peso}cm e altura ${altura}m, geraram como resultado: 
        ${resultadoIMC(peso, altura)}`
    )
} catch (err) {
    console.log('Erro encontrado no decorrer de solução:', err.message)
}