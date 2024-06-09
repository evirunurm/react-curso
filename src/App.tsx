import './App.css'
import Layout from './components/Layout/Layout'
import TaskCard from './components/TaskCard/TaskCard'
import { Task } from './types'

function App() {
  const todo: Task = {
    id: 1,
    title: 'Hacer la compra',
    description: 'Comprar pan, leche y huevos',
    completed: false,
  }

  return (
    <Layout>
      <TaskCard task={todo} />
      <div>Contenido de la aplicación</div>
    </Layout>
  )
}

export default App
