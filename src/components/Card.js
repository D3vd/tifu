import React, { Component } from 'react';
import { Col } from 'antd';

import styles from './css/card.module.css';

export class Card extends Component {
  render() {
    return (
      <div>
        <Col xs={24} md={8}>
          <div className={styles.container}>
            <h1>{this.props.title}</h1>
          </div>
        </Col>
      </div>
    );
  }
}

export default Card;
