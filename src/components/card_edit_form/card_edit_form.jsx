import React from 'react';
import Button from '../button/button';
import FileInput from '../button/fileInput';
import styles from './card_edit_form.module.css';


const CardEditForm = ({profile}) => {
    const onSubmit = () => {
        console.log('onSubmit');
    }
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" placeholder="name" />
            <input className={styles.input} type="text" name="company" placeholder="company" />
            <select className={styles.select}>
                <option  value="dark">Dark</option>
                <option  value="light">Light</option>
                <option  value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="position" placeholder="position" />
            <input className={styles.input} type="text" name="email" placeholder="email" />
            <textarea className={styles.textarea} 
            name="comment" 
            placeholder="comment" 
            rows="2"
            
            ></textarea>
            <div className={styles.button}>
            <FileInput
            name='Image' />
            </div>
            <div className={styles.button}>
            <Button
            name='Delete'
            onClick={onSubmit} />
            </div>
        </form>
                
        )};

export default CardEditForm;