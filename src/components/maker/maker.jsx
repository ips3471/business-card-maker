import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';


const Maker = ({authService, Imageinput}) => {
    const [ profiles, setProfiles ] = useState({
        1: {
            id: 1,
            name:'ellie', 
            company:'Samsung Electronics', 
            position:'software Engineer', 
            email:'dream.coder.ellie@gmail.com', 
            comment:'Do not forget to code your dream',
            fileURL: null,
            fileName: null,
            theme: 'dark',
        },
        2: {
            id: 2,
            name:'Bob', 
            company:'Uber', 
            position:'Senior Software Engineer', 
            email:'bog@uber.com', 
            comment:'I love coding',
            fileURL: null,
            fileName: null,
            theme: 'light',
        },
        3: {
            id: 3,
            name:'Chris', 
            company:'instagram', 
            position:'Product Manager', 
            email:'christ@instagram.com', 
            comment:'Design your dream',
            fileURL: null,
            fileName: null,
            theme: 'colorful',
        }
    }
    );
    
    const updateProfile = (profile) => {
        setProfiles(profiles => {
            const updated = {...profiles};
            updated[profile.id] = profile;
            return updated;
        })
    }
    

    const deleteCard = (profile) => {
        setProfiles(profiles => {
            const updated = {...profiles};
            delete updated[profile.id];
            return updated;
        });
        }

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
const onAdd = profile => {
    setProfiles(profiles => {
        const updated = {...profiles};
        updated[profile.id] = profile;
        return updated;
    });
}

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} className={styles.header} />
            <div className={styles.body}>
                <div className={styles.editor}><Editor profiles={profiles} onAdd={onAdd} deleteCard={deleteCard} updateProfile={updateProfile} Imageinput={Imageinput}/></div>
                <div className={styles.preview}><Preview profiles={profiles} /></div>
            </div>
            <Footer className={styles.footer} />
        </section>
        
    )
};

export default Maker;