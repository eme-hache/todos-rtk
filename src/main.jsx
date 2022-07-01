import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import React from 'react'

import { store } from './app/store'
import App from './App'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
