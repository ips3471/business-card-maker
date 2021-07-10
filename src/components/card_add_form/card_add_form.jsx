import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({onAdd, Imageinput}) => {
    const nameRef = useRef();
const companyRef = useRef();
const positionRef = useRef();
const emailRef = useRef();
const commentRef = useRef();
const formRef = useRef();
const themeRef = useRef();
const [file, setFile] = useState({fileName: null, fileURL: null});

const onFileChange = file => {
    console.log(file);
    setFile({
        fileName: file.fileName,
        fileURL: file.fileURL,
    })
}
const onAddClick = (event) => {
event.preventDefault();
const profile = {
id: Date.now(),
name: nameRef.current.value,
company: companyRef.current.value,
position: positionRef.current.value,
email: emailRef.current.value,
comment: commentRef.current.value,
theme: themeRef.current.value,
fileName: file.fileName,
fileURL: file.fileURL,
}
formRef.current.reset();
setFile({
    fileName: null,
    fileURL: null,
})
onAdd(profile);
}
    return (
        <form
        className={styles.form}
        ref={formRef}>
            <input 
            ref={nameRef} 
            className={styles.input} 
            type="text" 
            name="name"
            placeholder="name" />
            <input 
            ref={companyRef} 
            className={styles.input} 
            type="text" 
            name="company"
            placeholder="company" />
            <select 
            ref={themeRef} 
            className={styles.select}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="colorful">Colorful</option>
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
            placeholder="comment">
            </textarea>
            <div 
            className={styles.button}>
                <Imageinput onFileChange={onFileChange} name={file.fileName} />
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