import Layout from '../Layout'

import category from '../pages/category'
import user from '../pages/user'

interface RoutePage {
    url:string,
    components:any,
    icon?:string,
    title:string
    children?:[RoutePage]
}
type RoutePages = Array<RoutePage>

const route:RoutePages = [
    {
        url:'/Layout',
        components:Layout,
        title:'添加分类',
        children:[
            {
                url:'category',
                components:category,
                title:'分类列表'
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