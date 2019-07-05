//  react components 
import React, { Component } from 'react';
//  Header components
import Header from 'components/Header.react'

import Footer from 'components/Footer.react'
//  Dashboard pages
import Dashboard from 'pages/Dashboard.react'


// render activate Header components and Dashboard
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App-container">
          <Dashboard />
        </div>
        <div className="App-container">
          <Dashboard />
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
