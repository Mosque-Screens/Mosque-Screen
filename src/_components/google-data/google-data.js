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
      spreadsheetId: '17I6PybF41qf-QTo48wdpUp8liUgowVI0oP9AmJWv034',
      sheetRanges: [
        "'Prayer times'!A:M",
        "'App config'!A:F",
        "'Hadith of the day'!A:B"
      ],
      spreadsheetData: null,
      transformedData: {
        prayerData: {
          title: null,
          table: null,
          data: null
        },
        appConfig: {
          title: null,
          table: null,
          data: null
        },
        hadithOfTheDayData: {
          title: null,
          table: null,
          data: null
        }
      }
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

  transformValueListToTable(valueList) {
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

  transformValueListToObject(sheetName, valueList) {
    var data = [];
    for (var i = 1; i < valueList.length; i++) {
      var row = {};
      row['__cellIndex'] = {
        row: i
      };
      for (var x = 0; x < valueList[i].length; x++) {
        var columnName = valueList[0][x] ? valueList[0][x] : x;
        row[columnName] = valueList[i][x];
        row['__cellIndex'][columnName] = `'${sheetName}'!${String.fromCharCode(
          65 + x
        )}${i}`;
      }
      data.push(row);
    }
    return data;
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
      if (
        this.state.spreadsheetData &&
        !this.state.transformedData.prayerData.title
      ) {
        this.setState(() => ({
          transformedData: {
            prayerData: {
              title: <h2>Prayer data</h2>,
              table: this.transformValueListToTable(
                this.state.spreadsheetData.valueRanges[0].values
              ),
              data: this.transformValueListToObject(
                'Prayer times',
                this.state.spreadsheetData.valueRanges[0].values
              )
            },
            appConfig: {
              title: <h2>App config</h2>,
              table: this.transformValueListToTable(
                this.state.spreadsheetData.valueRanges[1].values
              ),
              data: this.transformValueListToObject(
                'App config',
                this.state.spreadsheetData.valueRanges[1].values
              )
            },
            hadithOfTheDayData: {
              title: <h2>Hadith of the day</h2>,
              table: this.transformValueListToTable(
                this.state.spreadsheetData.valueRanges[2].values
              ),
              data: this.transformValueListToObject(
                'Hadith of the day',
                this.state.spreadsheetData.valueRanges[2].values
              )
            }
          }
        }));
      }
    } else {
      AuthenticatedMessage = (
        <button onClick={this.handleAuthClick}>Sign in with Google</button>
      );
    }

    console.log(this.state.transformedData);

    return (
      <div className="GoogleDataWrapper">
        {AuthenticatedMessage}
        {this.state.transformedData.appConfig.title}
        {this.state.transformedData.appConfig.table}
        {this.state.transformedData.prayerData.title}
        {this.state.transformedData.prayerData.table}
        {this.state.transformedData.hadithOfTheDayData.title}
        {this.state.transformedData.hadithOfTheDayData.table}
      </div>
    );
  }
}

export default GoogleData;
