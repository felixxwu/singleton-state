import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App.tsx'
import React from 'react'
import { setup } from 'goober'

setup(React.createElement)

createRoot(document.getElementById('root')!).render(<App />)
