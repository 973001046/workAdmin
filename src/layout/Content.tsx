import React from 'react'
import { Layout } from 'antd'
import { useRoutes } from 'react-router-dom'
import Routers from '../RouterConfig'

const Content = () => {
  const RouterElement = useRoutes(Routers)
  return (
    <Layout.Content className="content-layout">{RouterElement}</Layout.Content>
  )
}

export default Content
