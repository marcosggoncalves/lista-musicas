const url = 'https://marcosggoncalves.github.io/new-music/src/';

var musicas = new Array(), generos = new Array();

// Função para buscar lista de músicas
async function getMusicas() {
    try {
        const response = await axios.get(`${url}/api/data/musicas.json`);
        musicas = response.data;
    } catch (error) {
       alert('Erro ao consultar endpoint de listagem das músicas:', error); 
    }
}

// Função para buscar lista de gêneros
async function getGeneros() {
    try {
        const response = await axios.get(`${url}/api/data/generos.json`);
        generos =  response.data;
    } catch (error) {
       alert('Erro ao consultar endpoint de listagem dos  gêneros:', error); 
    }
}