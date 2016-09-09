import React from 'react';
import Search from '../Search/Search';
import Header from '../../../Common/Header/Header';

export default class PlateOrder extends React.Component {
  render() {
    return (
      <div>
        <Header title="商机概览"></Header>
        <Search></Search>
      </div>
    );
  }
}
