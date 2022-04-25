import React from 'react';
import Background from '../../components/Background';
import Pokeball from '../../components/Pokeball';
import styles from '../../styles/Home.module.css';

function Home() {
  return (
    <main>
      <Pokeball />
      <Background />
    </main>
  )
}

export default Home