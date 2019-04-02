import React, { Component } from 'react';
import './Admin.css';
import AdminData from '../_components/admin-data/admin-data';

class Admin extends Component {
  render() {
    return (
      <div className="AdminWrapper">
        <h1>Admin</h1>
        <div className="AdminContent">
          <AdminData />
        </div>
      </div>
    );
  }
}

export default Admin;
