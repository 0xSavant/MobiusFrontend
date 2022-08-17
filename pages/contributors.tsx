import DashboardLayout from "components/DashboardLayout";
import { Text } from '@mantine/core';
import Link from "next/link";

export default function Explore() {
  return (
    <DashboardLayout>
      <Text weight="bold" size={32} py="lg">For Contributors</Text>
      <hr className="w-44"></hr>
      <br></br>
      <Text className="w-2/3" py="lg">
        With Mobius Protocol, the power is in your hands. Contribute to
        transformational fundraisers all over the world, with quick, low-fee,
        near instant settling payments.
      </Text>
      <br></br>
      <Text className="w-2/3">
        Powered by Solana, we utilize publicly deployed programs on the
        blockchain to facilitate fast, seamless payments worldwide. This is
        further utilized to provide future tooling and contribution options for
        the true Web3 crowdfunding experience.
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
            pathname: "/explore",
          }}
        >
          <a className="button-style bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 font-semibold">Explore Fundraisers</a>
        </Link>
      </div>
    </DashboardLayout>
  );
}
