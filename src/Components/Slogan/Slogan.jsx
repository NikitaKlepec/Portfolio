import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <span><h3>Рассматриваю варианты удалённой работы</h3></span>
        <button>Нанять меня</button>
      </div>
    </div>
  );
}

export default Slogan;
