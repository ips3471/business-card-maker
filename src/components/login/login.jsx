import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = ({authService}) => {
    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
        .then(console.log)
    }

    return (
        <section className={styles.container}>
            <Header />
            <h1 className={styles.title_login}>Login</h1>
            <ul>
                <li><button className={styles.btn_login} onClick={onLogin}>Google</button></li>
                <li><button className={styles.btn_login} onClick={onLogin}>Github</button></li>
            </ul>
            <Footer />
        </section>

    )
    
};

export default Login;