import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

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

  const { tarefas, toggleTarefa, removerTarefa } = useContext(TaskContext);

  const tarefasConcluidas = tarefas.filter(t => t.concluida).length;
  const porcentagem = tarefas.length > 0
    ? Math.round((tarefasConcluidas / tarefas.length) * 100)
    : 0;
  return (


    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.profileCircle}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop' }}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.welcome}>
            Olá, {nome}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push({
            pathname: '/settings',
            params: { nome: nome }
          })}
        >
          <Ionicons name="person-circle-outline" size={32} color="#8257E5" />
        </TouchableOpacity>
      </View>

      {/* Banner de Produtividade */}
      <View style={styles.banner}>
        <View style={styles.bannerInfo}>
          <View style={styles.percentageCircleContainer}>
            <Text style={styles.percentageText}>{porcentagem}%</Text>
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Suas tarefas hoje</Text>
            <Text style={styles.bannerSubtitle}>
              {porcentagem === 100
                ? 'Parabéns! Todas as tarefas concluídas! 🎉'
                : 'Você está quase lá! Continue assim.'}
            </Text>

            <TouchableOpacity
              style={styles.bannerButton}
              onPress={() => router.push('/addTask')}
            >
              <Text style={styles.bannerButtonText}>Começar agora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.title}>
        Suas tarefas
      </Text>

      {/* Lista */}
      <FlatList
        data={tarefas}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <TouchableOpacity
            style={[styles.card, item.concluida && styles.cardConcluido]}
            onPress={() => router.push({
              pathname: '/details',
              params: {
                id: item.id,
                titulo: item.titulo,
                descricao: item.descricao,
                data: item.data,
                horario: item.horario,
              },
            })}
          >
            <View style={styles.cardHeader}>
              <Text style={[styles.task, item.concluida && styles.taskConcluido]}>
                {item.titulo}
              </Text>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => toggleTarefa(item.id)}
              >
                <Ionicons
                  name={item.concluida ? "checkmark-circle" : "ellipse-outline"}
                  size={26}
                  color={item.concluida ? "#8257E5" : "#CCC"}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.taskFooter}>
              <View style={styles.taskInfoItem}>
                <Ionicons name="calendar-outline" size={14} color="#8257E5" />
                <Text style={styles.taskInfoText}>{item.data || 'Sem data'}</Text>
              </View>
              <View style={styles.taskInfoItem}>
                <Ionicons name="time-outline" size={14} color="#8257E5" />
                <Text style={styles.taskInfoText}>{item.horario || '--:--'}</Text>
              </View>
            </View>

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


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F4FF',
  },

  welcome: {
    fontSize: 22,
    color: '#555',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8257E5',
  },

  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardConcluido: {
    opacity: 0.6,
    backgroundColor: '#F0F0F0',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  task: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },

  taskConcluido: {
    textDecorationLine: 'line-through',
    color: '#999',
  },

  checkButton: {
    paddingLeft: 10,
  },

  taskFooter: {
    flexDirection: 'row',
    marginTop: 5,
  },

  taskInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },

  taskInfoText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },

  button: {
    backgroundColor: '#8257E5',
    height: 55,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40,
  },

  iconButton: {
    padding: 5,
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#DDD',
    overflow: 'hidden',
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  banner: {
    backgroundColor: '#8257E5',
    padding: 30,
    borderRadius: 25,
    marginBottom: 25,
    marginTop: 10,
  },

  bannerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  percentageCircleContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderTopColor: '#FFF', // Simula o preenchimento
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },

  percentageText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },

  bannerTextContainer: {
    flex: 1,
  },

  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },

  bannerSubtitle: {
    fontSize: 16,
    color: '#E1E1E1',
    marginBottom: 15,
  },

  bannerButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  bannerButtonText: {
    color: '#8257E5',
    fontWeight: 'bold',
    fontSize: 14,
  },

});