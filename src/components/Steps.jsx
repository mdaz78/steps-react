import { useState } from 'react';
import Button from './Button';
import StepMessage from './StepMessage';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNextClick = () => {
    if (step >= 3) {
      return;
    }

    setStep((s) => s + 1);
  };

  const handlePreviousClick = () => {
    if (step <= 1) {
      return;
    }

    setStep((s) => s - 1);
  };

  return (
    <div>
      <div
        className='close'
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        &times;
      </div>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className='buttons'>
            <Button
              backgroundColor={'#7950f2'}
              color={'#fff'}
              onClick={handlePreviousClick}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              backgroundColor={'#7950f2'}
              color={'#fff'}
              onClick={handleNextClick}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
