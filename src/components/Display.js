import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

class Display extends Component {

  render() {
    const style = {
  margin: 12,
};
    return (
      <div>
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
            <RaisedButton label="Edit" primary={true} style={style} />
                <Divider />
            </li>
          )
        })}
      </ul>
      </div>
    );
  }

}

export default Display;
