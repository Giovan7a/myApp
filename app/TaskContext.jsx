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
    },
  ]);

  function adicionarTarefa(titulo) {

    const novaTarefa = {
      id: Math.random().toString(),
      titulo,
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  return (

    <TaskContext.Provider
      value={{
        tarefas,
        adicionarTarefa,
      }}
    >
      {children}
    </TaskContext.Provider>

  );
}