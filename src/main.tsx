import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
// Log
import { Hook, Console, Decode } from 'console-feed'
import { Message } from 'console-feed/lib/definitions/Console';
import { Button } from 'react-bootstrap'
import { Provider } from 'react-redux'
import AppStore from './store'

// router 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App appName="LHF_MES_V0.0.1"></App>,
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
          <div className="console_dev">
            <Console logs={this.state.logs} variant="dark" />
            <Button variant='danger' size='sm' onClick={() => { this.setState({ logs: [] }) }}>Clear()</Button>
          </div>
          <div className="mt-5">
            <RouterProvider router={router}></RouterProvider>
          </div>
        </Provider>
      </React.StrictMode>
    )
  }
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Main></Main>
)
