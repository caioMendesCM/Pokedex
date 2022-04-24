import React from 'react';
import styles from '../../styles/Background.module.css';

function Background() {
  return (
    <div className={ styles.container }>
      <canvas className={ styles.topPanel } />
      <canvas className={ styles.bottomPanel } />
    </div>
  );
}

export default Background;
