import { useReducer, useState } from 'react'
import './App.css'
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm'
import Layout from './components/Layout/Layout'
import SearchBar from './components/SearchBar/SearchBar'
import TasksLists from './components/TasksList/TasksList'
import { Task, TaskWithoutId } from './types'

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

enum TaskAction {
  Create,
  Update,
}
interface TaskReducerAction {
  command: TaskAction
  task: Task | TaskWithoutId
}

const taskReducer = (state: Task[], action: TaskReducerAction): Task[] => {
  switch (action.command) {
    case TaskAction.Create:
      return [...state, { ...action.task, id: state.length + 1, completed: false }]
    case TaskAction.Update:
      return state.map((task) => (task.id === (action.task as Task).id ? action.task : task) as Task)
    default:
      return state
  }
}

function App() {
  const [filter, setFilter] = useState('')
  const [tasks, dispatch] = useReducer(taskReducer, allTasks)

  const handleTaskCreated = (task: TaskWithoutId) => {
    dispatch({ command: TaskAction.Create, task })
  }

  const handleTaskChanged = (task: Task) => {
    dispatch({ command: TaskAction.Update, task })
  }

  return (
    <Layout>
      <SearchBar onSearch={(value: string) => setFilter(value)} />
      <TasksLists tasks={tasks} filter={filter} onTaskChanged={handleTaskChanged} />
      <CreateTaskForm onTaskCreated={handleTaskCreated} />
    </Layout>
  )
}

export default App
