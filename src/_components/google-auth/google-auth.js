import React, { Component } from 'react';
import './google-auth.css';
import gapi from 'gapi-client';

class GoogleAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: 'AIzaSyDm5iZU5kvCRbJKeh5MrO5sDH0bBgXlpD4',
      discoveryDocs: [
        'https://people.googleapis.com/$discovery/rest?version=v1'
      ],
      clientId:
        '264729051003-tmkiqo3dsnn2q957mmro8e9ds5i5516r.apps.googleusercontent.com',
      scopes: 'profile',
      authorizeButton: document.getElementById('authorize-button'),
      signoutButton: document.getElementById('signout-button')
    };
  }

  handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', this.initClient);
  }

  initClient() {
    gapi.client
      .init({
        apiKey: this.state.apiKey,
        discoveryDocs: this.state.discoveryDocs,
        clientId: this.state.clientId,
        scope: this.state.scopes
      })
      .then(function() {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

        // Handle the initial sign-in state.
        this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

        this.state.authorizeButton.onclick = this.handleAuthClick;
        this.state.signoutButton.onclick = this.handleSignoutClick;
      });
  }

  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      this.state.authorizeButton.style.display = 'none';
      this.state.signoutButton.style.display = 'block';
      this.makeApiCall();
    } else {
      this.state.authorizeButton.style.display = 'block';
      this.state.signoutButton.style.display = 'none';
    }
  }

  handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
  }

  handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
  }

  makeApiCall() {
    gapi.client.people.people
      .get({
        resourceName: 'people/me',
        'requestMask.includeField': 'person.names'
      })
      .then(function(resp) {
        var p = document.createElement('p');
        var name = resp.result.names[0].givenName;
        p.appendChild(document.createTextNode('Hello, ' + name + '!'));
        document.getElementById('content').appendChild(p);
      });
  }

  render() {
    return <div className="GoogleAuthWrapper" />;
  }
}

export default GoogleAuth;
