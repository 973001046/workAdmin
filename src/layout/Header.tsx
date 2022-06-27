import React from 'react'
import { Layout, Avatar, Col, Row } from 'antd'

const Header = () => {
  return (
    <Layout.Header className="header-layout">
      <Row>
        <Col flex="auto" className="title-col">
          ADMIN
        </Col>
        <Col flex="100px">
          <div className="avater-col">
            <Avatar size="default">{'User'.slice(0, 1)}</Avatar>
          </div>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
