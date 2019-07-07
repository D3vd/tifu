import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styles from './css/postview.module.css';

export class PostView extends Component {
  render() {
    return (
      <div>
        <header className={styles.headerContainer}>
          <Row>
            <Col span={4}>
              <img
                onClick={this.props.changeView}
                className={styles.backBtn}
                src={require('./images/back.png')}
                alt=""
              />
            </Col>
          </Row>
        </header>
      </div>
    );
  }
}

export default PostView;
