import React, { useEffect, useState } from 'react';
import { AnalysisAPI } from '../services/api';

const Trends = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AnalysisAPI.trends().then((res) => setData(res.data || [])).catch(() => {
      setData([
        { date: '2025-09-01', positive: 40, negative: 20, neutral: 40 },
        { date: '2025-09-02', positive: 45, negative: 25, neutral: 30 },
        { date: '2025-09-03', positive: 50, negative: 20, neutral: 30 },
      ]);
    });
  }, []);

  return (
    <div className="page">
      <h2>Trend Analysis</h2>
      {/* Simple, dependency-free fallback rendering */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' }}>Date</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' }}>Positive</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' }}>Neutral</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' }}>Negative</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.date}>
                <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>{row.date}</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '8px', color: '#22c55e' }}>{row.positive}</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '8px', color: '#64748b' }}>{row.neutral}</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '8px', color: '#ef4444' }}>{row.negative}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trends;


