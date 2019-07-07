import React, { Component } from 'react';
import { Row, Col } from 'antd';

import styles from './css/card.module.css';

export class Card extends Component {
  state = {
    sizeColor: '#000'
  };

  componentDidMount() {
    if (this.props.size === 'L') {
      this.setState({
        sizeColor: '#ffbc00'
      });
    } else if (this.props.size === 'M') {
      this.setState({
        sizeColor: '#fd7f09'
      });
    } else if (this.props.size === 'S') {
      this.setState({
        sizeColor: '#2b87f3'
      });
    }
  }

  render() {
    return (
      <div>
        <Col xs={24} md={8}>
          <div className={styles.container}>
            <h1 className={styles.title}>{this.props.title}</h1>
            <Row>
              <Col span={12}>
                <div
                  className={styles.size}
                  style={{ backgroundColor: this.state.sizeColor }}
                >
                  {this.props.size}
                </div>
              </Col>
              <div
                style={
                  this.props.nsfw ? { display: 'block' } : { display: 'none' }
                }
              >
                <Col span={12}>
                  <div className={styles.nsfw}>NSFW</div>
                </Col>
              </div>
            </Row>
          </div>
        </Col>
      </div>
    );
  }
}

export default Card;
