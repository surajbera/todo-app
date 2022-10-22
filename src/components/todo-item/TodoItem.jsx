import { BiEditAlt } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'

/* styles */
import './TodoItem.css'

export const TodoItem = ({ todo }) => {
	return (
		<li className='todo-item flex-wrapper'>
			<p className='todo-text'>{todo}</p>
			<div className='todo-actions-wrap flex-wrapper'>
				<span className='todo-edit-icon todo-icon flex-wrapper'>
					<BiEditAlt />
				</span>
				<span className='todo-delete-icon todo-icon flex-wrapper'>
					<BiTrash />
				</span>
			</div>
		</li>
	)
}
