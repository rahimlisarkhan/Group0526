import { useState } from 'react';
import styles from './PersonalResume.module.css'
import { ResumeForm } from './ResumeForm'
import { ResumePreview } from './ResumePreview'

export const PersonalResume = () => {

    const [data, setData] = useState();

    console.log("data", data);

    // Update preview in real-time
    const onSubmit = (formData) => {
        setData(formData);
    }

    return (
        <div className={styles.content}>
            <ResumeForm onSubmit={onSubmit} />
            <ResumePreview {...data} />
        </div>
    )
}