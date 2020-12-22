import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';
import QueryBar from '../components/QueryBar';

// const CodePreview = ({ children }) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );
const queryBarData = [
  {
    "field": "name",
    "text": "名称",
    "type": "input",
  },{
    "field": "condition",
    "text": "状态",
    "type": "select",
    "options": ["关闭", "运行中"]
  },{
    "field": "creatData",
    "text": "创建日期",
    "type": "DatePicker",
  },{
    "field": "creatData",
    "text": "订单时间",
    "type": "DatePickerTime",
  }
  //可多条数据
];

export default () => {
  // const intl = useIntl();
  const handleSearch = () => {

  }
  return (
    <PageContainer>
      <Card>
        <QueryBar dataSource={queryBarData} handleSearch={handleSearch}/>
       </Card>
      {/* <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: '更快更强的重型组件，已经发布。',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="高级表格" />{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="高级布局" />{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card> */}
    </PageContainer>
  );
};
