import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function Details() {
  const { titulo, descricao, data, horario } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/home')}
      >
        <Ionicons name="arrow-back" size={28} color="#8257E5" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>
          Detalhes da Tarefa
        </Text>

        <View style={styles.card}>
          <Text style={styles.task}>
            {titulo}
          </Text>

          <Text style={styles.description}>
            {descricao || 'Sem descrição.'}
          </Text>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Ionicons name="calendar-outline" size={20} color="#8257E5" />
              <Text style={styles.infoText}>{data || 'Sem data'}</Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="time-outline" size={20} color="#8257E5" />
              <Text style={styles.infoText}>{horario || 'Sem hora'}</Text>
            </View>
          </View>
        </View>
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

  backButton: {
    padding: 10,
    marginTop: 20,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#8257E5',
  },

  card: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  task: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },

  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 20,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
  },
});