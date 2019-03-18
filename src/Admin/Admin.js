import React, { Component } from 'react';
import './Admin.css';
import GoogleAuth from '../_components/google-auth/google-auth';

class Admin extends Component {
  render() {
    return (
      <div className="AdminWrapper">
        <h1>Admin</h1>
        <div className="AdminContent">
          <h2>Admin interface coming soon.</h2>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default Admin;
