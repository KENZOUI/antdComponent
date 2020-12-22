import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'umi';
import { Table } from 'antd';
import styles from "./test.less";

const TableList = (props) => {
  const [tableColumns, setTableColumns] = useState([]);
  const [tableData, setTableData] = useState([]);
  console.log('data1111', props.data)
  useEffect(() => {
    console.log('props', props)
    props.dispatch({
      type: "tableList/getData",
    })
  }, [])
  useEffect(() => {
    setTableData(props.data)
  })
  const column = [
    {
      title: '一级',
      dataIndex: 'serviceType',
      align: 'center',
    },
    {
      title: '一级',
      dataIndex: 'sendGroup',
      align: 'center',
    },
    {
      title: '二级',
      dataIndex: "dispatchInfo[0].chargeItemName",
      align: 'center',

      render: (text, record, index) => {
        console.log('dispatchInfo-text', text)
        console.log('dispatchInfo-record', record)
        // return (
        //   // children: (
        //     text.map(item => {
        //       console.log('item', item)
        //       return <{item.chargeItemName}
        //     })

        //   // )
        // )
      },

    },
    {
      title: '三级',
      dataIndex: "chargeItemName",
      // dataIndex: {
      //   // record.dispatchInfo.map(item => {
      //   //   console.log('item', item)
      //   //   item.chargeItems.map(i => {
      //   //     console.log('i', i.chargeItemName)
      //   //     return <div className={styles.aneborder}>{i.chargeItemName}</div>
      //   //   })
      //   // })
      // },
      align: 'center',
      render: (text, record, index) => {
        console.log('chargeItems-text', text)
        console.log('chargeItems-record', record)
        console.log('index',index)
        return {
          children: (
            record.dispatchInfo.map(item => {
              console.log('item', item)
              return item.chargeItems.map(i => {
                console.log('i', i.chargeItemName)
                return <div className={styles.aneborder}>{i.chargeItemName}</div>
              })
            })
            // text.map(item => {
            //   console.log('item', item)
            //   return <div className={styles.aneborder}>{item.chargeItemName}</div>
            // })
          )
        }
      },

    },
    // {
    //   title: '三级',
    //   dataIndex: 'chargeItems',
    //   align: 'center',
    //   render: (text, record, index) => {
    //     console.log('chargeItems-text', text)
    //     console.log('chargeItems-record', record)
    //     return (
    //       <span>{text[index].chargeItemName }</span>
    //     )
    //   },
    // }


    // {
    //   title: '可否dispatchInfo跨行',
    //   dataIndex: 'dispatchInfo',
    //   align: 'center',
    //   render: (_, record) => {
    //     // return <span >{record.crossRowType.name}</span>;
    //   },
    // },

  ];
  return (
    <Table
      columns={column}
      // columns={tableColumns}
      dataSource={tableData}
      bordered />
  )
}
export default connect(({ tableList, loading, demo }) => ({
  // loading: loading.models.tableList,
  data: tableList.data,
  // tableData:tableList.tableData
}))(TableList);
