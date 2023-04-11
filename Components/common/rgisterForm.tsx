import React, { useState } from 'react';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const initialFormValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const steps = [
  { id: 1, title: 'Step 1' },
  { id: 2, title: 'Step 2' },
  { id: 3, title: 'Step 3' },
];

const RegistrationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // handle the form submission here
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {/* Status Bar */}
      <ul>
        {steps.map(step => (
          <li key={step.id} className={currentStep >= step.id ? 'active' : ''}>{step.title}</li>
        ))}
      </ul>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        {currentStep === 1 && (
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formValues.firstName} onChange={handleInputChange} />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formValues.lastName} onChange={handleInputChange} />
            <button type="button" onClick={handleNextStep}>Next</button>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formValues.email} onChange={handleInputChange} />
            <button type="button" onClick={handlePrevStep}>Back</button>
            <button type="button" onClick={handleNextStep}>Next</button>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formValues.password} onChange={handleInputChange} />
            <button type="button" onClick={handlePrevStep}>Back</button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;