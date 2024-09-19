const main = document.querySelector("main");

const loadingElemento = document.querySelector("#loading");

const generoElemento = document.querySelector('#genero');
// Adiciona evento para mudanças na seleção de gênero
generoElemento.addEventListener("change", filtro);

const searchElemento = document.querySelector('#search');
// Adiciona evento para mudanças no campo de pesquisa (search)
searchElemento.addEventListener("keyup", filtro);

const renderHtml = document.querySelector("#music");

(async () => {
    await getMusicas();
    
    await getGeneros();  

    criarOptionFiltroGeneros(generos);

    renderizar(musicas);
})(); 

