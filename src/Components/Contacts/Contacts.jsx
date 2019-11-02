import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <span><h3>Контакты</h3></span>
                <div className={styles.form}>
                    <form>
                        <p>
                            <input type="text" placeholder="Введите имя"/>
                        </p>
                      <p>
                      <input type="email" placeholder="Введите адрес электронной почты"/>
                       </p>
                        <textarea>
                        </textarea>
                </form>
            </div>
            <button>
                ОТПРАВИТЬ
            </button>
        </div>
        </div>
    );
}

export default Contacts;
