import React from 'react';
import styles from './header.module.css';

const Header = () => (
    <section className={styles.header}>
        <img className={styles.header_logo} src={process.env.PUBLIC_URL + 'favicon.ico'} alt="logo" />
        <button className={styles.btn_logout}>Logout</button>
        <h1>Business Card Maker</h1>
    </section>        
    );

export default Header;