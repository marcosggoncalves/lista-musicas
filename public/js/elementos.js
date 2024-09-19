// Função para criar opções de generos 
function criarOptionFiltroGeneros(data) {
    data.forEach(optionData => {
        // Cria um novo elemento <option>
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        // Adiciona o option ao select
        generoElemento.appendChild(option);
    });
}

const criarItemLista = (musica) => {
    /** Criação do container principal da música **/
    let container = document.createElement('div');
    // Define a classe para estilizar e centralizar o container
    container.setAttribute('class', 'container-music center');

    /** Criação do container da imagem da música **/
    let containerImg = document.createElement('div');
    // Define a classe para estilizar o container da imagem
    containerImg.setAttribute('class', 'container-music-img');
    // Criação do elemento de imagem e atribuição da URL da capa da música
    let imagem = document.createElement('img');
    imagem.setAttribute('src', musica.capaImg);
    // Adiciona a imagem ao container da imagem
    containerImg.appendChild(imagem);

    /** Criação do container para informações da música **/
    let containerDados = document.createElement('div');
    // Define a classe para estilizar o container de informações
    containerDados.setAttribute('class', 'container-music-info');
    // Cria uma lista (ul) para agrupar as informações da música
    let lista = document.createElement('ul');

    /** Criação do item da lista para o título da música **/
    let titulo = document.createElement('li');
    // Cria o elemento <span> para exibir o artista como um "chip" ao lado do título
    let chipSpan = document.createElement('span');
    chipSpan.setAttribute('class', 'chip-music-info-artista');
    // Cria um nó de texto com o nome do artista e o adiciona ao <span>
    let chipSpanTexto = document.createTextNode(musica.artista);
    chipSpan.appendChild(chipSpanTexto);
    // Cria o nó de texto com o título da música
    let tituloTexo = document.createTextNode(`${musica.titulo} `);
    // Adiciona o título e o "chip" (artista) ao item da lista (li)
    titulo.appendChild(tituloTexo);
    titulo.appendChild(chipSpan);

    /** Criação do item da lista para a data de lançamento **/
    let lancamento = document.createElement('li');
    // Cria o texto indicando a data de lançamento da música
    let lancamentoTexto = document.createTextNode(`Lançamento: ${musica.lancamento}`);
    // Adiciona o texto ao item da lista
    lancamento.appendChild(lancamentoTexto);

    /** Criação do item da lista para o gênero da música **/
    let genero = document.createElement('li');
    // Cria o <span> para exibir o gênero da música como um "chip"
    let chipSpanGenero = document.createElement('span');
    chipSpanGenero.setAttribute('class', 'chip-music-info');
    // Cria um nó de texto com o gênero da música e o adiciona ao <span>
    let chipSpanTextoGenero = document.createTextNode(musica.genero);
    chipSpanGenero.appendChild(chipSpanTextoGenero);
    // Adiciona o "chip" (gênero) ao item da lista (li)
    genero.appendChild(chipSpanGenero);

    /** Montagem da lista de informações **/
    // Adiciona os itens de título, lançamento e gênero à lista
    lista.appendChild(titulo);
    lista.appendChild(lancamento);
    lista.appendChild(genero);

    /** Montagem do container de informações **/
    // Adiciona a lista ao container de informações
    containerDados.appendChild(lista);

    /** Montagem final do container principal **/
    // Adiciona o container da imagem e o container de informações ao container principal
    container.appendChild(containerImg);
    container.appendChild(containerDados);

    // Retorna o container completo que pode ser inserido no DOM
    return container;
};

const loading = (displayLoading, displayMain) => {
    loadingElemento.style.display = displayLoading;
    main.style.display = displayMain;
}

const limparListadMusicas = (data) => {
    renderHtml.innerHTML = data.length == 0 ? 'Desculpa, não encontramos sua música :(' : null;
}

const renderizar = (data) => {
    // Limpar estrutura
    limparListadMusicas(data);
    // Parar loading
    loading('none', 'block');
    // renderizar e criar os elementos
    data.forEach(musica =>
        renderHtml.appendChild(criarItemLista(musica))
    )
}