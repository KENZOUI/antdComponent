import React from 'react';
import { connect } from 'umi';
import { BaseTable, useTablePipeline, features, fusion, isLoading } from 'ali-react-table';
const TableList = (props) => {

  console.log('props',props.data)
  const dataSource = props.data;
  const json2 = json.get("dataSource");
  console.log('json2',json2)
  // Map maps = (Map)JSON.parse(dataSource)
  // console.log('maps',maps)
  // dataSource.map.get("dispatchInfo").toString()(item => {
  //   console.log('item',item)
  // })
  const columns = [
    { code: 'serviceType', name: '省份', width: 150, fusion: { autoRowSpan: true, sortable: true } },
    { code: 'sendGroup', name: '城市', width: 150, features: { autoRowSpan: true, sortable: true } },
    { code: 'dispatchId', name: 'ID', width: 150, features: { autoRowSpan: true, sortable: true } },
    { code: 'chargeItemName', name: '确诊', align: 'right', features: { autoRowSpan: false, sortable: true } },
    { code: 'provinceName', name: '治愈', align: 'right', features: { autoRowSpan: false, sortable: true } },
    { code: 'basicPrice', name: '死亡', align: 'right', features: { autoRowSpan: true, sortable: true } },
  ]

  const pipeline = useTablePipeline({ components: fusion })
    .input({ dataSource, columns })
    .use(features.sort({ mode: 'single', defaultSorts: [{ code: 'serviceType', order: 'desc' }] }))
    .use(features.autoRowSpan())

  return(
  <BaseTable
    defaultColumnWidth={100}
    isLoading={isLoading} {...pipeline.getProps()}
  />)
}
// export default TableList;
export default connect(({ tableList, loading, demo }) => ({
  loading: loading.models.tableList,
  data: tableList.data,
}))(TableList);
