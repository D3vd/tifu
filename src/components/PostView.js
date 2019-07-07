import React, { Component } from 'react';
import { Row, Col } from 'antd';

import styles from './css/postview.module.css';
import Post from './Post';

export class PostView extends Component {
  state = {
    fontSize: 18
  };

  increaseFont = () => {
    this.setState({
      fontSize: this.state.fontSize + 1
    });
  };

  decreaseFont = () => {
    this.setState({
      fontSize: this.state.fontSize - 1
    });
  };

  render() {
    return (
      <div>
        <header className={styles.headerContainer}>
          <Row>
            <Col span={2}>
              <img
                onClick={this.props.changeView}
                className={styles.backBtn}
                src={require('./images/back.png')}
                alt=""
              />
            </Col>
            <div className={styles.mobileFont}>
              <Col span={2} style={{ float: 'right' }} pull={2}>
                <img
                  className={styles.fontSizeBtn}
                  src={require('./images/decrease.png')}
                  alt=""
                  onClick={this.decreaseFont}
                />
              </Col>
              <Col span={2} style={{ float: 'right' }} pull={6}>
                <img
                  className={styles.fontSizeBtn}
                  src={require('./images/increase.png')}
                  alt=""
                  onClick={this.increaseFont}
                />
              </Col>
            </div>
            <div className={styles.desktopFont}>
              <Col span={2} style={{ float: 'right' }}>
                <img
                  className={styles.fontSizeBtn}
                  src={require('./images/decrease.png')}
                  alt=""
                  onClick={this.decreaseFont}
                />
              </Col>
              <Col span={2} style={{ float: 'right' }}>
                <img
                  className={styles.fontSizeBtn}
                  src={require('./images/increase.png')}
                  alt=""
                  onClick={this.increaseFont}
                />
              </Col>
            </div>
          </Row>
        </header>

        <Post fontSize={this.state.fontSize} />
      </div>
    );
  }
}

export default PostView;
