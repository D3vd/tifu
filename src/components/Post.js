import React, { Component } from 'react';
import snoowrap from 'snoowrap';

import styles from './css/post.module.css';
import Loader from './Loader';

export class Post extends Component {
  state = {
    title: '',
    content: '',
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

    r.getSubmission(this.props.id)
      .fetch()
      .then(post => {
        this.setState({
          title: post.title,
          content: post.selftext_html,
          loading: !this.state.loading
        });
      });
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div>
            <h1 className={styles.title}>{this.state.title}</h1>
            <div style={{ fontSize: this.props.fontSize + 'px' }}>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: this.state.content }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
