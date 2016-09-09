import React from 'react';
import Search from './../Search/Search';
import Header from './../../Common/Header/Header';
import List from './../List/List';

export default class PlateOrder extends React.Component {
  render() {
    return (
      <div>
        <Header title="平台订单概览"></Header>
        <Search></Search>
        <List></List>
      </div>
    );
  }
}
