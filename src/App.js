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
			setTodos(prevTodos => [newTodoItem, ...prevTodos])
		} else {
			toast.error('Todo already added')
		}
	}

	const todoToBeEdited = todo => {
		console.log(todo)
	}

	return (
		<div className='App flex-wrapper'>
			<TodoForm addTodos={addTodos} />
			<TodoList
				todos={todos}
				todoToBeEdited={todoToBeEdited}
			/>
			<ToastContainer />
		</div>
	)
}

export default App
