import React, { Component } from 'react';
import snoowrap from 'snoowrap';

export class Post extends Component {
  state = {
    title: '',
    content: ''
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
          content: post.selftext_html
        });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div style={{ fontSize: this.props.fontSize + 'px' }}>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </div>
      </div>
    );
  }
}

export default Post;
