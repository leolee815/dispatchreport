import React from 'react';
import Search from './../Search/Search';
import Header from './../../Common/Header/Header';
import List from './../List/List';

export default class PlateOrder extends React.Component {
  render() {
    return (
      <div>
        <Header title="顾问产能/业绩监控表"></Header>
        <Search></Search>
        <List></List>
      </div>
    );
  }
}
