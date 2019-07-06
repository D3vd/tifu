import React, { Component } from 'react';

import Header from './Header';
import CardView from './CardView';

export class Main extends Component {
  state = {
    cardView: true
  };

  render() {
    return (
      <div>
        {this.state.cardView ? (
          <div>
            <Header />
            <CardView />
          </div>
        ) : (
          <div>
            <h1>Post View</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Main;
