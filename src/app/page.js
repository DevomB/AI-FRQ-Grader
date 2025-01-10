"use client";

import { useState } from 'react';
import styles from '../app/styles/Home.module.css';

export default function Home() {
  const [text, setText] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState({
    file: null,
    image: null,
    video: null,
  });

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    setUploadedFiles((prevFiles) => ({
      ...prevFiles,
      [type]: file,
    }));
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Text:', text);
    console.log('Uploaded Files:', uploadedFiles);
  };

  const triggerFileInput = (inputId) => {
    document.getElementById(inputId).click();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload Your Files</h1>
      <div className={styles.textBoxContainer}>
        <input
          type="text"
          placeholder="Enter some text"
          className={styles.textBox}
          value={text}
          onChange={handleTextChange}
        />
        <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
      </div>
      <div className={styles.uploadContainer}>
        <div className={styles.uploadBox} onClick={() => triggerFileInput('fileUpload1')}>
          <input
            type="file"
            id="fileUpload1"
            className={styles.fileInput}
            onChange={(e) => handleFileChange(e, 'file')}
          />
          <label htmlFor="fileUpload1" className={styles.uploadLabel}>Upload File</label>
        </div>
        <div className={styles.uploadBox} onClick={() => triggerFileInput('fileUpload2')}>
          <input
            type="file"
            id="fileUpload2"
            className={styles.fileInput}
            onChange={(e) => handleFileChange(e, 'image')}
          />
          <label htmlFor="fileUpload2" className={styles.uploadLabel}>Upload Image</label>
        </div>
        <div className={styles.uploadBox} onClick={() => triggerFileInput('fileUpload3')}>
          <input
            type="file"
            id="fileUpload3"
            className={styles.fileInput}
            onChange={(e) => handleFileChange(e, 'video')}
          />
          <label htmlFor="fileUpload3" className={styles.uploadLabel}>Upload Video</label>
        </div>
      </div>
    </div>
  );
}