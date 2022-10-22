import { useState } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

/* components */
import { TodoForm } from './components/todo-form/TodoForm'
import { TodoList } from './components/todo-list/TodoList'

/* styles */
import 'react-toastify/dist/ReactToastify.css'
import './style.css'

function App() {
	const [todos, setTodos] = useState([])

	const addTodos = newTodoItem => {
		const index = todos.findIndex(item => item.todoText.toLowerCase() === newTodoItem.todoText.toLowerCase())
		if (index === -1) {
			setTodos(prevTodos => [...prevTodos, newTodoItem])
		} else {
			toast.error('Todo already added')
		}
	}

	return (
		<div className='App flex-wrapper'>
			<TodoForm addTodos={addTodos} />
			<TodoList todos={todos} />
			<ToastContainer />
		</div>
	)
}

export default App
