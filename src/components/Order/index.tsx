import React from 'react'
import Routers from '../../RouterConfig/index'
import getMenu from '../../utils/getMenu'
import { Tree } from 'antd'

const items = getMenu(Routers[0].children, true)

const Order:React.FC = () => {
  return <div>
    <Tree checkable treeData={items} defaultExpandAll />
  </div>
}

export default Order