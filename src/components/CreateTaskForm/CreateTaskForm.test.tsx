import { render } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { TasksContext } from '../TasksContext/TasksContext'
import CreateTaskForm from './CreateTaskForm'

describe('CreateTaskForm', () => {
  let user: UserEvent
  beforeEach(() => {
    user = userEvent.setup()
  })
  afterEach(() => {})
  beforeAll(() => {})
  afterAll(() => {})

  test('renderiza el componente', () => {
    render(<CreateTaskForm />)
  })

  test('crea una tarea', async () => {
    // 1 - preparo el contexto del test
    const addTaskSpy = vitest.fn()
    const { getByRole } = render(
      <TasksContext.Provider value={{ tasks: [], addTask: addTaskSpy, updateTask: () => {} }}>
        <CreateTaskForm />
      </TasksContext.Provider>,
    )

    // 2- Actúo
    await user.type(getByRole('textbox', { name: 'Título' }), 'Task 1')
    await user.type(getByRole('textbox', { name: 'Descripción' }), 'Description')
    await user.click(getByRole('button'))

    // 3- compruebo resultado
    expect(addTaskSpy).toHaveBeenCalledWith({
      title: 'Task 1',
      description: 'Description',
      completed: false,
    })
  })
})
