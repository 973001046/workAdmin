import React from 'react'
import { createRoot } from 'react-dom/client'
import './src/assets/css/base.less'
import App from './src/app'
const root = createRoot(document.getElementById('app'))
root.render(<App />)