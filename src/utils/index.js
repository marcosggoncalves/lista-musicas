const main = document.querySelector("main"),
    loadingElemento = document.querySelector("#loading"),
    searchElemento = document.querySelector('#search'),
    renderHtml = document.querySelector("#music");

// Adiciona evento para mudanças na seleção de gênero
generoElemento.addEventListener("change", (e) => filtro(e, 'genero'));
// Adiciona evento para mudanças no campo de pesquisa (search)
searchElemento.addEventListener("keyup",  (e) => filtro(e, 'artistaETitulo'));

(async () => {
    // Buscar lista de musicas da api
    await getMusicas();
    // Buscar lista de generos
    await getGeneros();
    // Criar lista de generos na caixa de pesquisa 'select'
    criarOptionFiltroGeneros(generos);

    renderizar(musicas);
})();

