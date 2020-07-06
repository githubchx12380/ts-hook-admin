import React, { useState } from 'react'
import { Form, Input, Button, Checkbox,Card  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss'
import { userLogin } from '../../api/user'

const Login:React.FC = (props:any) => {
    const [model,setModel] = useState<any>({})
    
    function onFinish() {
        userLogin(model).then(res => {
            if(res.code === 200) {
                sessionStorage.setItem('token',res.token)
                sessionStorage.setItem('id',res.id)
                console.log(props.history.replace('/Layout'));
            }
        })
    }
    //账号密码 
    function setUserinfo(e:any,str:string) {
        model[str] = e.target.value || ''
        setModel(model)  
    }

    return (
        
        <div className={styles.container}>
            <Card className={styles.cart_container} title="管理员登录"  hoverable  style={{ width: 400 }}>
                <Form
                    name="normal_login"
                    className={styles.login_form}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入有效的用户名' }]}
                    >
                    <Input onChange={(e) => setUserinfo(e,'username')} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入有效的密码' }]}
                    >
                    <Input
                        onChange={(e) => setUserinfo(e,'password')}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                    </Form.Item>
                    <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
            
                    <a className={styles.login_form_forgot} href="/logins">
                        忘记密码?
                    </a>
                    </Form.Item>
            
                    <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.login_form_button }>
                        Log in
                    </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login