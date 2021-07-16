import React, { useEffect, useState } from 'react';
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
    const onLogout = () => {
        authService.logout();
    }
    
    useEffect(() => { 
        if (!userId) {
        console.log('no userId');
        cardRepository.syncOff(userId);
        return;
        }
        console.log('on userId');
        cardRepository.cardSync(userId, profiles => {
            setProfiles(profiles);
        });
        return () => {
            cardRepository.syncOff(userId);
            console.log('stopSync');
        }

        }, [userId, cardRepository]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid);
            } else {
                history.push('/');
            }
        });
    }, [authService, userId, history]);

    const updateProfile = (profile) => {
        setProfiles(profiles => {
            const updated = {...profiles};
            updated[profile.id] = profile;
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