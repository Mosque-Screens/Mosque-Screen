import React, { Component } from 'react';
import './google-auth.css';
class GoogleAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gapi: window.gapi,
      apiKey: 'AIzaSyDm5iZU5kvCRbJKeh5MrO5sDH0bBgXlpD4',
      discoveryDocs: [
        'https://people.googleapis.com/$discovery/rest?version=v1'
      ],
      clientId:
        '264729051003-tmkiqo3dsnn2q957mmro8e9ds5i5516r.apps.googleusercontent.com',
      scopes: 'profile',
      userName: null,
      isSignedIn: false
    };

    this.state.gapi.load('client:auth2', this.initClient);
  }

  initClient = () => {
    var _this = this;
    this.state.gapi.client
      .init({
        apiKey: this.state.apiKey,
        discoveryDocs: this.state.discoveryDocs,
        clientId: this.state.clientId,
        scope: this.state.scopes
      })
      .then(function() {
        _this.state.gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(_this.updateSigninStatus);
        _this.updateSigninStatus(
          _this.state.gapi.auth2.getAuthInstance().isSignedIn.get()
        );
      });
  };

  updateSigninStatus(isSignedIn) {
    if (this && isSignedIn) {
      this.makeApiCall();
      this.setState(() => ({
        isSignedIn: isSignedIn
      }));
    } else if (!this) {
      window.location.reload();
    }
  }

  handleAuthClick() {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  handleSignoutClick() {
    window.gapi.auth2.getAuthInstance().signOut();
  }

  makeApiCall() {
    var _this = this;
    this.state.gapi.client.people.people
      .get({
        resourceName: 'people/me',
        'requestMask.includeField': 'person.names'
      })
      .then(function(resp) {
        var name = resp.result.names[0].givenName;
        _this.setState(() => ({
          userName: name
        }));
      });
  }

  render() {
    var AuthenticatedMessage = null;

    if (this.state.isSignedIn) {
      AuthenticatedMessage = (
        <div className="AuthenticatedMessage">
          <p>Hi {this.state.userName}.</p>
          <button onClick={this.handleSignoutClick}>Sign out</button>
        </div>
      );
    } else {
      AuthenticatedMessage = (
        <button onClick={this.handleAuthClick}>Sign in with Google</button>
      );
    }

    return <div className="GoogleAuthWrapper">{AuthenticatedMessage}</div>;
  }
}

export default GoogleAuth;
