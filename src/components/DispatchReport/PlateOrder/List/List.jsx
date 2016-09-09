import React from 'react';
import { Table, Icon } from 'antd';
import './List.less';

import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { search } = this.props;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a href="#">{text}</a>
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      }, {
        title: '操作',
        key: 'operation',
        render: (text, record) => (
          <span>
            <a href="#">操作一{record.name}</a>
            <span className="ant-divider"></span>
            <a href="#">操作二</a>
            <span className="ant-divider"></span>
            <a href="#" className="ant-dropdown-link">
              更多
              <Icon type="down"/>
            </a>
          </span>
        )
      }
    ];
    const data = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }, {
        key: '3',
        name: '李大嘴',
        age: 32,
        address: '西湖区湖底公园1号'
      }
    ];
    return (
      <div className="list-contain">
        {search}
        <Table columns={columns} dataSource={data} bordered/>
      </div>
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

export default connect(mapStateToProps)(List);
