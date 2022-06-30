import React from 'react'
import { Breadcrumb } from 'antd'
import { useLocation, NavLink } from 'react-router-dom'
import { RouterType } from '../RouterConfig/route.type'
import Routers from '../RouterConfig'
import findRoute from '../utils/findRoute'

const Breadcrumbs = () => {
  const { pathname } = useLocation()
  const breadcrumbLists: Array<RouterType> = findRoute(Routers[0].children, pathname)

  if (breadcrumbLists.length) {
    return (
      <Breadcrumb className="breadcrumb-layout add-shadow" separator=">">
        {breadcrumbLists.map((item) => {
          if (item.path == pathname) {
            return (
              <Breadcrumb.Item key={item.path}>{item.name}</Breadcrumb.Item>
            )
          } else {
            return (
              <Breadcrumb.Item key={item.path}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </Breadcrumb.Item>
            )
          }
        })}
      </Breadcrumb>
    )
  }
  return <></>
}

export default Breadcrumbs
