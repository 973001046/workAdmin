import React from 'react'
import { Outlet } from 'react-router-dom'
const Index: React.FC = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
export default Index
