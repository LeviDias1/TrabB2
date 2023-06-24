import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ListaFilmes = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const fetchFilmes = async () => {
      const response = await fetch('https://api.otaviolube.com/api/filmes?populate=*');
      const data = await response.json();
      setFilmes(data);
    };
    fetchFilmes();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.thumbnail.url }} style={styles.thumbnail} />
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.sinopse}>{item.sinopse}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={filmes}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      style={styles.lista}
    />
  );
};

const styles = StyleSheet.create({
  lista: {
    paddingHorizontal: 16,
  },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  thumbnail: {
    width: 50,
    height: 75,
    marginRight: 16,
  },
  conteudo: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sinopse: {
    fontSize: 14,
  },
});

export default ListaFilmes;
