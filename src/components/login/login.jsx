import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
import { useHistory } from 'react-router-dom';

const Login = ({authService}) => {
    const history = useHistory();
    const goToMaker = userId => {
        history.push({
            pathname: '/maker',
            state: { id: userId},
        });
    }

    const onLogin = event => {
        authService
        .login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            user && goToMaker(user.uid);
        });
    })

    const onLogout = () => {

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