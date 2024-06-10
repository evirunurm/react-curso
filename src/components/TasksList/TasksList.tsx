import { FC, useContext } from 'react'
import useTaskUtils from '../../hooks/useTasksUtils'
import { Task } from '../../types'
import { SearchBarContext } from '../SearchBar/SearchBarContext'
import TaskCard from '../TaskCard/TaskCard'
import { TasksContext } from '../TasksContext/TasksContext'

export interface TasksListProps {}

const TasksLists: FC<TasksListProps> = () => {
  const { filter } = useContext(SearchBarContext)
  const { tasks } = useContext(TasksContext)
  const { filterTasks } = useTaskUtils()
  const filteredTasks = filterTasks(tasks, filter)

  return (
    <>
      {filter.searchTerm && (
        <p>
          <small>
            {filteredTasks.length} encontradas, filtrando por la palabra: {filter.searchTerm}
          </small>
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
