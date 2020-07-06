import request from '../utils/request'


export const userLogin = (body:object) => {
    return request('/user/login',{
        method:'post',
        body
    })
}