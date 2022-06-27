import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import Header from './layout/Header'
import Slider from './layout/Sider'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Breadcrumbs from './layout/Breadcrumbs'

const APP = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Layout>
          <Slider />
          <Layout>
            <Breadcrumbs />
            <Content />
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}
export default APP
