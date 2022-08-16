import DashboardLayout from "components/DashboardLayout";
import Image from "next/image";

export default function Explore() {
  return (
    <DashboardLayout>
      <h1>For Fundraisers</h1>
      <p>
        Mobius Protocol is the only crowdfunding platform that provides seamless
        fundraising for non-profits and public goods who want quick, easy,
        global payments in the age of decentralized tech.
      </p>
      <p>
        Quickly and easily create a crowdfund, and start raising immediately.
        Accept contributions all over the world with the power of
        cryptocurrency. That's what we mean by funding without barriers. Mobius
        is designed as a crowdfunding protocol that puts the power in the hands
        of the user.
      </p>
      <p>
        When you create a fundraiser on Mobius, you're participating in a global
        crowdfunding revolution. Our mission is at the ethos of Web3, providing
        a solution to enable the trailblazers of tomorrow to create, while
        empowering the contributors.
      </p>
      <button className="bg-blue-400 text-white mt-2 mb-4">
        Create my Fundraiser
      </button>
    </DashboardLayout>
  );
}
