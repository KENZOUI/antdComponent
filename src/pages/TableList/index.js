import React, { useState, useEffect, useCallback } from 'react';
import { BaseTable, useTablePipeline, features, fusion, isLoading } from 'ali-react-table';
import { connect } from 'umi';
import { Table, Divider, Tag } from 'antd';
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
    //const len = responseDataItem.timeData.length;
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

  console.log('arr', arr)

  const dataSource = arr.map((item, index) => {
    console.log('item',item)
    item.key = index;
    return item;
  })

  const columns = [
    { code: 'sendGroup', name: '省份', width: 150, features: { autoRowSpan: true, sortable: true } },
    { code: 'chargeItemNameA', name: '城市', width: 150, features: { autoRowSpan: true, sortable: true } },
    { code: 'chargeItemName', name: '确诊', align: 'right', features: { autoRowSpan: true, sortable: true } },
    { code: 'endWeight', name: '治愈', align: 'right', features: { autoRowSpan: false, sortable: true } },
    { code: 'dd', name: '治愈111', align: 'right', features: { autoRowSpan: false, sortable: true } },
  ]

  const pipeline = useTablePipeline({ components: fusion })
    .input({ dataSource, columns })
    .use(features.sort({ mode: 'single', defaultSorts: [{ code: 'sendGroup', order: 'desc' }] }))
    .use(features.autoRowSpan())

  return <BaseTable defaultColumnWidth={100} isLoading={isLoading} {...pipeline.getProps()} />






}
export default connect(({ tableList, loading, demo }) => ({
  data: tableList.data,
}))(TableList);
