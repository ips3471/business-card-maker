import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';


const CardEditForm = ({profile, deleteCard, updateProfile, Imageinput}) => {
const {name, company, position, email, comment} = profile;
const nameRef = useRef();
const companyRef = useRef();
const positionRef = useRef();
const emailRef = useRef();
const commentRef = useRef();
const themeRef = useRef();

    const onDeleteClick = () => {
        deleteCard(profile);
    }
    const onChange = (event) => {
        event.preventDefault();
        updateProfile(
            {...profile, 
                [event.currentTarget.name]: event.currentTarget.value,
            }
        );
    }
    const onThemeChange = (event) => {
        event.preventDefault();
        updateProfile(
            {...profile,
                theme: themeRef.current.value,
            }
        )
        
        
    }
    const onFileChange = (file) => (
        updateProfile(
        {   ...profile, 
            fileName: file.name, 
            fileURL: file.url 
        }
        )
    )

    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" ref={nameRef} name="name" value={name} onChange={onChange} />
            <input className={styles.input} type="text" ref={companyRef} name="company" value={company} onChange={onChange} />
            <select ref={themeRef} className={styles.select} name="theme" onChange={onThemeChange}>
                <option  value="dark">Dark</option>
                <option  value="light">Light</option>
                <option  value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" ref={positionRef} name="position" value={position} onChange={onChange} />
            <input className={styles.input} type="text" ref={emailRef} name="email" value={email} onChange={onChange} />
            <textarea className={styles.textarea} 
            ref={commentRef} name="comment" 
            value={comment} onChange={onChange} 
            
            ></textarea>
            <div className={styles.button} >
            <Imageinput onFileChange={onFileChange} name={name} />
            </div>
            <div className={styles.button}>
            <Button
            name='Delete'
            onClick={onDeleteClick} />
            </div>
        </form>
                
        )};

export default CardEditForm;