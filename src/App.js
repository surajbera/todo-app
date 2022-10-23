import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

/* components */
import { TodoForm } from './components/todo-form/TodoForm'
import { TodoList } from './components/todo-list/TodoList'

function App() {
	const [todos, setTodos] = useState([])
	const [todoToBeEdited, setTodoToBeEdited] = useState(null)

	useEffect(() => {
		const savedTodos = JSON.parse(localStorage.getItem('todos'))
		if (savedTodos && savedTodos.length) setTodos(savedTodos)
	}, [])

	const addTodos = newTodoItem => {
		if (todoToBeEdited) {
			const newTodos = [...todos]
			newTodos.forEach(el => {
				if (el.id === newTodoItem.id) {
					el.todoText = newTodoItem.todoText
				}
			})
			setTodos(newTodos)
			setTodoToBeEdited(null)
			toast.info('Todo Edited')
			localStorage.setItem('todos', JSON.stringify(newTodos))
			return
		}

		const todoExists = todos.find(todo => todo.todoText.toLowerCase() === newTodoItem.todoText.toLowerCase())
		if (!todoExists) {
			const updatedTodos = [newTodoItem, ...todos]
			setTodos(updatedTodos)
			toast.success('Todo Added')
			localStorage.setItem('todos', JSON.stringify(updatedTodos))
		}
		if (todoExists) toast.error('Todo already added')
	}

	const todoToEdit = todo => {
		setTodoToBeEdited(todo)
	}

	const todoToDelete = todo => {
		const updatedTodos = todos.filter(todoItem => todoItem.id !== todo.id)
		setTodos(updatedTodos)
		localStorage.setItem('todos', JSON.stringify(updatedTodos))
		if (todoToBeEdited) setTodoToBeEdited(null)
		toast.success('Todo Deleted')
	}

	return (
		<div className='App flex-wrapper'>
			<h1 className='app-heading'>Todo App</h1>
			<div className='todo-wrapper'>
				<TodoForm
					addTodos={addTodos}
					todoToBeEdited={todoToBeEdited}
				/>
				{todos && (
					<TodoList
						todos={todos}
						todoToEdit={todoToEdit}
						todoToDelete={todoToDelete}
					/>
				)}
				{todos.length === 0 && <h2 className='secondary-heading'>Add some todos!!</h2>}
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
