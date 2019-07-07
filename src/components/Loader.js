import React, { Component } from 'react';
import styles from './css/loader.module.css';

export class Loader extends Component {
  render() {
    return <div className={styles.loader} />;
  }
}

export default Loader;
