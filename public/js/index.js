const main = document.querySelector("main"),
    loadingElemento = document.querySelector("#loading"),
    generoElemento = document.querySelector('#genero'),
    searchElemento = document.querySelector('#search'),
    renderHtml = document.querySelector("#music");

// Adiciona evento para mudanças na seleção de gênero
generoElemento.addEventListener("change", filtro);
// Adiciona evento para mudanças no campo de pesquisa (search)
searchElemento.addEventListener("keyup", filtro);

(async () => {
    // Buscar lista de musicas da api
    await getMusicas();
    // Buscar lista de generos
    await getGeneros();
    // Criar lista de generos na caixa de pesquisa 'select'
    criarOptionFiltroGeneros(generos);

    renderizar(musicas);
})();

