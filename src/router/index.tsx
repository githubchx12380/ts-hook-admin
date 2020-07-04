import category from '../pages/category'

interface RoutePage {
    url:string,
    components:any,
    icon?:string,
    children?:[RoutePage]
}

const route:RoutePage = {
    url:'asdas',
    components:category,
    children:[
        {
            url:'/asd',
            components:category
        }
    ]
}
    


export default route