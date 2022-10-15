import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/Signup'



var router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: Login()
  },
  {
    path: '/reg',
    element: SignUp()
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
