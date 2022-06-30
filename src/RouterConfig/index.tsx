import React from 'react'
import { Navigate } from 'react-router-dom'
import { RouterType } from './route.type'
import { DatabaseOutlined, HomeOutlined } from '@ant-design/icons'
import SuspenseComponent from './suspenseComponent'
const Index = React.lazy(() => import('../components/Index/index'))
const LayoutIndex = React.lazy(() => import('../layout/index'))
const Home = React.lazy(() => import('../components/Home'))
const About = React.lazy(() => import('../components/About'))
const NotFound = React.lazy(() => import('../components/Eorr/notFound'))
const Order = React.lazy(() => import('../components/Order'))

const Routers: Array<RouterType> = [
  {
    name: '项目目录',
    path: '/',
    element: SuspenseComponent(<LayoutIndex/>),
    children: [{
      name: '重定向首页',
      path: '',
      element: <Navigate to={'/home/center'} />
    },{
      name: '主页',
      icon: <HomeOutlined />,
      path: '/home',
      element: SuspenseComponent(<Index/>),
      children: [
        {
          name: '重定向首页',
          path: '',
          element: <Navigate to={'/home/center'} />
        },
        {
          name: '个人中心',
          path: '/home/center',
          element: SuspenseComponent(<Home />)
        },
        {
          name: '关于我们',
          path: '/home/about',
          element: SuspenseComponent(<About />)
        }
      ]
    },{
      name: '菜单权限',
      path: '/order',
      icon: <DatabaseOutlined />,
      element: SuspenseComponent(<Order />),
    }]
  },
  {
    name: '错误页面',
    path: '*',
    element: SuspenseComponent(<NotFound />)
  }
]

export default Routers
