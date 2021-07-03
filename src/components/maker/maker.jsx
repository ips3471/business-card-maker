import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';


const Maker = ({authService}) => {
    const [ profiles, setProfiles ] = useState([
        {
            id:'1', 
            name:'ellie', 
            company:'Samsung Electronics', 
            position:'software Engineer', 
            email:'dream.coder.ellie@gmail.com', 
            comment:'Do not forget to code your dream'
        },
        {
            id:'2', 
            name:'Bob', 
            company:'Uber', 
            position:'Senior Software Engineer', 
            email:'bog@uber.com', comment:'I love coding'
        },
        {
            id:'3', 
            name:'Chris', 
            company:'instagram', 
            position:'Product Manager', 
            email:'christ@instagram.com', 
            comment:'Design your dream'},
    ]
    );


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
                <div className={styles.editor}><Editor profiles={profiles}/></div>
                <div className={styles.preview}><Preview profiles={profiles} /></div>
            </div>
            <Footer className={styles.footer} />
        </section>
        
    )
};

export default Maker;