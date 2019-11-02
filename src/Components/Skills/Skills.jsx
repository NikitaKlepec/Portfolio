import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.name}>
                    <span><h2>Мои скилы</h2></span>
                </div>
                <div className={styles.block}>
                <Skill/>
                <Skill/>
                <Skill/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
