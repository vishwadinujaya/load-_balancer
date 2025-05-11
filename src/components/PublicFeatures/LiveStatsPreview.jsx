import React, { useEffect, useState } from 'react';
import app from '../../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import './PublicFeatures.css';

const LiveStatsPreview = () => {
  const [containerCount, setContainerCount] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  useEffect(() => {
    const db = getDatabase(app);
    const containersRef = ref(db, 'containers');

    const unsubscribe = onValue(containersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const containers = Object.values(data);
        setContainerCount(containers.length);
        const weightSum = containers.reduce((sum, c) => sum + (c.weight || 0), 0);
        setTotalWeight(weightSum);
      } else {
        setContainerCount(0);
        setTotalWeight(0);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="live-stats-preview" className="live-stats-preview" style={{padding: '3rem', backgroundColor: '#1e2a38', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', color: '#00ffcc', maxWidth: '600px', margin: '2rem auto'}}>
      <h1 style={{fontSize: '3.5rem', marginBottom: '1rem', color: '#00d9ff', textAlign: 'center'}}>Live Stats Preview</h1>
      <p style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>Number of containers onboard: <strong>{containerCount}</strong></p>
      <p style={{fontSize: '1.8rem'}}>Total weight: <strong>{totalWeight.toFixed(2)} kg</strong></p>
    </section>
  );
};

export default LiveStatsPreview;
