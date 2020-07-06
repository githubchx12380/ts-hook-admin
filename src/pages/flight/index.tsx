import React, { useState, useEffect } from 'react';
import { Table, Radio,Tag, Divider } from 'antd';
import { flightList } from '../../api/flight'


const rowSelection = {
  onChange: (selectedRowKeys:any, selectedRows:any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record:any) => ({
    disabled: record.name === 'Disabled User', 
    name: record.name,
  }),
};

//点击编辑或删除

const Flight:React.FC = () => {
     
  const [data,setData] = useState([])
  const [total,setTotal] = useState(0)
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
  const [loading,setLoading] = useState(false)
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
    {
        title:'出发日期',
        dataIndex:'depDate',
    },
    {
        title:'出发时间',
        dataIndex:'depTime'
    },
    {
        title:'到达时间',
        dataIndex:'arrTime'
    },
    {
        title:'飞行耗时',
        dataIndex:'flightTime'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text:any, record:any) => (
            <span>
            <a style={{ marginRight: 16 }} onClick={() => handleitem(record,'editor')}>编辑</a>
            <a onClick={() => handleitem(record,'delete')}>删除</a>
            </span>
        ),
      },
  ];
  function onChangepage(page:number,pagesize:number | undefined) {
    model.page = page
    setModel(model)
    getFlightInfo()
  }
  function getFlightInfo() { 
    setLoading(true);
    flightList(model).then(res => {
        let result
        result =  res.data.map((item:any) => {
            item.key = item.air_ticket_id
            return item
        })
        setData(result)
        setTotal(res.len)
        setTimeout(() => {
            setLoading(false);
        },500)
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
            type: selectionType,
            ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={
            {
                total,
                defaultPageSize:model.limit,
                onChange:(page,pagesize) => onChangepage(page,pagesize)
            }
        }
        loading={loading}
      >
      </Table>
    </div>
  );
  function handleitem(record:any,state:string) {
    
    }   
};

export default Flight