import { FC } from 'react'
import useTaskUtils from '../../hooks/useTasksUtils'
import { Task } from '../../types'
import TaskCard from '../TaskCard/TaskCard'

export interface TasksListProps {
  tasks: Task[]
  filter?: string
  onTaskChanged: (task: Task) => void
}

const TasksLists: FC<TasksListProps> = ({ tasks, filter, onTaskChanged }) => {
  const { filterTasks } = useTaskUtils()
  const filteredTasks = filterTasks(tasks, filter)

  return (
    <>
      {filter && (
        <p>
          {filteredTasks.length} encontradas, filtrando por la palabra: {filter}
        </p>
      )}
      {!filter && <p>sin filtro</p>}
      {filteredTasks.map((todo: Task) => (
        <TaskCard task={todo} key={`task-${todo.id}`} onTaskChanged={onTaskChanged} />
      ))}
    </>
  )
}

export default TasksLists
