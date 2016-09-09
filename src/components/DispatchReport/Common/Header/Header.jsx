import React from 'react';
import './Header.less';
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h2>{this.props.title}</h2>
      </header>
    )
  }

}
