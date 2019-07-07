import React, { Component } from 'react';
import snoowrap from 'snoowrap';

import Header from './Header';
import CardView from './CardView';
import PostView from './PostView';

export class Main extends Component {
  state = {
    cardView: true,
    posts: []
  };

  componentDidMount() {
    const r = new snoowrap({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      user_agent: process.env.USER_AGENT
    });

    r.getHot('tifu').then(posts => {
      let clean_posts = [];

      posts.forEach(post => {
        let size = post.link_flair_text;

        if (size === 'L' || size === 'M' || size === 'S') {
          let post_obj = {
            id: post.id,
            title: post.title,
            selftext: post.selftext,
            selftext_html: post.selftext_html,
            size: post.link_flair_text,
            nsfw: post.over_18
          };

          clean_posts.push(post_obj);
        }
      });

      this.setState({
        posts: clean_posts
      });
    });
  }

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
            <CardView posts={this.state.posts} changeView={this.changeView} />
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
