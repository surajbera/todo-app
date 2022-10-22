import { TodoItem } from '../todo-item/TodoItem'

/* styles */
import './TodoList.css'

export const TodoList = ({ todos }) => {
	return (
		<div>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo.todoText}
				/>
			))}
		</div>
	)
}
