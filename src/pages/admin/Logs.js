import React, { useEffect, useState } from 'react';
import { AdminAPI } from '../../services/api';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    AdminAPI.logs().then((res) => setLogs(res.data || [])).catch(() => setLogs([]));
  }, []);

  return (
    <div className="page">
      <h2>System Logs</h2>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{logs.map((l) => (l.message || JSON.stringify(l))).join('\n')}</pre>
    </div>
  );
};

export default Logs;


