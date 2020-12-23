import React, { useState, useEffect } from 'react';
import {Table} from 'antd';
import { BaseTable, useTablePipeline, features } from 'ali-react-table';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import styles from './ TableList.less';

const TableList = (props) => {
  // console.log('antd',antd)
  // const [tableColumns, setTableColumns] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [detailShow,setDetailShow]=useState(false)

  //date
  useEffect(() => {
    props.dispatch({
      type: "tableList/getData",
    })
  }, [])
  useEffect(() => {
    setTableData(props.data)
  })

  //转数组格式
  let arr = [];
  let countdata;
  let expressiondata;
  let chargeItemsdata;
  tableData.map(responseDataItem => { // 第一层
    responseDataItem.dispatchInfo.map((infoItem, index) => { //第二层
      infoItem.chargeItems.map((chargeItems, i) => { // 第三层
        let spanex = chargeItems.expression.length;
        let spandd = chargeItems.tt.length;
        let threespan = spanex > spandd ? spanex :spandd;
        let arr2=[];
        for (var i = 0; i < threespan; i++){
          if (chargeItems.expression[i] !== undefined && chargeItems.tt[i]!== undefined) {
            countdata = Object.assign(chargeItems.expression[i], chargeItems.tt[i])
            arr2 = [...arr2,countdata]
          }
          if (chargeItems.expression[i] !== undefined && chargeItems.tt[i] === undefined) {
            expressiondata = Object.assign(chargeItems.expression[i])
            arr2 = [...arr2,expressiondata]
          }
          if (chargeItems.expression[i] === undefined && chargeItems.tt[i] !== undefined) {
            chargeItemsdata = Object.assign(chargeItems.tt[i])
            arr2 = [ ...arr2,chargeItemsdata]
          }
        }
        arr2 && arr2.map(i => {
            arr = [
            ...arr,
            {
              sendGroup: responseDataItem.sendGroup,//第一层
              chargeItemNameA: infoItem.chargeItemNameA,//第二层
              chargeItemName: chargeItems.chargeItemName,//第三层
              endWeight: i.endWeight,//第四层
              color: i.color, //第四层
              dd: i.dd,//第四层
              bb: i.bb,//第四层
              cc: i.cc,//第四层
              aa:i.aa,//第四层
              details: infoItem.details,//第二层的详情
              send:responseDataItem.send
            }
            ]
          return arr;
        })

        // chargeItems.expression.map((expression, f) => {
          // console.log('expression',expression ,f)
          // arr = [
          //   ...arr,
          //   {
          //     sendGroup: responseDataItem.sendGroup,//第一层
          //     chargeItemNameA: infoItem.chargeItemNameA,//第二层
          //     chargeItemName: chargeItems.chargeItemName,//第三层
          //     endWeight: expression.endWeight,//第四层
          //     color: expression.color,
          //     dd: expression.dd,//第四层
          //     details:infoItem.details,//第二层的详情
          //   }
          // ]
          // return arr
        // })

        return arr
      })
      return arr
    })
    return arr
  })

  // console.log('arr', arr)
  const dataSource = arr.map((item, index) => {
    item.key = index;
    return item;
  })

  // 点击事件
  const handleView = (record) => {
    console.log('record+++++', record)
    if (record.details !== undefined) {
      console.log('details', record.details)
      if (detailShow === false) {
        setDetailShow(true)
      } else {
        setDetailShow(false)
      }

    }
  }
  const columns = [
    { code: 'sendGroup',
     name: '第一层', width: 150, features: { autoRowSpan: true, sortable: true } },
    {
      code: 'chargeItemNameA', name: '第二层',
      features: { autoRowSpan: true, sortable: true },
      render: (value, record) => {
        console.log('record',record)
        return (
          <div>
            <span>{value}</span>
              <SearchOutlined  onClick={()=>handleView(record)}/>
              {detailShow === true ? (
                <p>{ record.details!==undefined ? record.details.name+ ';'+record.details.id :null }</p>
              ) : ''}
          </div>
        )
      }
    },
    { code: 'chargeItemName', name: '第三层', align: 'right', features: { autoRowSpan: true, sortable: true } },
    {
      code: 'endWeight', name: '第四层1', align: 'right',
      features: { autoRowSpan: false, sortable: true },
    },
    {
      code: 'dd', name: '第四层2', align: 'center',features: { autoRowSpan: false, sortable: true },
    },
    {
      code: 'aa', name: '第四层3', align: 'center',features: { autoRowSpan: false, sortable: false },
    },
  ]

  const pipeline = useTablePipeline({ components: Table })
    .input({ dataSource, columns })
    .use(features.sort({ mode: 'single', defaultSorts: [{ code: 'sendGroup', order: 'desc' }] }))
    .use(features.autoRowSpan())

  return (
    <div className={styles.aneTableBox}>
      <BaseTable
        style={{
          // width: 500,
          // height:300,
          overflow: 'auto'
        }}
        useOuterBorder
        getRowProps={(record, _) => {
          return {
            style:
              record.color !== undefined
                ?
                { color: '#fd8a00' }
                : {
                  // 覆盖 website 中自带的 style，实际使用时可以忽略
                  background: 'transparent',
                },
          }

        }}
        // defaultColumnWidth={100}
        // isLoading={props.loading}
        {...pipeline.getProps()} />
    </div>

  )
}
export default connect(({ tableList, loading }) => ({
  loading: loading.models.tableList,
  data: tableList.data,
}))(TableList);
