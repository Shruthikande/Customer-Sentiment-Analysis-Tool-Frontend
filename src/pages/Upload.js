import React, { useState } from 'react';
import { FeedbackAPI } from '../services/api';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      await FeedbackAPI.uploadCSV(formData);
      alert('Uploaded successfully');
    } catch (err) {
      alert('Upload failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page">
      <h2>Upload Feedback</h2>
      <form onSubmit={onSubmit}>
        <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <button type="submit" disabled={submitting}>{submitting ? 'Uploading...' : 'Upload CSV'}</button>
      </form>
    </div>
  );
};

export default Upload;


