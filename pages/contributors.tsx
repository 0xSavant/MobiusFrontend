import DashboardLayout from "components/DashboardLayout";
import Link from "next/link";

export default function Explore() {
  return (
    <DashboardLayout>
      <h1>For Contributors</h1>
      <hr className="w-44"></hr>
      <br></br>
      <p className="w-2/3">
        With Mobius Protocol, the power is in your hands. Contribute to
        transformational fundraisers all over the world, with quick, low-fee,
        near instant settling payments.
      </p>
      <br></br>
      <p className="w-2/3">
        Powered by Solana, we utilize publicly deployed programs on the
        blockchain to facilitate fast, seamless payments worldwide. This is
        further utilized to provide future tooling and contribution options for
        the true Web3 crowdfunding experience.
      </p>
      <br></br>
      <p className="w-2/3">
        When you create a fundraiser on Mobius, you're participating in a global
        crowdfunding revolution. Our mission is at the ethos of Web3, providing
        a solution to enable the trailblazers of tomorrow to create, while
        empowering the contributors.
      </p>

      <div className="mt-6 py-6">
        <Link
          href={{
            pathname: "/explore",
          }}
        >
          <a className="button-style font-semibold">Explore Fundraisers</a>
        </Link>
      </div>
    </DashboardLayout>
  );
}
