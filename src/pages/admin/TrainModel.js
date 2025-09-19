import React, { useState } from 'react';
import { AdminAPI } from '../../services/api';

const TrainModel = () => {
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState('');

  const onTrain = async () => {
    setRunning(true);
    setStatus('Starting training...');
    try {
      const res = await AdminAPI.trainModel({});
      setStatus(res.data?.message || 'Training triggered');
    } catch (e) {
      setStatus('Failed to start training');
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="page">
      <h2>Train ML Model</h2>
      <button onClick={onTrain} disabled={running}>{running ? 'Training...' : 'Start Training'}</button>
      <p>{status}</p>
    </div>
  );
};

export default TrainModel;


