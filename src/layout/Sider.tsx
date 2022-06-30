import React from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import Routers from '../RouterConfig'
import { RouterType } from '../RouterConfig/route.type'
import findRoute from '../utils/findRoute'
import getMenu from '../utils/getMenu'


const Sider = () => {
  // Routers.pop()  // 其他类型不在菜单中显示
  const items = getMenu(Routers[0].children, false)
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
