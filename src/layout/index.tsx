import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Slider from './Sider'
import Content from './Content'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs'

const Index: React.FC = () => {
  return <Layout>
          <Header />
          <Layout>
            <Slider />
            <Layout>
              <Breadcrumbs />
              <Content/>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
}
export default Index
