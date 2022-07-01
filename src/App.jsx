import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Form, List } from './components/Todos'
import Layout from './layout/Layout'

export default function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white flex justify-center p-8">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<List />} />
            <Route path="/create-todo" element={<Form />} />
            <Route path="/edit-todo/:id" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
