import React from 'react';
import styles from '../app/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload Your Files</h1>
      <input type="text" placeholder="Enter some text" className={styles.textBox} />
      <div className={styles.uploadContainer}>
        <div className={styles.uploadBox}>
          <input type="file" id="fileUpload1" className={styles.fileInput} />
          <label htmlFor="fileUpload1" className={styles.uploadLabel}>Upload File</label>
        </div>
        <div className={styles.uploadBox}>
          <input type="file" id="fileUpload2" className={styles.fileInput} />
          <label htmlFor="fileUpload2" className={styles.uploadLabel}>Upload Image</label>
        </div>
        <div className={styles.uploadBox}>
          <input type="file" id="fileUpload3" className={styles.fileInput} />
          <label htmlFor="fileUpload3" className={styles.uploadLabel}>Upload Video</label>
        </div>
      </div>
    </div>
  );
}