import StepTwo from "components/CreateFundraiser/StepTwo";
import DashboardLayout from "components/DashboardLayout";
import { Dispatch, SetStateAction, useState } from "react";

const fundraiserTypes = [
  {
    title: "Individual",
    description: "Fundraise for yourself, or a selected beneficiary.",
  },
  {
    title: "Project",
    description:
      "Fundraise for a new project, protocol, or potential business.",
  },
  {
    title: "Charity",
    description: "Fundraise on behalf of a charity or public good.",
  },
];

export default function CreateFundraiser() {
  const [step, setStep] = useState(2);
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

interface StepOneProps {
  selectedType: number | null;
  setSelectedType: Dispatch<SetStateAction<number | null>>;
  onContinue: () => void;
}

const StepOne = ({
  selectedType,
  setSelectedType,
  onContinue,
}: StepOneProps) => {
  return (
    <>
      <p>I am fundraising for...</p>
      <ul className="flex gap-4 items-center mt-6 flex-1">
        {fundraiserTypes.map((fundraiser, i) => (
          <li
            key={i}
            onClick={() => setSelectedType(i)}
            className={`${
              selectedType === i
                ? "bg-teal-800"
                : "bg-blue-500 hover:bg-blue-400 cursor-pointer"
            } text-white px-5 py-3 rounded-lg shadow-md shadow-teal-50 text-center h-48 flex flex-col justify-center gap-5`}
          >
            <h3 className="text-2xl">{fundraiser.title}</h3>
            <p>{fundraiser.description}</p>
          </li>
        ))}
      </ul>

      {selectedType !== null && (
        <div className="w-full mt-6 flex justify-center">
          <button onClick={onContinue} className="mx-auto">
            Continue
          </button>
        </div>
      )}
    </>
  );
};

const Congratulation = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Congratulations!</h2>
      <p>Your Fundraiser was successfully deployed.</p>
      <button>View My Fundraiser</button>
    </div>
  );
};
