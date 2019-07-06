import React, { Component } from 'react';
import { Row, Col } from 'antd';

import styles from './css/header.module.css';

export class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Row>
          <Col span={10}>
            <img
              className={styles.image}
              src={require('./images/logo.png')}
              alt=""
            />
          </Col>
          <Col span={14}>
            <h1 className={styles.text}>TIFU</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
