import { TodoItem } from '../todo-item/TodoItem'

/* styles */
import './TodoList.css'

export const TodoList = ({ todos }) => {
	return (
		<ul className='todo-container'>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo.todoText}
				/>
			))}
		</ul>
	)
}
