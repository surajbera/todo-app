import { useState } from 'react'
import { v4 } from 'uuid'

/* styles */
import './TodoForm.css'

export const TodoForm = () => {
	const [todoVal, setTodoVal] = useState('')

	const handleSubmitEvent = evt => {
		evt.preventDefault()
		const toDo = {
			id: v4(),
			todoText: todoVal
		}
	}

	const handleInputChange = evt => {
		const { value } = evt.target
		setTodoVal(value)
	}

	return (
		<div className='todo-form-wrapper'>
			<form
				className='todo-form'
				onSubmit={handleSubmitEvent}
			>
				<input
					type='text'
					className='todo-input'
					onChange={handleInputChange}
					placeholder='Enter Todo Here...'
				/>
				<input
					className='add-todo-btn'
					type='submit'
					value='Add Todo'
				/>
			</form>
		</div>
	)
}
