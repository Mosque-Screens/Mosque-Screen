import React, { Component } from 'react';
import './Admin.css';
import Popup from '../components/popup/Popup';
import { SortablePane, Pane } from 'react-sortable-pane';
import Img1 from '../../screenshots/BTM-7days.png';
import Img2 from '../../screenshots/BTM-Black-Screen.png';
import Img3 from '../../screenshots/HadithOfTheDayView.png';
import Img4 from '../../screenshots/SingleViewScreenshot.png';
import { hoverStyle, paneStyle } from './styles';
import SimpleVertical from '../components/panes/example';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false, hover: false, panels: SimpleVertical() };
    this.toggleHover = this.toggleHover.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }
  componentDidMount() {}
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
      panes: [0, 1, 2]
    });
  }
  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }
  render() {
    const list = [Img1, Img2, Img3, Img4];
    const panes = list.map((val, index) => (
      <Pane
        key={index}
        defaultSize={{ width: 100, height: 120 }}
        style={paneStyle}
      >
        <img src={val} alt="slide" />
      </Pane>
    ));
    const images = list.map((val, index) => (
      <img
        className="child"
        key={index}
        src={val}
        alt="slide"
        onMouseOver={this.toggleHover}
        style={this.hover ? { marginBottom: '0px' } : { marginBottom: '50px' }}
      />
    ));
    return (
      <div>
        <h1>
          Design Menu <br />
        </h1>
        <div className="AdminContent">{images}</div>
        <div className="SlideContent">{this.state.panels}</div>
      </div>
    );
  }
}

export default Admin;
