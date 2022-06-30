// 路由类型
export interface RouterType {
  name: string
  path: string
  icon?: React.ReactNode
  element?: JSX.Element
  children?: RouterType[]
}

// 导航类型
export interface MenuItemType {
  label?: string
  title?: string
  key: string
  icon?: React.ReactNode
  children?: MenuItemType[]
}
