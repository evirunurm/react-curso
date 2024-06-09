import { FC } from 'react'
import { Task } from '../../types'
import css from './TaskCard.module.css'

export interface TaskCardProps {
  task: Task
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div className={css.card}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.completed ? 'Completada' : 'Pendiente'}</p>
    </div>
  )
}

export default TaskCard
