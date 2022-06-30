import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterLayout from './layout/layout'



const APP = () => {
  return (
    <BrowserRouter>
      <RouterLayout/>
    </BrowserRouter>
  )
}
export default APP
