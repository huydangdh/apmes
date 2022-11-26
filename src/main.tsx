import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

{/* The following line can be included in your src/index.js or App.js file */ }

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BigStore } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={BigStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)
