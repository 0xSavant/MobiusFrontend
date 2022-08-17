import { Text } from "@mantine/core";
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
      <Text py="md">I am fundraising for a...</Text>
      <br></br>
      <ul className="flex gap-4 items-center mt-6 flex-1">
        {fundraiserTypes.map((fundraiser, i) => (
          <li
            key={i}
            onClick={() => setSelectedType(i)}
            className={`${
              selectedType === i
                ? "from-teal-800 to-teal-600"
                : "from-cyan-500 to-blue-500 cursor-pointer"
            } text-white bg-gradient-to-r px-5 py-3 rounded-lg shadow-md shadow-teal-50 text-center h-48 flex flex-col justify-center gap-5`}
          >
            <Text size='lg' className="text-2xl font-bold">{fundraiser.title}</Text>
            <p>{fundraiser.description}</p>
          </li>
        ))}
      </ul>

      {selectedType !== null && (
        <div className="w-full mt-6 flex justify-center">
          <button onClick={onContinue} className="button-style font-semibold">
            Continue
          </button>
        </div>
      )}
    </>
  );
};

export default StepOne;
