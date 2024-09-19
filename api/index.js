  // Função para buscar lista de músicas
  async function getMusicias() {
    try {
        const response = await axios.get('./api/data/musicas.json');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar músicas:', error);
        return [];
    }
}

// Função para buscar lista de gêneros
async function getGeneros() {
    try {
        const response = await axios.get('./api/data/generos.json');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar gêneros:', error);
        return [];
    }
}

 // Chama as funções e exibe os dados
 (async () => {
    const musicas = await getMusicias();
    const generos = await getGeneros(); 
})();