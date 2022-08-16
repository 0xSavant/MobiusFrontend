import StepOne from "components/CreateFundraiser/StepOne";
import StepTwo from "components/CreateFundraiser/StepTwo";
import DashboardLayout from "components/DashboardLayout";
import { useState } from "react";

 export default function CreateFundraiser() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<number | null>(null);

  const renderStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <StepOne
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            onContinue={() => setStep((s) => s + 1)}
          />
        );

      case 2:
        return <StepTwo />;

      default:
        return <Congratulation />;
    }
  };

  return (
    <DashboardLayout>
      {step < 3 && <h1>Create a Fundraiser</h1>}
      {renderStep(step)}
    </DashboardLayout>
  );
}

const Congratulation = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Congratulations!</h2>
      <p>Your Fundraiser was successfully deployed.</p>
      <button>View My Fundraiser</button>
    </div>
  );
};
