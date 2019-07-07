import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styles from './css/postview.module.css';

export class PostView extends Component {
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
                />
              </Col>
              <Col span={2} style={{ float: 'right' }} pull={6}>
                <img
                  className={styles.fontSizeBtn}
                  src={require('./images/increase.png')}
                  alt=""
                />
              </Col>
            </div>
            <div className={styles.desktopFont}>
              <Col span={2} style={{ float: 'right' }}>
                <img
                  className={styles.fontSizeBtn}
                  src={require('./images/decrease.png')}
                  alt=""
                />
              </Col>
              <Col span={2} style={{ float: 'right' }}>
                <img
                  className={styles.fontSizeBtn}
                  src={require('./images/increase.png')}
                  alt=""
                />
              </Col>
            </div>
          </Row>
        </header>
      </div>
    );
  }
}

export default PostView;
