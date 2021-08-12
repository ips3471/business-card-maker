import React from 'react';
import styles from './preview-item.module.css';
import carrot from '../../common/carrot.png';

const DEFAULT_IMAGE = carrot;
const PreviewItem = ({profile}) => {
    const {name, company, position, email, comment, theme, fileURL} = profile;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.container} ${getStyles(theme)}`}>
            <img className={styles.photo} src={url} alt="profile"></img>
            <div className={styles.info}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.company}>{company}</p>
                    <p className={styles.position}>{position}</p>
                    <p className={styles.email}>{email}</p>
                    <p className={styles.comment}>"{comment}"</p>
            </div>
        </li>
    )
}

function getStyles(theme) {
    switch (theme) {
        case 'Dark':
            return styles.dark;
        case 'Light':
            return styles.light;
        case 'Colorful':
            return styles.colorful;
        default: 
            return styles.light;
            // throw new Error(`unknown theme: ${theme}`);
    }
}

export default PreviewItem;