import React, { useEffect, useState } from 'react';
import { FeedbackAPI } from '../services/api';

const Results = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    FeedbackAPI.list().then((res) => setItems(res.data || [])).catch(() => setItems([]));
  }, []);

  return (
    <div className="page">
      <h2>Sentiment Results</h2>
      <ul>
        {items.map((it) => (
          <li key={it.id || Math.random()}>
            <strong>{it.sentiment}</strong>: {it.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;


