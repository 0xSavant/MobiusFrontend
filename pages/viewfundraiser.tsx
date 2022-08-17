import DashboardLayout from "components/DashboardLayout";
import { Text } from '@mantine/core';
import Image from "next/image";
import Link from "next/link";

export default function Explore() {
  return (
    <DashboardLayout>
      <Text weight="bold" size={32} py="lg">Fundraiser Name</Text>
      <hr className="w-44"></hr>
      <br></br>
      <Image src="/clemson_club" width={750} height={350}></Image>

      <div className="mt-6 space-x-1">
        <Link className="mx-2"
          href={{
            pathname: "/create",
          }}
        >
          <a className="button-style font-semibold px-6 py-6">Contribute</a>
        </Link>
        <Link className="pl-2"
          href={{
            pathname: "/create",
          }}
        >
          <a className="button-style font-semibold pl-6">Website</a>
        </Link>
        <Link className="pl-2"
          href={{
            pathname: "/create",
          }}
        >
          <a className="button-style font-semibold pl-6">Contact</a>
        </Link>
        <Text color="gray" className="font-semibold py-10">--- SOL raised</Text>
        <Text className="w-2/3">
        Mobius Protocol is the only crowdfunding platform that provides seamless
        fundraising for non-profits and public goods who want quick, easy,
        global payments in the age of decentralized tech.
      </Text>
      </div>
    </DashboardLayout>
  );
}