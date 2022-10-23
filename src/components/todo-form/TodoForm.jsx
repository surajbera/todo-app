import { useState, useEffect, useRef } from 'react'
import { v4 } from 'uuid'

/* styles */
import './TodoForm.css'

export const TodoForm = ({ addTodos, todoToBeEdited }) => {
	const [todoVal, setTodoVal] = useState('')
	const [editingState, setEditingState] = useState(false)
	const inputRef = useRef()

	useEffect(() => {
		if (todoToBeEdited) {
			setTodoVal(todoToBeEdited.todoText)
			inputRef.current.focus()
			setEditingState(true)
		}
	}, [todoToBeEdited])

	const handleSubmitEvent = evt => {
		evt.preventDefault()
		const todo = {
			id: editingState ? todoToBeEdited.id : v4(),
			todoText: todoVal.trim()
		}
		setTodoVal('')
		if (editingState) setEditingState(false)
		addTodos(todo)
	}

	const handleInputChange = evt => {
		const { value } = evt.target
		setTodoVal(value)
	}

	return (
		<div className='todo-form-wrapper'>
			<form
				className='todo-form flex-wrapper'
				onSubmit={handleSubmitEvent}
			>
				<input
					type='text'
					className='todo-input'
					onChange={handleInputChange}
					placeholder='Enter Todo Here...'
					value={todoVal}
					autoFocus
					ref={inputRef}
					required
				/>
				<input
					className='add-todo-btn'
					type='submit'
					value={editingState ? 'Edit Todo' : 'Add Todo'}
				/>
			</form>
		</div>
	)
}
