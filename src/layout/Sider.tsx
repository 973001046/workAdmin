import React from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import Routers from '../RouterConfig'
import { RouterType } from '../RouterConfig/route.type'
import findRoute from '../utils/findRoute'
interface MenuItemType {
  label: string
  key: string
  children?: Array<MenuItemType>
}

const getMenu = (routes: Array<RouterType>): Array<MenuItemType> => {
  const menus: Array<MenuItemType> = []
  routes.forEach((item) => {
    let route: MenuItemType = null
    if (item.path) {
      route = {
        label: item.name,
        key: item.path
      }
    }
    if (item.children) {
      route.children = getMenu(item.children)
    }
    menus.push(route)
  })
  return menus
}
const items = getMenu(Routers)

const Sider = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const breadcrumbLists: Array<RouterType> = findRoute(Routers, pathname)
  const openKey: Array<string> = []
  breadcrumbLists.forEach((item) => {
    openKey.push(item.path)
  })

  return (
    <Layout.Sider className="add-shadow">
      <Menu
        mode="inline"
        items={items}
        defaultOpenKeys={openKey}
        selectedKeys={openKey.length > 0 ? [openKey[openKey.length - 1]] : []}
        onClick={(e) => {
          navigate(e.key)
        }}
      />
    </Layout.Sider>
  )
}

export default Sider
