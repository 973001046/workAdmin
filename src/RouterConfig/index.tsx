import React from 'react'
import { Navigate } from 'react-router-dom'
import { RouterType } from './route.type'
import Home from '../components/Home'
import About from '../components/About'
import Index from '../components/Index/index'
import NotFound from '../components/Eorr/notFound'
const Routers: Array<RouterType> = [
  {
    name: '主页',
    path: '/',
    element: <Index />,
    children: [
      {
        name: '重定向首页',
        path: '',
        element: <Navigate to={'/home'} />
      },
      {
        name: '个人中心',
        path: '/home',
        element: <Home />,
        children: [
          {
            name: '个人中心的个人中心',
            path: '/home/about',
            element: <Home />,
            children: [
              {
                name: '个人中心的个人中心的恶的的',
                path: '/home/about/about',
                element: <Home />
              }
            ]
          }
        ]
      },
      {
        name: '关于我们',
        path: '/about',
        element: <About />
      }
    ]
  },
  {
    name: '错误页面',
    path: '*',
    element: <NotFound />
  }
]

export default Routers
