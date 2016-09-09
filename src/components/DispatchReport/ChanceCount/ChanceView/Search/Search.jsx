import React from 'react';
import { DatePicker, Select, Form, Row, Col, Button } from 'antd';
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const FormItem = Form.Item;
import './Search.less';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  onChange(value, dateString){
    console.log('From: ', value[0], ', to: ', value[1]);
    console.log('From: ', dateString[0], ', to: ', dateString[1]);
  }
  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit} className="ant-advanced-search-form">
        <Row gutter={16}>
          <Col sm={8}>
            <FormItem  label="统计时间" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
              <RangePicker style={{ width: 184 }}  onChange={this.onChange}/>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col sm={8}>
            <FormItem  label="统计组别" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>
            <FormItem  label="订单分层" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>
          </Col>
          <Col sm={8}>
            <FormItem  label="重点关注订单" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>
            <FormItem  label="统计方式" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
           <Col span={12} offset={11} style={{ textAlign: 'right' }}>
             <Button type="primary" htmlType="submit">查询</Button>
           </Col>
        </Row>
      </Form>
     )
    }

 }
