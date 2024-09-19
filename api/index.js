var musicas = [];
var generos = [];

// Função para buscar lista de músicas
async function getMusicas() {
    try {
        const response = await axios.get('https://marcosggoncalves.github.io/new-music/api/data/musicas.json');
        musicas = response.data;
    } catch (error) {
        console.error('Erro ao buscar músicas:', error);
        return [];
    }
}

// Função para buscar lista de gêneros
async function getGeneros() {
    try {
        const response = await axios.get('https://marcosggoncalves.github.io/new-music/api/data/generos.json');
        generos =  response.data;
    } catch (error) {
        console.error('Erro ao buscar gêneros:', error);
        return [];
    }
}

(async () => {
    await getMusicas();
    await getGeneros();  
})();
 