import React from 'react';
import styles from './preview.module.css';
import PreviewItem from '../preview-item/preview-item';

const Preview = ({profiles}) => (
    <section className={styles.preview}>
        <h1 className={styles.title}>Card Preview</h1>
            <ul>
            {
                profiles.map(profile =>                     
                <PreviewItem 
                    key={profile.id} 
                    profile={profile}
                    />
                )
            }        
            </ul>


    </section>
);

export default Preview;