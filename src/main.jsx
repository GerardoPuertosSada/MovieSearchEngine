import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ShowsState from './context/shows/ShowsState'
import AlertState from './context/alerts/AlertState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShowsState>
    <AlertState>
      <App />
    </AlertState>
  </ShowsState>
  , document.getElementById('root')
)
