import { FC } from 'react'
import { Task } from '../../types'

export interface TaskCardProps {
  task: Task
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.completed ? 'Completada' : 'Pendiente'}</p>
    </div>
  )
}

export default TaskCard
