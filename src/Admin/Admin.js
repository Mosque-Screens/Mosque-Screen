import React, { Component } from 'react';
import './Admin.css';
import GoogleData from '../_components/google-data/google-data';

class Admin extends Component {
  render() {
    return (
      <div className="AdminWrapper">
        <h1>Admin</h1>
        <div className="AdminContent">
          <GoogleData />
        </div>
      </div>
    );
  }
}

export default Admin;
