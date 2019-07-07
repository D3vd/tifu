import React, { Component } from 'react';

import Header from './Header';
import CardView from './CardView';
import PostView from './PostView';

export class Main extends Component {
  state = {
    cardView: false
  };

  changeView = () => {
    this.setState({
      cardView: !this.state.cardView
    });
  };

  render() {
    return (
      <div>
        {this.state.cardView ? (
          <div>
            <Header />
            <CardView changeView={this.changeView} />
          </div>
        ) : (
          <div>
            <PostView changeView={this.changeView} />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
