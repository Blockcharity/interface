import React, {useState} from 'react';
import "./start.css";

const Start = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="multi-step-page">
      <h1 className="title">Sign Up as A Charity</h1>
      <p className="step-counter">Step {currentStep} of 5</p>
      <div className="step-content">
        {currentStep === 1 && (
          <div>
            <h2>Step 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pretium purus nec tellus aliquam dapibus.
            </p>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2>Step 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pretium purus nec tellus aliquam dapibus.
            </p>
            <button onClick={handlePrevStep}>Previous</button>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2>Step 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pretium purus nec tellus aliquam dapibus.
            </p>
            <button onClick={handlePrevStep}>Previous</button>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h2>Step 4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pretium purus nec tellus aliquam dapibus.
            </p>
            <button onClick={handlePrevStep}>Previous</button>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
        {currentStep === 5 && (
          <div>
            <h2>Step 5</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pretium purus nec tellus aliquam dapibus.
            </p>
            <button onClick={handlePrevStep}>Previous</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Start;
