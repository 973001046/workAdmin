import React from 'react'
import { Result } from 'antd'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='content-center'>
      <Result
        status="404"
        title="404"
        subTitle="页面不存在或您暂无权限访问！"
        extra={<Link to="">返回</Link>}
      />
    </div>
  )
}

export default NotFound
