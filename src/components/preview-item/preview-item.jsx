import React from 'react';
import styles from './preview-item.module.css';
import carrot from './carrot.png';

const DEFAULT_IMAGE = carrot;
const PreviewItem = ({profile}) => {
    const url = profile.fileURL || DEFAULT_IMAGE;
    const {name, company, position, email, comment, theme} = profile;
    return(
        <li className={`${styles.container} ${getStyles(theme)}`}>
            <div className={styles.profileImg}>
                <img className={styles.photo} src={url} alt="profile"></img>
            </div>
            <div className={styles.profileText}>
                <div className={styles.profileTitle}>
                    <h2 className={styles.name}>{name}</h2>
                    <span className={styles.company}>{company}</span>
                </div>
                <div className={styles.profileDesc}>
                    <span className={styles.position}>{position}</span>
                    <span className={styles.email}>{email}</span>
                    <span className={styles.comment}>"{comment}"</span>
                </div>
            </div>
        </li>
    )
}

function getStyles(theme) {
    switch (theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default: 
            throw new Error(`unknown theme: ${theme}`);
    }
}

export default PreviewItem;