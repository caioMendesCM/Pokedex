import React, { useState } from 'react';
import styles from '../../styles/Pokeball.module.css';

function Pokeball() {

  const [isActive, setIsActive] = useState(false);

  const activatePokeball = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={ `${styles.pokeball} ${isActive ? styles.active : styles.inactive}` }>
      <canvas className={ `${styles.topArch} ${isActive ? styles.active : styles.inactive}` } />
      <div className={ `${styles.bottomPiece} ${isActive ? styles.active : styles.inactive}` }>
        <div className={ styles.middle }>
          <canvas className={ styles.leftBar }/>
          <div className={ styles.buttonArea }>
            <canvas className={ styles.blackRing }/>
            <canvas className={ styles.whiteCircle }/>
            <button onClick={ () => activatePokeball() }/>
          </div>
          <canvas className={ styles.rightBar }/>
        </div>
        <canvas className={ styles.bottomArch }/>
      </div>
    </div>
  )
}

export default Pokeball