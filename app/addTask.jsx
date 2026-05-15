import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

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
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const { adicionarTarefa } =
    useContext(TaskContext);

  function salvar() {

    adicionarTarefa(titulo, descricao, data, horario);

    router.back();
  }

  return (


    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={28} color="#8257E5" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>
          Nova Tarefa
        </Text>

        <TextInput
          placeholder="Título da tarefa"
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          placeholder="Descrição"
          style={[styles.input, styles.textArea]}
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={4}
        />

        <View style={styles.row}>
          <TextInput
            placeholder="Dia (Ex: 12/05)"
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            value={data}
            onChangeText={setData}
          />
          <TextInput
            placeholder="Horário (Ex: 14:00)"
            style={[styles.input, { flex: 1 }]}
            value={horario}
            onChangeText={setHorario}
          />
        </View>

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >
        <Text style={styles.buttonText}>
          Salvar
        </Text>
      </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F4FF',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#8257E5',
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

  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  backButton: {
    padding: 10,
    marginTop: 20,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

});