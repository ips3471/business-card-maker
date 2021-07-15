import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({fileUploader, name, onFileChange}) => {
    const [loading, setLoading] = useState(false);
    
    const inputRef = useRef();
    const onButtonClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }

    const onChange = async event => {
        setLoading(true);
        const uploaded = await fileUploader.imageUploader(event.target.files[0]);
        setLoading(false);
        onFileChange({
            fileName: uploaded.original_filename,
            fileURL: uploaded.url,
        });
    }
    
    return (
        <div className={styles.container}>
            <input 
            onChange={onChange} 
            ref={inputRef} 
            className={styles.input} 
            type="file" 
            accept="image/*" 
            name="file" 
            />
            {!loading && (
                <button 
                onClick={onButtonClick} 
                className={`${styles.button} ${name ? styles.uploaded : styles.noUpload}`}
                >
                {name || 'No File'}
                </button>
            )}
            {loading && <div className={styles.loading}></div>}
        </div>
    );
};

export default ImageFileInput;