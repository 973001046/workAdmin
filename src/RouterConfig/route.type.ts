export interface RouterType {
  name: string
  path: string
  element?: JSX.Element
  children?: Array<RouterType>
}
