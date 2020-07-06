import React, { useState, useEffect } from 'react';
import { Table, Radio, Divider } from 'antd';
import { flightList } from '../../api/flight'
const columns = [
  {
    title: '机票ID',
    dataIndex: 'air_ticket_id',
  },
  {
    title: '出发机场',
    dataIndex: 'depAirport',
  },
  {
    title: '到达机场',
    dataIndex: 'arrAirport',
  },
];


const rowSelection = {
  
  onChange: (selectedRowKeys:any, selectedRows:any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record:any) => ({
    disabled: record.name === 'Disabled User', 
    name: record.name,
  }),
};

const Flight:React.FC = () => {
  const [data,setData] = useState([])
  const [selectionType, setSelectionType] = useState('checkbox');
  const [model,setModel] = useState({
      page:1,
      limit:10,
      price:1000,
      arrcode:'',
      depcode:'',
      depdate:'',
      aircode:''
  })

  function getFlightInfo() { 
    flightList(model).then(res => {
        let result
        result =  res.data.map((item:any) => {
            item.key = item.air_ticket_id
            return item
        })
        setData(result)
    })
  }
  useEffect(() => {
    getFlightInfo()
  },[])
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
            type: 'checkbox',
            ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default Flight