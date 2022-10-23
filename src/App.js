import { useState, useEffect } from 'react'
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

	useEffect(() => {
		console.log(todos)
	}, [todos])

	const addTodos = newTodoItem => {
		if (todoToBeEdited) {
			const newTodos = [...todos]
			for (const key in newTodos) {
				if (newTodos[key].id === newTodoItem.id) {
					newTodos[key].todoText = newTodoItem.todoText
				}
			}
			setTodos(newTodos)
			return
		}
		const todoExists = todos.find(todo => todo.todoText.toLowerCase() === newTodoItem.todoText.toLowerCase())
		if (!todoExists) setTodos(prevTodos => [newTodoItem, ...prevTodos])
		if (todoExists) toast.error('Todo already added')
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
