import React from 'react'
import { Select } from 'antd';
const { Option } = Select;
type onChangeCity = (code:string) => any
interface props {
    data:Array<any>,
    onChangeCity:onChangeCity
}
const SelectComponent:React.FC<props> = (props) => {
    const handleChange = (value:any) => {
        props.onChangeCity(value)
    }
   
    return (
        <>
            <Select  defaultValue={props.data[0].city} style={{ width: 150 }} onChange={handleChange}>
                {
                    props.data.map(item => <Option key={item.city_id}  value={item.citycode}>{item.city}</Option>)
                }
            </Select>
        </>
    )
}

export default SelectComponent