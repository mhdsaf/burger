import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header'
import Cards from './containers/Cards/Cards'
import Details from './containers/Details/Details'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path='/:name' component={Details}/>
              <Route path='/' render={()=>{return <React.Fragment><Header/><Cards/></React.Fragment>}}/>
            </Switch>
          </Layout>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;