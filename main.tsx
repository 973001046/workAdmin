import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/index'
const container = document.getElementById('app')
const root = createRoot(container)
const a=1
root.render(<App/>)