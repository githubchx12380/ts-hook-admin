import React, { useState } from 'react'
import styles from './index.module.scss'
import { withRouter,Route } from 'react-router-dom'
import Category from '../pages/category'
import User from '../pages/user'
import { Layout, Menu, Breadcrumb } from 'antd';
import router from '../router'

import {
  UserOutlined,
} from '@ant-design/icons';

const {  Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LoyoutDefault:React.FC = (props:any) => {
    const [collapsed,setCollapsed] = useState(false)
    //折叠菜单
    function onCollapse() {
        setCollapsed(!collapsed)
    }
    //跳转路由
    function RouterPageHistory(pages:string,page:string) {
      props.history.push(pages + page)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className={styles.logo} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {
                router.map((item,index) => !item.children ? <Menu.Item key={index}>
                  </Menu.Item> :  <SubMenu key={index} icon={<UserOutlined />}  title={item.title}>
                    {
                      item.children.map(itemRoute => 
                        <Menu.Item 
                          onClick={() => RouterPageHistory(item.url,itemRoute.url)} 
                          key={index}>{itemRoute.title}
                        </Menu.Item>
                      )
                    }
                </SubMenu>)
              }
            </Menu>
          </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.site_layout_background} style={{ padding: 24, minHeight: 360 }}>
                <Route path="/Layout/category" component={Category} />
                <Route path="/Layout/adduser" component={User} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}


export default (withRouter(LoyoutDefault))