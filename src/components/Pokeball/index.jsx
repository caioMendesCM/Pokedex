import React from 'react';
import styles from '../../styles/Pokeball.module.css';

function Pokeball() {
  return (
    <div className={ styles.pokeball }>
      <canvas className={ styles.topArch } />
      <div className={ styles.middle }>
        <canvas className={ styles.leftBar }/>
        <div className={ styles.buttonArea }>
          <canvas className={ styles.blackRing }/>
          <canvas className={ styles.whiteCircle }/>
          <button />
        </div>
        <canvas className={ styles.rightBar }/>
      </div>
      <canvas className={ styles.bottomArch }/>
    </div>
  )
}

export default Pokeball