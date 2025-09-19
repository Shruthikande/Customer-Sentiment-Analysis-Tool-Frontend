import React, { useState } from 'react';
import { FeedbackAPI, AnalysisAPI } from '../services/api';

const Feedback = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await AnalysisAPI.analyzeText({ text });
      setResult(res.data);
      await FeedbackAPI.create({ text, sentiment: res.data?.sentiment });
    } catch (e1) {
      setResult({ sentiment: 'neutral', confidence: 0.0 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Submit Feedback</h2>
      <form onSubmit={onSubmit}>
        <textarea rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your feedback here..." />
        <div>
          <button type="submit" disabled={loading}>{loading ? 'Analyzing...' : 'Analyze & Save'}</button>
        </div>
      </form>
      {result && (
        <p>Predicted sentiment: <strong>{result.sentiment}</strong> (confidence: {Math.round((result.confidence || 0) * 100)}%)</p>
      )}
    </div>
  );
};

export default Feedback;


