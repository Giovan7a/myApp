import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  useLocalSearchParams,
  router,
} from 'expo-router';

import {
  useContext,
} from 'react';

import {
  TaskContext,
} from './TaskContext';

export default function Home() {

  const { nome } = useLocalSearchParams();

  const { tarefas } = useContext(TaskContext);
  return (

    <View style={styles.container}>

      {/* Nome */}
      <Text style={styles.welcome}>
        Olá, {nome} 👋
      </Text>

      <Text style={styles.title}>
        Suas tarefas
      </Text>

      {/* Lista */}
      <FlatList
        data={tarefas}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.card}

            onPress={() => router.push('/details')}
          >

            <Text style={styles.task}>
              {item.titulo}
            </Text>

          </TouchableOpacity>

        )}
      />

      {/* Botões */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/addTask')}
      >
        <Text style={styles.buttonText}>
          + Nova tarefa
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => router.push('/settings')}
      >
        <Text style={styles.buttonText}>
          Configurações
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
    backgroundColor: '#F4F7FB',
  },

  welcome: {
    fontSize: 22,
    color: '#555',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2D5BFF',
  },

  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  task: {
    fontSize: 18,
  },

  button: {
    backgroundColor: '#2D5BFF',
    height: 55,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
  },

  settingsButton: {
    backgroundColor: '#555',
    height: 55,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

});