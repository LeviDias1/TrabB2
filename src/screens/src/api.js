import axios from 'axios';

const API_KEY = 'sua_chave_de_api'; // Substitua pela sua chave de API

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Erro ao obter os filmes populares:', error);
    return [];
  }
};
