import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Cartão do filme
const CartaoFilme = ({ imagem, titulo, sinopse, onPress }) => {
  return (
    <TouchableOpacity style={styles.cartao} onPress={onPress}>
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.sinopse}>{sinopse}</Text>
      <Text style={styles.botao}>Ver Detalhes</Text>
    </TouchableOpacity>
  );
};

// Tela de Detalhes do Filme
const DetalhesFilmeScreen = ({ route }) => {
  const { titulo, sinopse } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.tituloFilme}>{titulo}</Text>
      <Text style={styles.sinopseFilme}>{sinopse}</Text>
    </View>
  );
};

// Configuração das rotas
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Filmes">
        <Stack.Screen name="Filmes" component={FilmesScreen} />
        <Stack.Screen
          name="DetalhesFilme"
          component={DetalhesFilmeScreen}
          options={({ route }) => ({ title: route.params.titulo })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const FilmesScreen = ({ navigation }) => {
  const filmes = [
    {
      id: 1,
      imagem: require('./assets/avatar2.jpg'),
      titulo: 'Avatar 2',
      sinopse: 'Após 10 anos, Jake Sully retorna a Pandora para explorar novas regiões e enfrentar novos desafios.',
    },
    {
      id: 2,
      imagem: require('./assets/johnwick4.jpg'),
      titulo: 'John Wick 4',
      sinopse: 'John Wick se vê forçado a retornar ao submundo do crime após um novo contrato ser colocado em sua vida.',
    },
    {
      id: 3,
      imagem: require('./assets/creed3.jpg'),
      titulo: 'Creed 3',
      sinopse: 'Adonis Creed enfrenta seu maior desafio até agora, lutando contra um adversário poderoso que tem laços com o passado de sua família.',
    },
  ];

  return (
    <View style={styles.container}>
      {filmes.map((filme) => (
        <CartaoFilme
          key={filme.id}
          imagem={filme.imagem}
          titulo={filme.titulo}
          sinopse={filme.sinopse}
          onPress={() =>
            navigation.navigate('DetalhesFilme', {
              titulo: filme.titulo,
              sinopse: filme.sinopse,
            })
          }
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartao: {
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sinopse: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  botao: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  tituloFilme: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  sinopseFilme: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default App;
