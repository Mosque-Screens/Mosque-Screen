import './style.css';
import React, { Component } from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }
  render() {
    return (
      <div ref="root">
        <div class="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Menu;
