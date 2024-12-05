import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useCargoForm } from '../../hooks/useCargoForm';
import StepRoute from './steps/StepRoute';
import StepSpecifications from './steps/StepSpecifications';
import StepDeadlines from './steps/StepDeadlines';

const steps = [
  { id: 'route', name: 'Rota', description: 'Origem e destino da carga' },
  { id: 'specs', name: 'Especificações', description: 'Detalhes e requisitos' },
  { id: 'deadlines', name: 'Prazos', description: 'Datas e valores' },
];

interface CargoFormStepsProps {
  onComplete: () => void;
}

const CargoFormSteps: React.FC<CargoFormStepsProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, handleChange, handleSubmit, formError } = useCargoForm(undefined, onComplete);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <StepRoute formData={formData} onChange={handleChange} />;
      case 1:
        return <StepSpecifications formData={formData} onChange={handleChange} />;
      case 2:
        return <StepDeadlines formData={formData} onChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full flex-col">
      <nav aria-label="Progress" className="px-8 pt-4">
        <ol role="list" className="flex items-center justify-between">
          {steps.map((step, index) => (
            <li key={step.name} className="relative flex flex-1 flex-col items-center">
              {index !== 0 && (
                <div
                  className={cn(
                    'absolute left-0 right-0 top-4 h-0.5 -translate-y-1/2',
                    index <= currentStep ? 'bg-green-600' : 'bg-gray-200'
                  )}
                  aria-hidden="true"
                />
              )}
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full border-2',
                  index < currentStep
                    ? 'border-green-600 bg-green-600 text-white'
                    : index === currentStep
                    ? 'border-green-600 bg-white'
                    : 'border-gray-300 bg-white'
                )}
              >
                {index < currentStep ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <div className="mt-2 flex flex-col items-center">
                <span
                  className={cn(
                    'text-sm font-medium',
                    index <= currentStep ? 'text-green-600' : 'text-gray-500'
                  )}
                >
                  {step.name}
                </span>
                <span className="text-xs text-gray-500">{step.description}</span>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-8 flex-1 px-8">
        <form onSubmit={(e) => e.preventDefault()} className="h-full">
          {renderStepContent()}
        </form>
      </div>

      {formError && (
        <div className="mx-8 mt-4 rounded-md bg-red-50 p-4 text-sm text-red-700">{formError}</div>
      )}

      <div className="mt-auto border-t bg-gray-50 p-6">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={previousStep}
            className={cn(
              'rounded-lg px-4 py-2 text-sm font-medium',
              currentStep === 0
                ? 'invisible'
                : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            )}
          >
            Anterior
          </button>
          {currentStep === steps.length - 1 ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Concluir
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Próximo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CargoFormSteps;