import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({profiles, onAdd, deleteCard, updateProfile, Imageinput}) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {
            Object.keys(profiles).map(key => 
                <CardEditForm key={key} profile={profiles[key]} deleteCard={deleteCard} updateProfile={updateProfile} Imageinput={Imageinput} /> )
        }
        <CardAddForm onAdd={onAdd} Imageinput={Imageinput} />
        </section>        
    );

export default Editor;
