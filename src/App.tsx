import './App.css'
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm'
import Layout from './components/Layout/Layout'
import SearchBar from './components/SearchBar/SearchBar'
import { SearchBarContextProvider } from './components/SearchBar/SearchBarContext'
import TasksLists from './components/TasksList/TasksList'

function App() {
  return (
    <Layout>
      <SearchBarContextProvider>
        <>
          <SearchBar />
          <TasksLists />
        </>
      </SearchBarContextProvider>
      <CreateTaskForm />
    </Layout>
  )
}

export default App
