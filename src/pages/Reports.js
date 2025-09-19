import React, { useState } from 'react';
import { ReportsAPI } from '../services/api';

const downloadBlob = (blob, filename) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};

const Reports = () => {
  const [downloading, setDownloading] = useState(false);

  const onCSV = async () => {
    setDownloading(true);
    try {
      const res = await ReportsAPI.exportCSV({});
      downloadBlob(res.data, 'sentiment.csv');
    } finally {
      setDownloading(false);
    }
  };

  const onPDF = async () => {
    setDownloading(true);
    try {
      const res = await ReportsAPI.exportPDF({});
      downloadBlob(res.data, 'sentiment.pdf');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="page">
      <h2>Reports</h2>
      <button onClick={onCSV} disabled={downloading}>Download CSV</button>
      <button onClick={onPDF} disabled={downloading}>Download PDF</button>
    </div>
  );
};

export default Reports;


