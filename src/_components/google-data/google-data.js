import React, { Component } from 'react';

class GoogleData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gapi: window.gapi,
      apiKey: 'AIzaSyDm5iZU5kvCRbJKeh5MrO5sDH0bBgXlpD4',
      discoveryDocs: [
        'https://people.googleapis.com/$discovery/rest?version=v1',
        'https://sheets.googleapis.com/$discovery/rest?version=v4'
      ],
      clientId:
        '264729051003-tmkiqo3dsnn2q957mmro8e9ds5i5516r.apps.googleusercontent.com',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
      userName: null,
      isSignedIn: false,
      spreadsheetId: '1yVlGjnEhKLi5DSOuJMm7-ec5-iFvuiR7WkbzMdbFP9s',
      sheetRanges: [
        "'Prayer times'!A:M",
        "'App config'!A:F",
        "'Hadith of the day'!A:B"
      ],
      spreadsheetData: null
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
      this.getSpreadsheet();
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

  getSpreadsheet() {
    var _this = this;
    window.gapi.client.sheets.spreadsheets.values
      .batchGet({
        spreadsheetId: this.state.spreadsheetId,
        ranges: this.state.sheetRanges
      })
      .then(response => {
        _this.setState(() => ({
          spreadsheetData: response.result
        }));
        console.log(response.result);
      });
  }

  transformValueList(valueList) {
    var rows = [];

    for (var i = 1; i < valueList.length; i++) {
      var columns = [];
      for (var x = 0; x < valueList[i].length; x++) {
        columns.push(<td key={`${i}-${x}`}>{valueList[i][x]}</td>);
      }
      rows.push(<tr key={i}>{columns}</tr>);
    }

    var headings = [];

    for (var y = 0; y < valueList[0].length; y++) {
      headings.push(<th key={`0-${y}`}>{valueList[0][y]}</th>);
    }

    return (
      <table>
        <thead>
          <tr key={Math.random().toString()}>{headings}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  render() {
    var AuthenticatedMessage = null;
    var PrayerData = {
      title: null,
      table: null
    };
    var AppConfig = {
      title: null,
      table: null
    };

    var HadithOfTheDayData = {
      title: null,
      table: null
    };

    if (this.state.isSignedIn) {
      AuthenticatedMessage = (
        <div className="AuthenticatedMessage">
          <p>Hi {this.state.userName}.</p>
          <button onClick={this.handleSignoutClick}>Sign out</button>
        </div>
      );
      if (this.state.spreadsheetData) {
        PrayerData = {
          title: <h2>Prayer data</h2>,
          table: this.transformValueList(
            this.state.spreadsheetData.valueRanges[0].values
          )
        };
        AppConfig = {
          title: <h2>App config</h2>,
          table: this.transformValueList(
            this.state.spreadsheetData.valueRanges[1].values
          )
        };
        HadithOfTheDayData = {
          title: <h2>App config</h2>,
          table: this.transformValueList(
            this.state.spreadsheetData.valueRanges[2].values
          )
        };
      }
    } else {
      AuthenticatedMessage = (
        <button onClick={this.handleAuthClick}>Sign in with Google</button>
      );
    }

    return (
      <div className="GoogleDataWrapper">
        {AuthenticatedMessage}
        {AppConfig.title}
        {AppConfig.table}
        {PrayerData.title}
        {PrayerData.table}
        {HadithOfTheDayData.title}
        {HadithOfTheDayData.table}
      </div>
    );
  }
}

export default GoogleData;
