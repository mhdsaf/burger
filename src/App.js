import React, { Component } from 'react';
import Homepage from './containers/homepage'
import Fetch from './components/fetch'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Homepage></Homepage>
        <Fetch></Fetch>
      </React.Fragment>
    );
  }
}
export default App;