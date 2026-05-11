import {
  View,
  Text,
  StyleSheet,
  Switch,
} from 'react-native';

import { useState } from 'react';

export default function Settings() {

  const [ativo, setAtivo] = useState(false);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Configurações
      </Text>

      <View style={styles.option}>

        <Text style={styles.text}>
          Tema Escuro
        </Text>

        <Switch
          value={ativo}
          onValueChange={setAtivo}
        />

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
    marginBottom: 30,
    color: '#2D5BFF',
  },

  option: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
  },

});