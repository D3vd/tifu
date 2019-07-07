import React, { Component } from 'react';
import snoowrap from 'snoowrap';

import Header from './Header';
import CardView from './CardView';
import PostView from './PostView';
import Loader from './Loader';

export class Main extends Component {
  state = {
    cardView: true,
    posts: [],
    post_id: '',
    loading: true
  };

  componentDidMount() {
    const r = new snoowrap({
      client_id: 'GBg3Z_at_euz0w',
      client_secret: 'EFDb4i7eflDTVfBskbwctNGc5qw',
      user_agent: 'Tifuscript',
      username: 'praw879345',
      password: 'NcotiANgYRogarunDrO'
    });

    r.getHot('tifu').then(posts => {
      let clean_posts = [];

      posts.forEach(post => {
        let size = post.link_flair_text;

        if (size === 'L' || size === 'M' || size === 'S') {
          let post_obj = {
            id: post.id,
            title: post.title,
            size,
            nsfw: post.over_18
          };

          clean_posts.push(post_obj);
        }
      });

      this.setState({
        posts: clean_posts,
        loading: false
      });
    });
  }

  changeView = id => {
    console.log(id);
    this.setState({
      cardView: !this.state.cardView,
      post_id: id
    });
  };

  render() {
    return (
      <div>
        {this.state.cardView ? (
          <div>
            <Header />
            {this.state.loading ? (
              <Loader />
            ) : (
              <CardView posts={this.state.posts} changeView={this.changeView} />
            )}
          </div>
        ) : (
          <div>
            <PostView changeView={this.changeView} id={this.state.post_id} />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
