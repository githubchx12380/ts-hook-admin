import React, { useState } from 'react'
import styles from './index.module.scss'
import { Layout, Menu, Breadcrumb } from 'antd';
import router from '../router'

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LoyoutDefault:React.FC = () => {
    const [collapsed,setCollapsed] = useState(false)
    function onCollapse() {
        setCollapsed(!collapsed)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className={styles.logo} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {
              router.map((item,index) => !item.children ? <Menu.Item key={index} >
                </Menu.Item> :  <SubMenu key={index} icon={<UserOutlined />}  title={item.title}>
                  {
                    item.children.map((itemRoute,indexRoute) => <Menu.Item key={indexRoute}>{itemRoute.title}</Menu.Item>)
                  }
              </SubMenu>)
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={styles.site_layout_background} style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.site_layout_background} style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}


export default LoyoutDefault