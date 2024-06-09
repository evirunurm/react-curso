import './App.css'
import Layout from './components/Layout/Layout'
import TasksLists from './components/TasksList/TasksList'
import { Task } from './types'

function App() {
  const todoList: Task[] = [
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

  return (
    <Layout>
      <TasksLists tasks={todoList} />

      <div>Contenido de la aplicación</div>
    </Layout>
  )
}

export default App
