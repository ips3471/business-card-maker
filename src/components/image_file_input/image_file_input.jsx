import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({fileUploader, name, onFileChange}) => {
    const inputRef = useRef();
    const onClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }
    const onChange = async event => {
        const uploaded = await fileUploader.imageUploader(event.target.files[0]);
        onFileChange({
            fileName: uploaded.original_filename,
            fileURL: uploaded.url,
        });
    }
    
    return <>
    <input onChange={onChange} ref={inputRef} className={styles.input} type="file" accept="image/*" name="file" />
    <button onClick={onClick} className={styles.button}>{name || 'No File'}</button>
    </>
}

export default ImageFileInput;