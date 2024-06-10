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
    const formData = new FormData(e.currentTarget)
    const task: TaskWithoutId = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      completed: false,
    }
    onTaskCreated(task)
  }

  return (
    <form className={css.form} onSubmit={handleForm}>
      <label id={`${id}-title`}>Título</label>
      <input type="text" aria-describedby={`${id}-title`} name="title" />
      <label id={`${id}-description`}>Descripción</label>
      <textarea aria-describedby={`${id}-description`} name="description" />
      <button type="submit">Crear tarea</button>
    </form>
  )
}

export default CreateTaskForm
