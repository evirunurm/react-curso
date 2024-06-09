import './App.css'
import Layout from './components/Layout/Layout'
import TaskCard from './components/TaskCard/TaskCard'
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
      {todoList.map((todo) => (
        <TaskCard task={todo} key={`task-${todo.id}`} />
      ))}
      <div>Contenido de la aplicación</div>
    </Layout>
  )
}

export default App
