import { render, screen } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { TasksContext } from '../TasksContext/TasksContext'
import TaskCard from './TaskCard'

describe('TaskCard', () => {
  let user: UserEvent
  beforeEach(() => {
    user = userEvent.setup()
  })
  afterEach(() => {})
  beforeAll(() => {})
  afterAll(() => {})

  test('renderiza el componente', () => {
    render(<TaskCard task={{ id: 1, title: 'Task 1', description: '', completed: false }} />)
  })

  it('muestra el título de la tarea', () => {
    render(<TaskCard task={{ id: 1, title: 'Task 1', description: '', completed: false }} />)
    expect(screen.getByText('Task 1')).toBeInTheDocument()
  })

  it('muestra la descripción de la tarea', () => {
    const { getByText } = render(
      <TaskCard task={{ id: 1, title: 'Task 1', description: 'Description', completed: false }} />,
    )
    expect(getByText('Description')).toBeInTheDocument()
  })

  it('muestra la tarea como completada', () => {
    const { getByRole } = render(
      <TaskCard task={{ id: 1, title: 'Task 1', description: 'Description', completed: true }} />,
    )
    expect(getByRole('checkbox')).toBeChecked()
  })

  it('muestra la tarea como no completada', () => {
    const { getByRole } = render(
      <TaskCard task={{ id: 1, title: 'Task 1', description: 'Description', completed: false }} />,
    )
    expect(getByRole('checkbox')).not.toBeChecked()
  })

  it('marca la tarea como completada', async () => {
    // 1 - preparo el contexto del test
    const task = { id: 1, title: 'Task 1', description: 'Description', completed: false }
    const updateSpy = vitest.fn()
    const { getByRole } = render(
      <TasksContext.Provider value={{ tasks: [], addTask: () => {}, updateTask: updateSpy }}>
        <TaskCard task={task} />,
      </TasksContext.Provider>,
    )
    // 2- Actúo
    await user.click(getByRole('checkbox'))

    // 3- compruebo resultado
    expect(updateSpy).toHaveBeenCalledWith({ ...task, completed: !task.completed })
  })
})
