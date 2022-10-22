import { TodoForm } from './components/todo-form/TodoForm'
import { TodoList } from './components/todo-list/TodoList'

/* styles */
import './style.css'

function App() {
	return (
		<div className='App'>
			<TodoForm />
			<TodoList />
		</div>
	)
}

export default App
