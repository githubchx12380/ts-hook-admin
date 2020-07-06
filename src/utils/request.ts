import { message } from 'antd'
const BaseUrl:string = 'http://localhost:1337/admin/api'


function queryString(method:string,body:any):string {
    if(method === 'get' || method === 'GET') {
        let arr:Array<string> = []
        Object.keys(body).forEach(key => {
            arr.push(`${key}=${body[key]}`)
        })  
        return '?' + arr.join('&')
    }
    else if(method === 'post' || method === 'POST') {
        return JSON.stringify(body)
    }
    return ''
}

const request = (url:string,config?:any ) => {
    let querystring = ''
    if(config && config.body) {
        config.body = queryString(config.method,config.body)
        config.headers = {...config.headers,'content-type': 'application/json'}
        
    }else if(config && config.query) {
        querystring = queryString(config.method,config.query)
    }
    
    return fetch(BaseUrl + url + querystring,config).then(res => {
        if(res.ok) {
            
            return res.json()
        }else{
            throw new Error('Error ...')
        }
    }).then(result => {
        if(result.code !== 200) {
            message.error(result.msg)
        }
        return result
    }).catch(err => {
        
        message.error('errorMessage')
    })
}

export default request