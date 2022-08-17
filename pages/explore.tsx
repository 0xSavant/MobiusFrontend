import DashboardLayout from "components/DashboardLayout";
import { Text } from '@mantine/core';
import Link from "next/link";

export default function Explore() {
  return (
    <DashboardLayout>
      <Text weight="bold" size={32} py="lg">Explore Fundraisers</Text>
      <hr className="w-44"></hr>
      <Text py="md">View fundraisers worldwide, both physical and digital.</Text>
      <div className="mt-6 mb-8">
        <Link
          href={{
            pathname: "/create",
          }}
        >
          <a className="button-style bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 font-semibold">Create a Fundraiser</a>
        </Link>
      </div>
      <div className="mt-4">
        <Text className="text-xl semibold" weight="bold" py="xl">📈 Trending</Text>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from(new Array(3)).map((_, i) => (
            <FundraiserCard key={i} />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <Text className="text-xl semibold" weight="bold" py="xl">✨ Recently created</Text>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from(new Array(3)).map((_, i) => (
            <FundraiserCard key={i} />
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
    </DashboardLayout>
  );
}

const FundraiserCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg py-6 px-5">
      <img
        src="/clemson_club.png"
        alt="Clemson club"
        height={150}
        className="rounded-lg w-full mb-3"
      />
      <Text weight='bold' py='sm' size={18}>Clemson Blockchain Club</Text>
      <p className="text-gray-400 py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        odit.
      </p>

      <div className="mt-4 flex justify-between items-center">
        <Text size={16} weight='bold' color='gray'>100 SOL raised</Text>
        <Link href={{
            pathname: "/viewfundraiser",
          }}>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold" >
          View
        </button>
        </Link>
      </div>
    </div>
    
  );
};
