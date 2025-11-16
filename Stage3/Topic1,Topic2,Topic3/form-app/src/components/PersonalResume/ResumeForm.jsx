import { useState } from 'react';
import styles from './PersonalResume.module.css'
import { isEmailValid, isInternationalPhoneValid } from '../../constant/regex';


const initialFormState = {
            fullName: '',
            email: '',
            phone: '',
            address: '',
            summary: '',
            experience: '',
            education: '',
            skills: ''
    }

export const ResumeForm = ({onSubmit}) => {

    const [form, setForm] = useState(initialFormState);

    // Handle input changes for all form fields
    const handleChange = (e) => {

        const value = e.target.value;
        const name = e.target.name;

        const newForm = {
            ...form,
            [name]: value
        }

        setForm(newForm);
        
        // Update preview in real-time
        // if (onFormChange) {
        //     onFormChange(newForm);
        // }

    };

    // Handle form submission
    const handleSubmit = () => {
        console.log('Form Data:', form);


        if(!isEmailValid(form.email)){
            alert('Please enter a valid email address.');
            return;
        }

        if(!isInternationalPhoneValid(form.phone) ){
            alert('Please enter a valid international phone number.');
            return;
        }

        onSubmit?.(form);
        alert('Resume generated! You can now download it as PDF.');
    };

    // Handle form reset
    const handleReset = () => {
        setForm(initialFormState);
            onSubmit?.(initialFormState);
    };

    return (
        <div className={styles.form}>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Personal Resume Builder</h2>
                <p className={styles.formSubtitle}>Fill out the form to create your professional resume</p>

                <div  className={styles.resumeForm}>
                    
                    {/* Personal Information Section */}
                    <div className={styles.formSection}>
                        <h3 className={styles.sectionTitle}>Personal Information</h3>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="fullName" className={styles.label}>
                                Full Name <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    Email <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john.doe@example.com"
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 123-4567"
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="address" className={styles.label}>
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                placeholder="123 Main St, City, State, ZIP"
                                className={styles.input}
                            />
                        </div>
                    </div>

                    {/* Professional Summary Section */}
                    <div className={styles.formSection}>
                        <h3 className={styles.sectionTitle}>Professional Summary</h3>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="summary" className={styles.label}>
                                About You
                            </label>
                            <textarea
                                id="summary"
                                name="summary"
                                value={form.summary}
                                onChange={handleChange}
                                placeholder="Brief description of your professional background and goals..."
                                className={styles.textarea}
                                rows="4"
                            />
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className={styles.formSection}>
                        <h3 className={styles.sectionTitle}>Work Experience</h3>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="experience" className={styles.label}>
                                Experience Details
                            </label>
                            <textarea
                                id="experience"
                                name="experience"
                                value={form.experience}
                                onChange={handleChange}
                                placeholder="Company Name - Position&#10;Date Range&#10;Job responsibilities and achievements..."
                                className={styles.textarea}
                                rows="6"
                            />
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className={styles.formSection}>
                        <h3 className={styles.sectionTitle}>Education</h3>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="education" className={styles.label}>
                                Education Details
                            </label>
                            <textarea
                                id="education"
                                name="education"
                                value={form.education}
                                onChange={handleChange}
                                placeholder="Degree - Institution Name&#10;Graduation Year&#10;Relevant coursework or achievements..."
                                className={styles.textarea}
                                rows="4"
                            />
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className={styles.formSection}>
                        <h3 className={styles.sectionTitle}>Skills</h3>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="skills" className={styles.label}>
                                Your Skills
                            </label>
                            <textarea
                                id="skills"
                                name="skills"
                                value={form.skills}
                                onChange={handleChange}
                                placeholder="JavaScript, React, Node.js, etc..."
                                className={styles.textarea}
                                rows="3"
                            />
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className={styles.formActions}>
                        <button 
                            type="button" 
                            onClick={handleReset}
                            className={`${styles.btn} ${styles.btnSecondary}`}
                        >
                            Reset Form
                        </button>
                        <button 
                            className={`${styles.btn} ${styles.btnPrimary}`}
                            onClick={handleSubmit}
                        >
                            Generate Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

