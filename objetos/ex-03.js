const calculadora = {
    soma: (x, y) => {
        if (typeof x !== 'number' || typeof y !== 'number'){
            throw new Error('Os valores deverão ser de tipo numérico.')
        }
        return x + y
    }
}

console.log(`Resultado da soma de 5 e 8: ${calculadora.soma(5, 8)}`)