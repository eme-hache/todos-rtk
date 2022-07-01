import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteTodo, updateTodo } from '../../features/todos/todosSlice'

export default function List() {
  const dispatch = useDispatch()

  const todos = useSelector(state => state.todos)

  const handleDelete = id => {
    dispatch(deleteTodo(id))
  }

  const handleUpdate = (evt, todo) => {
    dispatch(updateTodo({ ...todo, completed: evt.target.checked }))
  }

  if (todos.length === 0) {
    return <p className="text-center">No todos found...</p>
  }

  return (
    <ul className="grid grid-cols-1 gap-4">
      {todos.map(todo => (
        <li key={todo.id} className="bg-neutral-700 rounded p-5 flex gap-x-6">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={evt => handleUpdate(evt, todo)}
          />

          <div className="w-full">
            <header className="flex justify-between">
              <h3>{todo.title}</h3>

              <div className="flex gap-x-2">
                <Link
                  className="bg-zinc-500 px-2 py-2 text-xs rounded w-20 h-fit text-center"
                  to={`/edit-todo/${todo.id}`}
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 px-2 py-2 text-xs rounded w-20 h-fit text-center"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </header>

            <p>{todo.description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
