let filtro = (event) => {
    let search = event.target.value;
    // Condição especial, quando for selecionado 'todos', renderizar todos os itens
    if (['todos'].includes(search)) {
        return renderizar(musicas);
    }
    // Buscar músicas pelo título ou nome do artista
    let resultados = musicas.filter(musica =>
        (musica.titulo.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        musica.artista.toLowerCase().indexOf(search.toLowerCase()) > -1) ||
        musica.genero == search
    )
    // Renderizar resultados do filtro
    renderizar(resultados);
};