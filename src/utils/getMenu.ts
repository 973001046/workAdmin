import { RouterType, MenuItemType } from '../RouterConfig/route.type'
const getMenu = (routes: Array<RouterType>, flag: boolean): Array<MenuItemType> => {
  const menus: Array<MenuItemType> = []
  routes.forEach((item) => {
    if (item.path) {
      let route: MenuItemType = null
      if (flag) { // 选在tree节点
        route = {
          title: item.name,
          key: item.path
        }
      } else {
        route = {
          label: item.name,
          key: item.path,
          icon: item?.icon
        }
      }
      if (item.children) {
        route.children = getMenu(item.children, flag)
      }
      menus.push(route)
    }
  })
  return menus
}
export default getMenu