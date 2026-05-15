import {
  createContext,
  useState,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskContext = createContext(null);

export function TaskProvider({ children }) {

  const [tarefas, setTarefas] = useState([]);

  // Carregar dados ao iniciar
  useEffect(() => {
    async function carregarTarefas() {
      const dados = await AsyncStorage.getItem('@unitask_tarefas');
      if (dados) {
        setTarefas(JSON.parse(dados));
      }
    }
    carregarTarefas();
  }, []);

  // Salvar dados quando houver mudanças
  useEffect(() => {
    async function salvarTarefas() {
      await AsyncStorage.setItem('@unitask_tarefas', JSON.stringify(tarefas));
    }
    salvarTarefas();
  }, [tarefas]);

  function adicionarTarefa(titulo, descricao, data, horario) {

    const novaTarefa = {
      id: Math.random().toString(),
      titulo,
      descricao,
      data,
      horario,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  function toggleTarefa(id) {
    setTarefas(tarefas.map(t => 
      t.id === id ? { ...t, concluida: !t.concluida } : t
    ));
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(t => t.id !== id));
  }

  return (

    <TaskContext.Provider
      value={{
        tarefas,
        adicionarTarefa,
        toggleTarefa,
        removerTarefa,
      }}
    >
      {children}
    </TaskContext.Provider>

  );
}