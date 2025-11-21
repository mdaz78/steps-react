import React from 'react';

const StepMessage = ({ step, children }) => {
  return (
    <p className='message'>
      <span>Step {step}</span>
      {children}
    </p>
  );
};

export default StepMessage;
