import {
  createContext,
  useState,
} from 'react';

export const TaskContext = createContext(null);

export function TaskProvider({ children }) {

  const [tarefas, setTarefas] = useState([
    {
      id: '1',
      titulo: 'Estudar React Native',
      descricao: 'Revisar componentes e navegação.',
      data: '2026-05-12',
      horario: '14:00',
      concluida: false,
    },
  ]);

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

  return (

    <TaskContext.Provider
      value={{
        tarefas,
        adicionarTarefa,
        toggleTarefa,
      }}
    >
      {children}
    </TaskContext.Provider>

  );
}