
const generoElemento = document.querySelector('#genero');

const searchElemento = document.querySelector('#search');

const renderHtml = document.querySelector("#music");
// Função executada quando o DOM é totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Cria as opções de gêneros no <select> baseado na lista de gêneros
    criarOptionFiltroGeneros(generos);
    // Renderiza a lista de músicas inicial
    renderizar(musicas);
});

// Adiciona evento para mudanças na seleção de gênero
generoElemento.addEventListener("change", filtro);
// Adiciona evento para mudanças no campo de pesquisa (search)
searchElemento.addEventListener("keyup", filtro);
