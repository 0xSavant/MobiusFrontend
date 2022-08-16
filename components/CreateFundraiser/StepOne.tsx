import React, { Dispatch, SetStateAction } from "react";

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

export default StepOne;
