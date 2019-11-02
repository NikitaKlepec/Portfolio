import React from 'react';
import styles from './MyProject.module.css';
import Project from "./Project/Project";


function MyProject() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.name}>
                    <span><h2>Мои проекты</h2></span>
                </div>
                <div className={styles.wrapper}>
                    <Project/>
                    <Project/>
                    <Project/>

                </div>
            </div>
        </div>
    );
}

export default MyProject;
