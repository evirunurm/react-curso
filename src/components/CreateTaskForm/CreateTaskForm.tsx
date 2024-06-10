import { FC, useId } from 'react'
import { TaskWithoutId } from '../../types'
import css from './CreateTaskForm.module.css'

export interface CreateTaskFormProps {
  onTaskCreated: (task: TaskWithoutId) => void
}

const CreateTaskForm: FC<CreateTaskFormProps> = ({ onTaskCreated }) => {
  const id = useId()

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const task: TaskWithoutId = {
      title: e.currentTarget[0].value,
      description: e.currentTarget[1].value,
      completed: false,
    }
    onTaskCreated(task)
  }

  return (
    <form className={css.form} onSubmit={handleForm}>
      <label id={`${id}-title`}>Título</label>
      <input type="text" aria-describedby={`${id}-title`} />
      <label id={`${id}-description`}>Descripción</label>
      <textarea aria-describedby={`${id}-description`} />
      <button type="submit">Crear tarea</button>
    </form>
  )
}

export default CreateTaskForm
