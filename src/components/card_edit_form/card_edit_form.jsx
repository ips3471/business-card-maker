import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';


const CardEditForm = ({profile, deleteCard, updateProfile, ImageInput}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const positionRef = useRef();
    const emailRef = useRef();
    const commentRef = useRef();
    const themeRef = useRef();
    
    const {name, company, position, email, comment, theme, fileName} = profile;

    const onFileChange = (file) => {
        updateProfile({
            ...profile, 
            fileName: file.name, 
            fileURL: file.url
        });
    };

    const onContentChange = (event) => {
        if (event.currentTarget === null) {
            return;
        }
        event.preventDefault();
        updateProfile({
            ...profile, 
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    const onDeleteClick = () => {
        deleteCard(profile);
    }

    return (
        <form className={styles.form}>
            <input 
            className={styles.input}
            type="text" 
            name="name" 
            ref={nameRef} 
            value={name} 
            onChange={onContentChange} 
            />
            <input 
            className={styles.input}
            type="text" 
            name="company" 
            ref={companyRef} 
            value={company} 
            onChange={onContentChange} />
            <select 
            className={styles.select}
            name="theme" 
            ref={themeRef}
            value={theme} 
            onChange={onContentChange}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="colorful">Colorful</option>
            </select>
            <input 
            className={styles.input}
            type="text" 
            name="position" 
            ref={positionRef} 
            value={position} 
            onChange={onContentChange} />
            <input 
            className={styles.input}
            type="text" 
            name="email" 
            ref={emailRef} 
            value={email} 
            onChange={onContentChange} />
            <textarea 
            className={styles.textarea}
            ref={commentRef} 
            name="comment" 
            value={comment} 
            onChange={onContentChange} 
            />
            <div className={styles.file}>
            <ImageInput 
            name={fileName} 
            onChange={onFileChange} />
            </div>
            <div 
            className={styles.delete}>
            <Button
            name='Delete'
            onClick={onDeleteClick} />
            </div>
        </form>
        )};

export default CardEditForm;