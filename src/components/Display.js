import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import Form from './Form';


class Display extends Component {
  constructor(props) {
  super(props);
  this.state = {
    open : false
  }
}

handleOpen = () => {
this.setState({open: true});
};

handleClose = () => {
this.setState({open: false});
};

  render() {
    const style = {
  margin: 12,
};
    return (
      <div className="displayBody">
        <ul>{this.props.books.map((book, index) => {
          return(
            <li key={index}>
              {book.titre}-
              {book.auteur}, <br/>
              published : {book.anne_de_publication}, <br/>
              pages : {book.pages}, <br/>
              writen in : {book.date_de_creation} <br/>
              <a href={`http://localhost:8080/simplonBook/${book._id}/delete`}>
                  <RaisedButton label="Delete" primary={true} style={style} />
              </a>
            <RaisedButton onClick={this.handleOpen} label="Edit" primary={true} style={style} />
            <Dialog
              title="Edit book"
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>

              <Form action={`http://localhost:8080/simplonBook/${book._id}/update`}/>
            </Dialog>
            </li>
          )
        })}
      </ul>
      </div>
    );
  }

}

export default Display;
