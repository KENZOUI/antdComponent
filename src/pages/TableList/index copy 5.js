import React, { useState, useEffect, useCallback } from 'react';
import { BaseTable, useTablePipeline, features, fusion, isLoading } from 'ali-react-table';
import { connect } from 'umi';
import { Table, Divider, Tag , pagination} from 'antd';
import styles from "./test.less";

const { Column, ColumnGroup } = Table;
const TableList = (props) => {
  const [tableColumns, setTableColumns] = useState([]);
  const [tableData, setTableData] = useState([]);

//date
useEffect(() => {
  console.log('props', props)
  props.dispatch({
    type: "tableList/getData",
  })
}, [])
useEffect(() => {
  setTableData(props.data)
})

  //转数组格式
  let arr = [];
  let arr3 = [];
  tableData.map(responseDataItem=>{ // 第一层
    responseDataItem.dispatchInfo.map((infoItem, index) => { //第二层
      infoItem.chargeItems.map((chargeItems, i) => { // 第三层
        let spanex = chargeItems.expression.length;
        let spandd = chargeItems.tt.length;
        let threespan = 0;
        if (spanex > spandd) {
          threespan = spanex;
        } else {
          threespan = spandd
        }
        console.log('changdu',spandd,spanex,threespan)
        arr= [
          ...arr,
          {
            sendGroup: responseDataItem.sendGroup,
            chargeItemNameA:infoItem.chargeItemNameA,
            chargeItemName: chargeItems.chargeItemName,
            arrexpression: chargeItems.expression,
            arrdd: chargeItems.tt,
            threespan,
          }
        ]
        // console.log('chargeItems', chargeItems)
        // let arr2 = [];
        // chargeItems.expression.map((expression, f) => {
        //   chargeItems.tt.map((tt, index) => {
        //     arr= [
        //       ...arr,
        //       {
        //         sendGroup: responseDataItem.sendGroup,
        //         chargeItemNameA:infoItem.chargeItemNameA,
        //         chargeItemName: chargeItems.chargeItemName,
        //         endWeight:expression.endWeight,
        //         dd:tt.dd,
        //       }
        //     ]
        //     return arr
        //   })
        //   return arr
        // })
        return arr
      })
      return arr
    })
    return arr
  })



  const temp = {} // 当前重复的值,支持多列
    /**
     * 动态合并表格方法
     * @param {*} text 表格每列对应的值
     * @param {*} data 后台返回的展示数据数组, 数据需要按字段排序
     * @param {*} columns 表格每列表头字段
     */
    const mergeCells = (text, data, columns) => {
      let i = 0
      if (text !== temp[columns]){
        temp[columns] = text
        data.forEach(((item) => {
          if (item[columns] === temp[columns]){
            i += 1
          }
        }))
      }
      return i
    }






  console.log('arr', arr)

  let col = [];
  let onespan = 0;

  Array.prototype.sum = function (){
    return this.reduce(function (partial, value) {
      return partial + value;
    })
  };

  const dataSource = arr.map((item, index) => {
    item.key = index;
    return item;
  })

  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    }
    return obj
  }


  const columns = [

    {
      title: '渠道一',
      dataIndex: 'sendGroup',
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        }
        obj.props.rowSpan = mergeCells(row.sendGroup, dataSource , 'sendGroup')
        return obj
      },
    },
    {
      title: '渠道2',
      dataIndex: 'chargeItemNameA',
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        }
        obj.props.rowSpan = mergeCells(row.chargeItemNameA, dataSource , 'chargeItemNameA')
        return obj
      },
    },
    {
      title: '渠道3',
      dataIndex: 'chargeItemName',
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        }
        obj.props.rowSpan = row.threespan
        return obj
      },
    },

  ]
  return(
    <Table columns={columns} dataSource={dataSource} pagination={pagination({ total: 100 })} bordered />
  )
}
export default connect(({ tableList, loading, demo }) => ({
  data: tableList.data,
}))(TableList);
