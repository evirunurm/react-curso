import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import SearchBar from './components/SearchBar/SearchBar'
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
  const [filter, setFilter] = useState('')

  return (
    <Layout>
      <SearchBar onSearch={(value: string) => setFilter(value)} />
      <TasksLists tasks={allTasks} filter={filter} />
    </Layout>
  )
}

export default App
