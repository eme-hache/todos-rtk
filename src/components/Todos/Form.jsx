import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { v4 } from 'uuid'

import { addTodo, updateTodo } from '../../features/todos/todosSlice'

export default function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const [todo, setTodo] = useState({ title: '', description: '', completed: false })
  const todos = useSelector(state => state.todos)

  const handleChange = evt => {
    setTodo({ ...todo, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()

    if (Object.values(todo).includes('')) {
      return alert('Please fill in all fields')
    }

    if (params.id) {
      dispatch(updateTodo(todo))
    } else {
      dispatch(addTodo({ ...todo, id: v4() }))
    }

    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      setTodo(todos.find(todo => todo.id.toString() === params.id))
    }
  }, [params.id, todos])

  return (
    <form
      className="bg-zinc-700 rounded p-4 h-fit w-full md:max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <label className="block font-bold mb-2" htmlFor="title">
        Todo:
      </label>
      <input
        className="w-full p-2 rounded bg-zinc-500 mb-2"
        id="title"
        type="text"
        name="title"
        placeholder="Title"
        value={todo?.title}
        onChange={handleChange}
      />

      <label className="block font-bold mb-2" htmlFor="description">
        Description:
      </label>
      <textarea
        className="w-full p-2 rounded bg-zinc-500 mb-2"
        id="description"
        name="description"
        placeholder="Description"
        value={todo?.description}
        onChange={handleChange}
      />

      <button className="bg-indigo-600 p-2 rounded mt-5 w-full text-center">
        Save
      </button>
    </form>
  )
}
