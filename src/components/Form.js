import React, { Component } from 'react';
import '../App.css';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Form extends Component {

  render() {
    const style = {
  margin: 12
};
    return (
      <div>
      <form method="POST" action="http://localhost:8080/simplonBook/addBook">
      <TextField
        hintText="Book title"
        name="titre"
      /><br />
      <TextField
        hintText="Author"
        name="auteur"
      /><br />
      <TextField
          hintText="Publishing date"
          name="anne_de_publication"
      /><br />
      <TextField
        hintText="Number of pages"
        name="pages"
      /><br />
      <TextField
          hintText="Writen in (year)"
          name="date_de_creation"
      /><br />
    <RaisedButton label="Submit" type="submit" primary={true} style={style}/>
  </form>
    </div>
    );
  }

}

export default Form;
