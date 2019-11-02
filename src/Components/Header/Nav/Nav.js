import React from 'react';
import styles from './Nav.module.css';

function Nav() {
    return (
        <div className={styles.nav}>
            <a>Главная</a>
            <a>Скилы</a>
            <a>Проекты</a>
            <a>Контакты</a>
        </div>

    );
}

export default Nav;