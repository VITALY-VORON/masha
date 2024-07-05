import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Photo from './pages/photo'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
