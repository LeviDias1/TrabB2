import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';

const MoviesScreen = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes Populares</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }}
              style={styles.moviePoster}
            />
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text style={styles.movieOverview}>{item.overview}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  movieContainer: {
    marginBottom: 16,
  },
  moviePoster: {
    width: 200,
    height: 300,
    marginBottom: 8,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieOverview: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default MoviesScreen;

