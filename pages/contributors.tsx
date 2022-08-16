import DashboardLayout from "components/DashboardLayout";
import { Styles, Button, Image, Text } from "@mantine/core";

export default function Explore() {
  return (
    <DashboardLayout>
      <br></br>
      <h1>For Contributors</h1>
      <br></br>
      <hr></hr>
      <br></br>
      <Text py="lg">
        With Mobius Protocol, the power is in your hands. Contribute to
        transformational fundraisers all over the world, with quick, low-fee,
        near instant settling payments.
      </Text>
      <Text py="lg">
        Powered by Solana, we utilize publicly deployed programs on the
        blockchain to facilitate fast, seamless payments worldwide. This is
        further utilized to provide future tooling and contribution options for
        the true Web3 crowdfunding experience.
      </Text>
      <Text py="lg">
        When you create a fundraiser on Mobius, you're participating in a global
        crowdfunding revolution. Our mission is at the ethos of Web3, providing
        a solution to enable the trailblazers of tomorrow to create, while
        empowering the contributors.
      </Text>
      <Button variant="gradient" radius="lg" className="bg-blue-400 text-white mt-2 mb-4">
        Explore Fundraisers
      </Button>
    </DashboardLayout>
  );
}
