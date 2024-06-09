import { FC } from 'react'
import { Task } from '../../types'
import TaskCard from '../TaskCard/TaskCard'

export interface TasksListProps {
  tasks: Task[]
  filter?: string
}

const TasksLists: FC<TasksListProps> = ({ tasks, filter }) => {
  const filteredTasks = filter ? tasks.filter((task) => task.title.includes(filter)) : [...tasks]

  return (
    <>
      {filteredTasks.map((todo: Task) => (
        <TaskCard task={todo} key={`task-${todo.id}`} />
      ))}
    </>
  )
}

export default TasksLists
