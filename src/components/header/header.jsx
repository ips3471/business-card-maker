import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './header.module.css';

const Header = ({onLogout}) => (
    <header className={styles.header}>
        <img className={styles.header_logo} src={process.env.PUBLIC_URL + 'favicon.ico'} alt="logo" />
        {onLogout && (<button onClick={onLogout} className={styles.btn_logout} >Logout</button>)}
        <h1>Business Card Maker</h1>
    </header>        
    );

export default Header;