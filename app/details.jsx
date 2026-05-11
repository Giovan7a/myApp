import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Details() {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Detalhes da Tarefa
      </Text>

      <View style={styles.card}>

        <Text style={styles.task}>
          Estudar React Native
        </Text>

        <Text style={styles.description}>
          Revisar componentes e navegação.
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#F4F7FB',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#2D5BFF',
  },

  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
  },

  task: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: '#666',
  },

});