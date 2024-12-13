const livro = {
    serie: '',
    titulo: '',
    autor: ''
}

const novoLivro = livro
novoLivro.serie = 'O senhor dos Aneis'
novoLivro.titulo = 'O Retorno do Rei'
novoLivro.autor = 'J.R.R. Tolkien'

// Livro como referência -> Valores iguais!
console.log(livro)