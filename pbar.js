import { useState } from 'react';

function Progress() {
  const [progress, setProgress] = useState('60px');

  const increase = () => {
    setProgress('80px');
  };

  const outer = {
    backgroundColor: 'black',
    width: '100px',
    height: '50px',
    position: 'relative',
  };

  const inner = {
    backgroundColor: 'green',
    width: progress,
    height: '50px', // Matching the outer container height
  };

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <div style={outer}>
        <div style={inner}></div>
      </div>
    </div>
  );
}

export default Progress;
