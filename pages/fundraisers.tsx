import DashboardLayout from "components/DashboardLayout";
import { Text } from '@mantine/core';
import Image from "next/image";
import Link from "next/link";

export default function Explore() {
  return (
    <DashboardLayout>
      <Text weight="bold" size={32} py="lg">For Fundraisers</Text>
      <hr className="w-44"></hr>
      <br></br>
      <Text className="w-2/3">
        Mobius Protocol is the only crowdfunding platform that provides seamless
        fundraising for non-profits and public goods who want quick, easy,
        global payments in the age of decentralized tech.
      </Text>
      <br></br>
      <Text className="w-2/3">
        Quickly and easily create a crowdfund, and start raising immediately.
        Accept contributions all over the world with the power of
        cryptocurrency. That's what we mean by funding without barriers. Mobius
        is designed as a crowdfunding protocol that puts the power in the hands
        of the user.
      </Text>
      <br></br>
      <Text className="w-2/3">
        When you create a fundraiser on Mobius, you're participating in a global
        crowdfunding revolution. Our mission is at the ethos of Web3, providing
        a solution to enable the trailblazers of tomorrow to create, while
        empowering the contributors.
      </Text>

      <div className="mt-6 py-6">
        <Link
          href={{
            pathname: "/create",
          }}
        >
          <a className="button-style bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 font-semibold">Create my Fundraiser</a>
        </Link>
      </div>
    </DashboardLayout>
  );
}
