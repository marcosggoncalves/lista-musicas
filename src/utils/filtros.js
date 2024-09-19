// Seleciona o elemento de gênero
const generoElemento = document.querySelector('#genero');

const filtro = (event, type = 'genero') => {
    // Inicializa o array de resultados com todas as músicas
    let resultados = musicas;
    // Obtém o valor da busca em minúsculas
    let pesquisa = event.target.value.toLowerCase();
    // Genero selecionado
    let generoSelecionado = generoElemento.value;
    // Se o valor da busca for 'todos', renderiza todas as músicas
    if (type == 'genero' && generoSelecionado === 'todos'){
        return renderizar(musicas);
    }
    // Filtra as músicas por título ou artista se o tipo não for  filtro por 'genero'
    if (type == 'artistaETitulo') {
        resultados = resultados.filter(musica => musica.titulo.toLowerCase().includes(pesquisa) || musica.artista.toLowerCase().includes(pesquisa));
    }
    // Filtra as músicas por gênero, exceto se o valor selecionado for 'todos'
    if (generoSelecionado !== 'todos') {
        resultados = resultados.filter(musica => musica.genero === generoSelecionado);
    }
    // Renderiza os resultados filtrados
    renderizar(resultados);
};
