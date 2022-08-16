import DashboardLayout from "components/DashboardLayout";
import Image from "next/image";

export default function Explore() {
  return (
    <DashboardLayout>
      <h1>Explore Fundraisers</h1>
      <p>View fundraisers worldwide, both physical and digital.</p>
      <button className="bg-blue-400 text-white mt-2 mb-4">Create a Fundraiser</button>

      <div className="mt-4">
        <h3 className="text-xl">Trending</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from(new Array(4)).map((_, i) => (
            <FundraiserCard key={i} />
          ))}
        </div>
      </div>
      <div className="mt-4">
      <h3 className="text-xl">Recently created</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from(new Array(4)).map((_, i) => (
            <FundraiserCard key={i} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

const FundraiserCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg py-3 px-5">
      <img
        src="/clemson_club.png"
        alt="Clemson club"
        height={150}
        className="rounded-lg w-full mb-3"
      />
      <h4>Cremson Blockchain club</h4>
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        odit.
      </p>

      <div className="mt-4 flex justify-between items-center">
        <h6>100 Sol raised</h6>
        <button className="bg-blue-400 text-white rounded-full">
          Contribute
        </button>
      </div>
    </div>
  );
};
