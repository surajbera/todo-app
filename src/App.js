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
	const [todoToBeEdited, setTodoToBeEdited] = useState(null)

	const addTodos = newTodoItem => {
		const index = todos.findIndex(item => item.todoText.toLowerCase() === newTodoItem.todoText.toLowerCase())
		if (index === -1) {
			setTodos(prevTodos => [newTodoItem, ...prevTodos])
		} else {
			toast.error('Todo already added')
		}
	}

	const todoToEdit = todo => {
		setTodoToBeEdited(todo)
	}

	const todoToDelete = todo => {
		const updatedTodos = todos.filter(todoItem => todoItem.id !== todo.id)
		setTodos(updatedTodos)
	}

	return (
		<div className='App flex-wrapper'>
			<div className='todo-wrapper'>
				<TodoForm
					addTodos={addTodos}
					todoToBeEdited={todoToBeEdited}
				/>
				<TodoList
					todos={todos}
					todoToEdit={todoToEdit}
					todoToDelete={todoToDelete}
				/>
				<ToastContainer
					autoClose={1300}
					closeOnClick
					theme='dark'
					position='bottom-right'
				/>
			</div>
		</div>
	)
}

export default App
