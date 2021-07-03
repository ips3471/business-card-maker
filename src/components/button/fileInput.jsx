import React from 'react';
import styles from './fileInput.module.css';
const FileInput = ({name}) => (
    <button
    className={styles.fileInput}
    type="file"
    
    >{name}</button>        
    );

export default FileInput;