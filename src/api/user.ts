import request from '../utils/request'

//登录
export const userLogin = (body:object) => {
    return request('/user/login',{
        method:'post',
        body
    })
}