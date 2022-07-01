import { useLocation, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const todos = useSelector(state => state.todos)
  const location = useLocation()

  return (
    <div className="w-full lg:w-4/6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-20 gap-4">
        <h1 className="font-bold text-4xl">
          {location.pathname === '/' ? (
            'Todos Count: ' + todos.length
          ) : location.pathname === '/create-todo' ? (
            'Create Todo'
          ) : (
            'Edit Todo'
          )}
        </h1>

        <Link
          className="bg-indigo-600 px-2 py-2 rounded text-sm h-fit w-full md:w-28 text-center"
          to={`${location.pathname === '/' ? '/create-todo' : '/'}`}
        >
          {location.pathname === '/' ? 'Create Todo' : 'All Todos'}
        </Link>
      </header>

      <Outlet />
    </div>
  )
}
