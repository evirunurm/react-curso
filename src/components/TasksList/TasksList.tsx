import { FC, useContext } from 'react'
import useTaskUtils from '../../hooks/useTasksUtils'
import { Task } from '../../types'
import TaskCard from '../TaskCard/TaskCard'
import { TasksContext } from '../TasksContext/TasksContext'

export interface TasksListProps {
  filter?: string
}

const TasksLists: FC<TasksListProps> = ({ filter }) => {
  const { tasks } = useContext(TasksContext)
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
        <TaskCard task={todo} key={`task-${todo.id}`} />
      ))}
    </>
  )
}

export default TasksLists
