import React, { useEffect } from 'react'
import request from '../../utils/request'
const Category:React.FC = () => {
    useEffect(() => {
        request('/order/orderlist',{
            method:'post',
            body:{
                a:1,
                b:2
            }
        }).then(res => {
            
        })
    },[])
    return (
        <div>
            category
        </div>
    )
}

export default Category