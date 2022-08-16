import DashboardLayout from "components/DashboardLayout";

export default function Explore() {
  return (
    <DashboardLayout>
      <h1>For Contributors</h1>
      <p>
        With Mobius Protocol, the power is in your hands. Contribute to
        transformational fundraisers all over the world, with quick, low-fee,
        near instant settling payments.
      </p>
      <p>
        Powered by Solana, we utilize publicly deployed programs on the
        blockchain to facilitate fast, seamless payments worldwide. This is
        further utilized to provide future tooling and contribution options for
        the true Web3 crowdfunding experience.
      </p>
      <p>
        When you create a fundraiser on Mobius, you're participating in a global
        crowdfunding revolution. Our mission is at the ethos of Web3, providing
        a solution to enable the trailblazers of tomorrow to create, while
        empowering the contributors.
      </p>
      <button className="bg-blue-400 text-white mt-2 mb-4">
        Explore Fundraisers
      </button>
    </DashboardLayout>
  );
}
