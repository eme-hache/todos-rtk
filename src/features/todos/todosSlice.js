import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Mutable state
      state.push(action.payload)

      // Immutable state
      // state = state.concat(action.payload)
    },
    updateTodo: (state, action) => {
      // Mutable state
      const { id, title, description, completed } = action.payload

      const todoToUpdate = state.find(todo => todo.id === id)

      if (todoToUpdate) {
        todoToUpdate.title = title
        todoToUpdate.description = description
        todoToUpdate.completed = completed
      }

      // Immutable state
      /* state = state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
            description,
            completed,
          }
        }
        return todo
      }) */
    },
    deleteTodo: (state, action) => {
      // Mutable state
      const index = state.findIndex(todo => todo.id === action.payload)

      if (index !== -1) {
        state.splice(index, 1)
      }

      // Immutable state
      /* state = state.filter(todo => todo.id !== action.payload) */
    },
  },
})

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer
