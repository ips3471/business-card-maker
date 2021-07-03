import React from 'react';
import styles from './preview-item.module.css';
import carrot from './carrot.png';

const PreviewItem = ({profile}) => (
    <li className={styles.container}>
            <div className={styles.profileImg}>
                <img className={styles.photo} src={carrot} alt="profile"></img>
            </div>
            <div className={styles.profileText}>
                <div className={styles.profileTitle}>
                    <h2 className={styles.name}>{profile.name}</h2>
                    <span className={styles.company}>{profile.company}</span>
                </div>
                <div className={styles.profileDesc}>
                    <span className={styles.position}>{profile.position}</span>
                    <span className={styles.email}>{profile.email}</span>
                    <span className={styles.comment}>"{profile.comment}"</span>
                </div>
            </div>
        </li>
)

export default PreviewItem;