import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';


const Maker = ({authService, ImageInput, cardRepository}) => {
    const historyState = useHistory().location.state;
    const [ profiles, setProfiles ] = useState({});
    const [ userId, setUserId ] = useState(historyState && historyState.id);
    const history = useHistory();
    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);
    
    useEffect(() => { 
        if (!userId) {
        cardRepository.syncOff(userId);
        return;
        }
        cardRepository.cardSync(userId, profiles => {
            setProfiles(profiles);
        });
        return () => {
            cardRepository.syncOff(userId);
        }
        }, [userId, cardRepository]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid);
            } else {
                history.push('/card-maker');
            }
        });
    }, [authService, userId, history]);

    const updateProfile = (profile) => {
        setProfiles(profiles => {
            const updated = {...profiles};
            updated[profile.id] = profile;
            console.log(updated);
            return updated;
        });
        cardRepository.saveCard(userId, profile);
    }

    const deleteCard = (profile) => {
        setProfiles(profiles => {
            const updated = {...profiles};
            delete updated[profile.id];
            return updated;
        });
        cardRepository.removeCard(userId, profile);
    }
    
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor 
                profiles={profiles} 
                deleteCard={deleteCard} 
                updateProfile={updateProfile} 
                ImageInput={ImageInput}
                />
                <Preview 
                profiles={profiles} 
                />
            </div>
            <Footer />
        </section>
        
    )
};

export default Maker;