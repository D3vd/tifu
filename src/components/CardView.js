import React, { Component } from 'react';

import Card from './Card';

export class CardView extends Component {
  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        {this.props.posts.map(post => {
          return (
            <div onClick={() => this.props.changeView(post.id)} key={post.id}>
              <Card title={post.title} size={post.size} nsfw={post.nsfw} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardView;
