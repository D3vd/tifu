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
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      user_agent: process.env.USER_AGENT
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
