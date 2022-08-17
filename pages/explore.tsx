import DashboardLayout from "components/DashboardLayout";
import Link from "next/link";

export default function Explore() {
  return (
    <DashboardLayout>
      <h1>Explore Fundraisers</h1>
      <hr className="w-44"></hr>
      <p>View fundraisers worldwide, both physical and digital.</p>
      <div className="mt-6 mb-8">
        <Link
          href={{
            pathname: "/create",
          }}
        >
          <a className="button-style font-semibold">
            Create a Fundraiser
          </a>
        </Link>
      </div>
      <div className="mt-4">
        <h3 className="text-xl semibold">📈 Trending</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from(new Array(3)).map((_, i) => (
            <FundraiserCard key={i} />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl semibold">✨ Recently created</h3>
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
      <h4>Clemson Blockchain Club</h4>
      <p className="text-gray-400 py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        odit.
      </p>

      <div className="mt-4 flex justify-between items-center">
        <h5>100 SOL raised</h5>
        <Link
          href={{
            pathname: `/fundraiser/1`,
          }}
        >
          <a className="text-white rounded-full font-semibold button-style">
            View
          </a>
        </Link>
      </div>
    </div>
  );
};
