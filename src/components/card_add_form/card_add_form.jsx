import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({updateProfile, ImageInput}) => {
const nameRef = useRef();
const companyRef = useRef();
const positionRef = useRef();
const emailRef = useRef();
const commentRef = useRef();
const formRef = useRef();
const themeRef = useRef();
const [file, setFile] = useState({fileName: null, fileURL: null});

const onFileChange = file => {
    setFile({
        fileName: file.fileName,
        fileURL: file.fileURL,
    });
};

const onAddClick = (event) => {
event.preventDefault();
if(!nameRef.current.value) {
    alert('insert your name');
    return;
}
const profile = {
    id: Date.now(),
    name: nameRef.current.value,
    company: companyRef.current.value || '',
    position: positionRef.current.value || '',
    email: emailRef.current.value || '',
    comment: commentRef.current.value || '',
    theme: themeRef.current.value || '',
    fileName: file.fileName || null,
    fileURL: file.fileURL || null,
}
formRef.current.reset();
updateProfile(profile);
setFile({
    fileName: null,
    fileURL: null,
})
};
    return (
        <form
        className={styles.form}
        ref={formRef}>
            <input 
            ref={nameRef} 
            className={styles.input} 
            type="text" 
            name="name"
            placeholder="name"
            required />
            <input 
            ref={companyRef} 
            className={styles.input} 
            type="text" 
            name="company"
            placeholder="company" />
            <select 
            ref={themeRef}
            className={styles.select}
            defaultValue="Light">
                <option placeholder="Dark">Dark</option>
                <option placeholder="Light">Light</option>
                <option placeholder="Colorful">Colorful</option>
            </select>
            <input 
            ref={positionRef} 
            className={styles.input} 
            type="text" 
            name="position"
            placeholder="position" />
            <input 
            ref={emailRef} 
            className={styles.input} 
            type="text" 
            name="email"
            placeholder="email" />
            <textarea 
            ref={commentRef} 
            className={styles.textarea} 
            name="comment"
            placeholder="comment"
            />
            <div className={styles.button}>
                <ImageInput onFileChange={onFileChange} name={file.fileName} />
            </div>
            <div 
            className={styles.button}>
                <Button
                name='Add'
                onClick={onAddClick} />
            </div>
        </form>
                
        )};

export default CardAddForm;