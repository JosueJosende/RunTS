import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { AptabaseProvider } from '@aptabase/react';

// console.log(import.meta.env)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AptabaseProvider appKey={import.meta.env.VITE_APTABASE_KEY}>
      <App />
    </AptabaseProvider>
  </React.StrictMode>,
)