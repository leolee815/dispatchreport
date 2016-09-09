import React from 'react';
import { DatePicker, Select, Form, Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';

import * as actions from '../../../../redux/DispatchReport/actions/actions';

const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const FormItem = Form.Item;
import './Search.less';

class Search extends React.Component {
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
  search(){
    this.props.searchOrder();
  }
  render() {
    const { search } = this.props;
    return (
      <Form horizontal onSubmit={this.search.bind(this)} className="ant-advanced-search-form">
        <Row gutter={16}>
          <Col sm={8}>
            <FormItem  label="统计时间" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
              <RangePicker style={{ width: 184 }}  onChange={this.onChange}/>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col sm={8}>
            <FormItem  label="一级类目" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>
            <FormItem  label="交易顾问" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>
          </Col>
          <Col sm={8}>
            <FormItem  label="交易模式" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>
            <FormItem  label="订单来源" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>
          </Col>
          <Col sm={8}>
            <FormItem  label="订单分层" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
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


 // now we connect the component to the Redux store:

 var mapStateToProps = function(state){
     // This component will have access to `state.battlefield` through `this.props.battle`
     return {
       search:state.search
     };
 };

 var mapDispatchToProps = function(dispatch){
   //将action的所有方法绑定到props上
   return bindActionCreators(actions, dispatch)
 };

export default connect(mapStateToProps,mapDispatchToProps)(Search);
