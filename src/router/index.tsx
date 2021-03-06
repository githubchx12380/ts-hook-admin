import Layout from '../Layout'

import flight from '../pages/flight'
import user from '../pages/user'
import Login from '../pages/Login'
interface RoutePage {
    url:string,            //跳转路径
    components:any,        //对应的组件
    icon?:string,          //ico
    title:string,          //title
    isMenuHide?:boolean,   //是否隐藏于侧边栏
    children?:[RoutePage]  //子路由
}
type RoutePages = Array<RoutePage>

const route:RoutePages = [
    {
        url:'/login',
        components:Login,
        title:'用户登录',
        isMenuHide:true,
    },
    {
        url:'/Layout',
        components:Layout,
        title:'机票管理',
        children:[
            {
                url:'/flight',
                components:flight,
                title:'机票列表'
            }
        ]
    },
    {
        url:'/Layout',
        components:Layout,
        title:'用户管理',
        children:[
            {
                url:'/adduser',
                components:user,
                title:'添加用户'
            }
        ]
    }
]
    


export default route