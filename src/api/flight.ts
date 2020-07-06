import request from '../utils/request'
const token = sessionStorage.getItem('token')
console.log(token);

export const flightList = (query:object) => {
    return request('/air/flightlist',{
        method:'get',
        headers:{
            'x-token':token
        },
        query,
    })
}

export const CityList = () => {
    return request('/air/citylist',{
        method:'get',
        headers:{
            'x-token':token
        },
    })
}