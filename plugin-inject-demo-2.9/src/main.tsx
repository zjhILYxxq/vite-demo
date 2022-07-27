import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { func1 } from './utils/util.1';

func1();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)
