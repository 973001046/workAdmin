import React, {Suspense} from 'react'
import { Spin } from 'antd'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SuspenseComponent = (component: React.ReactNode) => {
  return <Suspense fallback={
          <div className="component-spin" >
            <Spin tip="Loading..." />
          </div>
        }>
          {component}
        </Suspense>
}

export default SuspenseComponent