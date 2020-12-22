import React, { useState, useEffect,useCallback } from 'react';
// import './index.less';
import { Modal, Table } from 'antd';
import moment from 'moment';
// import { config_discount_list } from '../../../services/api';

function TableList(props) {
  const [tableData, setTableData] = useState([]);               // list数据
  const [visible,setVisible ] = useState(false);
  const [tableColumns,setTableColumns] = useState([]);
  const [filterParams, setFilterParams] = useState({});  // 查询表单的参数
  // const [updateList, setUpdateList] = useState([]); // 回显
  const [serveConfigId, setServeConfigId] = useState();  // 是否修改状态
  // const format = 'HH:mm';
  // const dateFormat = 'YYYY/MM/DD';

  // 后端返回的数据
  // [
  //   {
  //     dateDiscount: 1,
  //     endDate: "2019-01-02",
  //     startDate: "2019-01-01",
  //     timeData:[
  //       {
  //         discountPrice: 1,
  //         endTime: "21:21:21",
  //         startTime: "20:20:20",
  //         timeDiscount: 1,
  //       },
  //       {
  //         discountPrice: 2,
  //         endTime: "21:21:21",
  //         startTime: "20:20:20",
  //         timeDiscount: 2,
  //       },
  //       {
  //         discountPrice: 3,
  //         endTime: "21:21:21",
  //         startTime: "20:20:20",
  //         timeDiscount: 3,
  //       }
  //     ]
  //   },
  //   {
  //     dateDiscount: 1,
  //     endDate: "1111-11-11",
  //     startDate: "1111-11-11",
  //     timeData:[
  //       {
  //         discountPrice: 0.012,
  //         endTime: "00:00:00",
  //         startTime: "00:00:00",
  //         timeDiscount: 2,
  //       },
  //       {
  //         discountPrice: 0.013,
  //         endTime: "00:00:00",
  //         startTime: "00:00:00",
  //         timeDiscount: 3,
  //       }
  //     ]
  //   }
  // ]

  // 我操作以后得出的数据
  //  [
  //     {
  //       key:0,
  //       date:'1111',
  //       dateDiscount:'0.1',
  //       createTime:'1111-22222',
  //       timeDiscount:'0.222',
  //       discountPrice:'1111',
  //       span:2, // :0 代表不占行 :1 代表占一行，:2 代表占两行，以此类推，
                   // 当这里占了两行，下一行一定要为空行，即 span:0
                   // 同理这里是 :3 的话，下面必须连续出现两个 span:0
  //     },
  //     {
  //       key:1,
  //       date:'222',
  //       dateDiscount:'0.1',
  //       createTime:'55555-66666',
  //       timeDiscount:'0.3333',
  //       discountPrice:'2222',
  //       span:0,
  //     },
  //     {
  //       key:2,
  //       date:'3333',
  //       dateDiscount:'0.1',
  //       createTime:'77777-88888',
  //       timeDiscount:'0.4444',
  //       discountPrice:'3333',
  //       span:4,
  //     },
  //     {
  //       key:3,
  //       date:'444444',
  //       dateDiscount:'0.1',
  //       createTime:'77777-88888',
  //       timeDiscount:'0.4444',
  //       discountPrice:'3333',
  //       span:0,
  //     },
  //     {
  //       key:4,
  //       date:'55555',
  //       dateDiscount:'0.1',
  //       createTime:'77777-88888',
  //       timeDiscount:'0.4444',
  //       discountPrice:'3333',
  //       span:0,
  //     },
  //     {
  //       key:5,
  //       date:'66666',
  //       dateDiscount:'0.1',
  //       createTime:'77777-88888',
  //       timeDiscount:'0.4444',
  //       discountPrice:'3333',
  //       span:0,
  //     }
  //   ]

  const requestList = useCallback(async () => {
    // let res = await config_discount_list({ serveConfigId});
    let res= [
        {
          dateDiscount: 1,
          endDate: "2019-01-02",
          startDate: "2019-01-01",
          timeData:[
            {
              discountPrice: 1,
              endTime: "21:21:21",
              startTime: "20:20:20",
              timeDiscount: 1,
            },
            {
              discountPrice: 2,
              endTime: "21:21:21",
              startTime: "20:20:20",
              timeDiscount: 2,
            },
            {
              discountPrice: 3,
              endTime: "21:21:21",
              startTime: "20:20:20",
              timeDiscount: 3,
            }
          ]
        },
        {
          dateDiscount: 1,
          endDate: "1111-11-11",
          startDate: "1111-11-11",
          timeData:[
            {
              discountPrice: 0.012,
              endTime: "00:00:00",
              startTime: "00:00:00",
              timeDiscount: 2,
            },
            {
              discountPrice: 0.013,
              endTime: "00:00:00",
              startTime: "00:00:00",
              timeDiscount: 3,
            }
          ]
        }
      ]
    // if (res.data.responseCode) return
    // let responseData = res.data.responseData;
    let responseData = res;
    console.log('responseData',responseData)
    setVisible(true)
    let arr = [];
    responseData.map(responseDataItem=>{
      const len = responseDataItem.timeData.length;
      responseDataItem.timeData.map((timeDataItem,index)=>{
        arr = [
          ...arr,
          {
            time:timeDataItem.startTime+'-'+timeDataItem.endTime,
            discountPrice: timeDataItem.discountPrice,
            timeDiscount: timeDataItem.timeDiscount,
            date:responseDataItem.startDate === '1111-11-11' ? '其他日期' : responseDataItem.startDate+'-'+responseDataItem.endDate,
            dateDiscount:responseDataItem.dateDiscount,
            span:index === 0 ? len : 0
          }
        ]
        return arr
      })
      return arr
    })
    const tableData = arr.map((item, index) => {
      item.key = index;
      return item;
    })
    setTableData(tableData);
  })

  useEffect(()=>{
    setVisible(props.visible);
    setServeConfigId(props.serveConfigId);
  }, [props.visible, props.serveConfigId])

  useEffect(() => {
    requestList()
  },[])
  // useEffect(()=>{
  //   if(serveConfigId && serveConfigId !== -1){
  //     requestList()
  //   }
  // }, [serveConfigId])

  useEffect(()=>{
    setTableColumns([
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        width: 140,
        render: (value, row, index) => { // 需要被合并的单元格，只需要这样设置就行了。比官网的简单，但是，一开始要处理好数据中的 span 属性。
          return {// 这里可以返回标签，比如：return <span title={value}>{value}</span>
            children: value,
            props: {rowSpan:row.span},
          };
        },
      },
      {
        title: '日期折扣',
        dataIndex: 'dateDiscount',
        key: 'dateDiscount',
        width: 140,
        render: (value, row) => {
          return {
            children: value,
            props: {rowSpan:row.span},
          };
        },
      },
      {
        title: '时间',
        dataIndex: 'createTime',
        key: 'createTime',
        width: 140
      },
      {
        title: '时间折扣',
        dataIndex: 'timeDiscount',
        key: 'timeDiscount',
        width: 140
      },
      {
        title: '价格(元)',
        dataIndex: 'discountPrice',
        key: 'discountPrice',
        width: 140
      }
    ])
  }, [])

  const onCancel = () => {
    setVisible(false)
    props.close(false)
  }

  return (
      <Modal
        destroyOnClose={true}
        className="discountsDetailModal"
        title="优惠详情"
        centered
        visible={ visible }
        onCancel={ onCancel }
        okText="确定"
        cancelText="取消"
        maskClosable={ false }
        width={600}
      >
         <Table columns={tableColumns} dataSource={tableData} bordered />
      </Modal>
  )
}

export default TableList;
