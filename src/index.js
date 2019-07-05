//  components react
import React from 'react';
import ReactDOM from 'react-dom';
//  components App.js 
import App from './App';
//  bulma css
import 'bulma/css/bulma.css';
// App css
import './App.css';

//  render html activate components App for id root
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
