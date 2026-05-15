import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function Profile() {
  const { nome } = useLocalSearchParams();
  const [ativo, setAtivo] = useState(false);

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
          Meu Perfil
        </Text>

        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop' }}
            style={styles.largeProfileImage}
          />
          <Text style={styles.userName}>{nome || 'Usuário'}</Text>
          <Text style={styles.userEmail}>usuario@unitask.com</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferências</Text>

          <View style={styles.option}>
            <View style={styles.optionInfo}>
              <Ionicons name="moon-outline" size={22} color="#8257E5" />
              <Text style={styles.optionText}>Tema Escuro</Text>
            </View>
            <Switch
              value={ativo}
              onValueChange={setAtivo}
              trackColor={{ false: '#767577', true: '#8257E5' }}
              thumbColor={ativo ? '#FFF' : '#f4f3f4'}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={20} color="#FFF" />
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.replace('/login')}
        >
          <Ionicons name="log-out-outline" size={20} color="#FF4B4B" />
          <Text style={styles.logoutText}>Sair da conta</Text>
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

  backButton: {
    padding: 10,
    marginTop: 20,
  },

  content: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#8257E5',
    alignSelf: 'flex-start',
  },

  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },

  largeProfileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#FFF',
  },

  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  userEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },

  section: {
    width: '100%',
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999',
    textTransform: 'uppercase',
    marginBottom: 10,
    marginLeft: 5,
  },

  option: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  optionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },

  editButton: {
    backgroundColor: '#8257E5',
    width: '100%',
    height: 55,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  editButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  logoutButton: {
    width: '100%',
    height: 55,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FF4B4B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#FF4B4B',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});