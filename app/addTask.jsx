import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  useState,
  useContext,
} from 'react';

import {
  TaskContext,
} from './TaskContext';

import { router } from 'expo-router';

export default function AddTask() {

  const [titulo, setTitulo] = useState('');

  const { adicionarTarefa } =
    useContext(TaskContext);

  function salvar() {

    adicionarTarefa(titulo);

    router.push('/home');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Nova Tarefa
      </Text>

      <TextInput
        placeholder="Título da tarefa"
        style={styles.input}

        value={titulo}
        onChangeText={setTitulo}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >
        <Text style={styles.buttonText}>
          Salvar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F4F7FB',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2D5BFF',
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#FFF',
    height: 55,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#2D5BFF',
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

});