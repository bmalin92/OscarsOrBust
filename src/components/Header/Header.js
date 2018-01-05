import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css';

export class Header extends Component {
  render() {
    return (
          <img src={logo} alt='Oscars or Bust logo'></img>
    );
  }
}

export default Header;
