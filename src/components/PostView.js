import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styles from './css/postview.module.css';

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

        <div style={{ fontSize: this.state.fontSize + 'px' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, quo.
          Explicabo dolore autem minima non accusamus eaque voluptatem,
          consequuntur voluptas excepturi quia. Libero praesentium aut mollitia
          recusandae accusantium tenetur minima ullam corrupti facilis maxime
          veniam maiores sit, expedita incidunt temporibus odit officiis! Illum
          obcaecati atque similique ut, accusamus corrupti facilis quaerat esse
          itaque laboriosam vel nesciunt saepe cumque. Accusantium veritatis
          quas, in repudiandae enim odit blanditiis sint, modi corrupti est quos
          nostrum exercitationem quia natus repellat minus fugit temporibus!
          Ipsam dolor temporibus quis, corrupti dicta numquam error laborum
          voluptas maxime voluptatum aspernatur excepturi fuga nam aliquam
          quidem repudiandae hic ex minus nostrum? Non nostrum natus tempora
          ipsa eveniet illum eligendi, officiis similique sapiente voluptates
          reiciendis facere necessitatibus voluptate quibusdam velit ducimus
          eum, enim atque hic? Unde sapiente tempora, deserunt omnis recusandae
          eos aliquam minima quos, doloremque dolor nam.
        </div>
      </div>
    );
  }
}

export default PostView;
