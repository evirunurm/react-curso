import { Filter } from '../components/SearchBar/SearchBarContext'
import { Task } from '../types'

const filterTasks = (tasks: Task[], filter?: Filter): Task[] => {
  let result = [...tasks]
  if (filter?.searchTerm) {
    result = result.filter((task) => task.title.includes(filter.searchTerm))
  }
  if (filter?.onlyCompleted) {
    result = result.filter((task) => !task.completed)
  }
  return result
}

const useTaskUtils = () => {
  return {
    filterTasks,
  }
}

export default useTaskUtils
