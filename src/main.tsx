import React, {useContext} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
// Log
import { Hook, Console, Decode } from 'console-feed'
import { Button } from 'react-bootstrap'
import { Provider } from 'react-redux'
import AppStore from './store'
import {AuthContext, AuthProvider} from './provider/AuthProvider'

// router 
const PrivateRoute: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.refreshToken)
  if(currentUser)
    return <Navigate to="login" replace></Navigate>
  return children
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute><App appName="LHF_MES_V0.0.1"></App></PrivateRoute>,
    children: [
      
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/main',
    element: <div>MAIN_APP</div>
  }
])

class Main extends React.Component<{}, { logs: any[] }> {
  constructor(props: any) {
    super(props)
    this.state = {
      logs: []
    }
  }

  componentDidMount() {
    Hook(window.console, (log) => {
      this.setState(({ logs }) => ({ logs: [...logs, log] }))
    }, false)

    console.log(`[++++]`)
  }

  render(): React.ReactNode {
    return (
      <React.StrictMode>
        <Provider store={AppStore}>
          <AuthProvider>
          <div className="console_dev">
            <Console logs={this.state.logs} variant="dark" />
            <Button variant='danger' size='sm' onClick={() => { this.setState({ logs: [] }) }}>Clear()</Button>
          </div>
          <div className="mt-5">
            <RouterProvider router={router}></RouterProvider>
          </div>
            </AuthProvider>
        </Provider>
      </React.StrictMode>
    )
  }
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Main></Main>
)
