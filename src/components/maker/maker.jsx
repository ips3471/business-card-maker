import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';


const Maker = ({authService}) => {
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }
    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        })
    })
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} className={styles.header} />
            <div className={styles.body}>
                <Editor />
                <Preview />
            </div>
            <Footer className={styles.footer} />
        </section>
        
    )
};

export default Maker;