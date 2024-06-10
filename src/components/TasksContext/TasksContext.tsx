import { FC, PropsWithChildren, createContext, useReducer } from 'react'
import { Task, TaskWithoutId } from '../../types'

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

interface TaskContextType {
  tasks: Task[]
  addTask: (task: TaskWithoutId) => void
  updateTask: (task: Task) => void
}

export const TasksContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
})

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

const TaskContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, allTasks)

  const addTask = (task: TaskWithoutId) => dispatch({ command: TaskAction.Create, task })
  const updateTask = (task: Task) => dispatch({ command: TaskAction.Update, task })

  return <TasksContext.Provider value={{ tasks, addTask, updateTask }}>{children}</TasksContext.Provider>
}

export default TaskContextProvider
