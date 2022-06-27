import { RouterType } from '../RouterConfig/route.type'
const findRoute = (router: Array<RouterType>, pathname: string) => {
  const results: Array<RouterType> = []
  router.some((item) => {
    if (item.path == pathname) {
      results.push({
        path: item.path,
        name: item.name
      })
      return true
    }
    if (item.children) {
      const children = findRoute(item.children, pathname)
      children.length &&
        results.push(
          {
            path: item.path,
            name: item.name
          },
          ...children
        )
      return children.length
    }
  })
  return results
}

export default findRoute
