import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import TasksLists from './components/TasksList/TasksList'
import { Task } from './types'

const allTasks: Task[] = [
  {
    id: 1,
    title: 'Hacer la compra',
    description: 'Comprar pan, leche y huevos',
    completed: false,
  },
  {
    id: 2,
    title: 'Ir al gimnasio',
    description: 'Hacer una hora de pesas',
    completed: true,
  },
  {
    id: 3,
    title: 'Estudiar inglés',
    description: 'Repasar los verbos irregulares',
    completed: false,
  },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(allTasks)

  return (
    <Layout>
      <input
        type="text"
        placeholder="buscar"
        onChange={(e) => {
          setTasks(allTasks.filter((task) => task.title.includes(e.target.value)))
        }}
      />

      <TasksLists tasks={tasks} />

      <div>Contenido de la aplicación</div>
    </Layout>
  )
}

export default App
