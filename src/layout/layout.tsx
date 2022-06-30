import React from 'react'
import { useRoutes } from 'react-router-dom'
import Routers from '../RouterConfig/index'
// import { Outlet } from 'react-router-dom'
const Index: React.FC = () => {
  const RouterElement = useRoutes(Routers)
  return (
    <div style={{height: '100vh'}}>
      {RouterElement}
    </div>
  )
}
export default Index