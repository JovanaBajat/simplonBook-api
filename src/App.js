import React, { Component } from 'react';
import './App.css';
import request from 'request';

import Form from './components/Form';
import Display from './components/Display';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books : []
    }
  }

  componentDidMount() {
    request('http://localhost:8080/simplonBook', (err, res, body) => {
      if(err) {
        console.log(err);
      }
      this.setState({books : JSON.parse(body)});
      console.log(this.state.books);
    });
  }

  render() {
    return (
        <MuiThemeProvider>
          <div>
          <h1>Welcome to Simplon Books !</h1>
          <Form/>
          <Display books={this.state.books}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
