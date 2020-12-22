import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { connect } from 'umi';
// import { useIntl, FormattedMessage } from 'umi';
import dayjs from 'dayjs';
import QueryBar from '../components/QueryBar';
const queryBarData = [
  {
    field: 'name',
    text: '名称',
    type: 'input',
  },
  {
    field: 'condition',
    text: '状态',
    type: 'select',
    options: [
      { label: '必填', value: 1 },
      { label: '不必填', value: 0 },
    ],
    defaultValue: 1,
  },
  {
    field: 'name1',
    text: '名称',
    type: 'input',
  },
  {
    field: 'aa',
    text: '状态',
    type: 'select',
    multiple: 'multiple',
    labelInValue: true,
    options: [
      { label: '必填', value: 1 },
      { label: '不必填', value: 0 },
    ],
  },
  ,
  {
    field: 'creatData',
    text: '创建日期',
    type: 'DatePicker',
    // "picker":'week',
  },

  //可多条数据
];

const Welcome = (props) => {
  const { searchParams } = props;
  // 回调提交
  const handleSearch = (value) => {
    const time = dayjs(value.creatData).format('YYYY-MM-DD'); //开始时间
    console.log('time', time);
    // value.creatData = time;
    console.log('父组件接收数据', value);
  };
  console.log('searchParams', props.searchParams);
  return (
    <PageContainer>
      <Card>
        <QueryBar dataSource={queryBarData} handleSearch={handleSearch} filter={searchParams} />
      </Card>
    </PageContainer>
  );
};
export default connect(({ demo }) => {
  return {
    searchParams: demo.searchParams,
  };
})(Welcome);
