import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { router } from 'expo-router';

import { useState } from 'react';

export default function Login() {

  const [nome, setNome] = useState('');

  function entrar() {

    router.push({
      pathname: '/home',

      params: {
        nome: nome,
      },
    });

  }

  return (

    <View style={styles.container}>

      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4481/4481163.png' }}
        style={styles.logo}
      />

      <Text style={styles.title}>
        UniTask
      </Text>

      {/* Nome */}
      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}

        value={nome}
        onChangeText={setNome}
      />

      {/* Email */}
      <TextInput
        placeholder="Digite seu email"
        style={styles.input}
      />

      {/* Senha */}
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={entrar}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F8F4FF',
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#8257E5',
  },

  input: {
    backgroundColor: '#FFF',
    height: 55,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#8257E5',
    height: 55,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },

});