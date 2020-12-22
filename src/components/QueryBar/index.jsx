import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Row, Col, DatePicker } from 'antd';
import styles from './index.less';
import dayjs from 'dayjs';
const { Option } = Select;
const { RangePicker } = DatePicker;
const QueryBar = (props) => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState(props.dataSource);
  const [checked, setChecked] = useState(true);
  const { filter } = props;
  console.log('filter', filter);
  useEffect(() => {
    console.log('filter', filter);
  }, []);

  // 类型判断
  const switchItem = (item) => {
    const { type } = item;
    console.log('item', item);
    switch (type) {
      case 'input':
        return <Input placeholder="请输入" />;
        break;
      case 'select':
        return (
          <Select
            placeholder="请选择"
            style={{ width: '100%' }}
            mode={item.multiple === 'multiple' ? 'multiple' : null}
            // labelInValue={item.labelInValue ? true : false}
            // onChange={ onchangeSelect(item.field)}
          >
            {item.options &&
              item.options.map((option, index) => {
                return (
                  <Option key={index} value={option.value}>
                    {option.label}
                  </Option>
                );
              })}
          </Select>
        );
        break;
      case 'DatePicker':
        // console.log('${item.field}', `${item.field}`: dayjs(item.defaultValue))
        const value = item.field;
        return (
          <DatePicker
            style={{ width: '100%' }}
            // picker={item.picker ? item.picker : null}
          />
        );
        break;
      case 'DatePickerTime':
        return (
          <DatePicker
            showTime
            placeholder="请选择时间"
            style={{ width: '100%' }}
            onOk={this.pickerTimeOk}
          />
        );
        break;
      case 'InputGroup':
        return (
          <InputGroup compact>
            <Input style={{ width: '20%' }} onChange={(e) => this.iptchange01(e)} />
            <span className={styles.colord4}>&nbsp;&nbsp;——&nbsp;&nbsp;</span>
            <Input style={{ width: '30%' }} onChange={(e) => this.iptchange02(e)} />
          </InputGroup>
        );
        break;
      case 'inputSelet':
        return (
          <div>
            <Checkbox onChange={this.onChange}>我是前置条件</Checkbox>
            <Select placeholder="请选择" style={{ width: '100%' }} onChange={this.handleChange}>
              {item.options.map((option, index) => {
                return (
                  <Option key={index} value={option} disabled={this.state.checked}>
                    {option}
                  </Option>
                );
              })}
            </Select>
          </div>
        );
        break;
      default:
        break;
    }
  };
  //数据长度判断
  let Rowcustom;
  if (dataSource.length > 3) {
    Rowcustom = (
      <div>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }} className={styles.rowbox}>
          {dataSource.map((item, index) => (
            <Col md={8} sm={24} key={index} className={styles.Col}>
              <Form.Item
                name={item.field}
                label={item.text}
                // initialValue={{`${item[item.field]}`:1 } }
              >
                {/* <Input /> */}
                {switchItem(item)}
              </Form.Item>
            </Col>
          ))}
        </Row>
        <div style={{ marginBottom: '24px' }}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button style={{ marginLeft: 8 }}>重置</Button>
        </div>
      </div>
    );
  }
  // 查询
  const onFinish = (values) => {
    const { handleSearch } = props;
    //传给父组件
    handleSearch(values);
  };
  return (
    <Form form={form} name="formName" onFinish={onFinish} initialValues={props.filter}>
      {Rowcustom}
    </Form>
  );
};
export default QueryBar;
