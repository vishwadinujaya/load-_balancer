import React from 'react';

const TestComponent = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'red',
      color: 'white',
      fontSize: '24px',
      zIndex: 9999
    }}>
      TEST COMPONENT RENDERED SUCCESSFULLY
    </div>
  );
}

export default TestComponent;
