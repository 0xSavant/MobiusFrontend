import { Styles, Button, Image, Text } from "@mantine/core";
import styles from '../styles/Home.module.css'
import DashboardLayout from "components/DashboardLayout";
//import Image from "next/image";

export default function Explore() {
  return (
    <DashboardLayout>
      <Text size={36} weight="700" py='md'>Explore Fundraisers</Text>
      <Text weight="semibold">Find fundraisers from all over the world.</Text>
      <br></br>
      <hr className="w-52"></hr>
      <br></br>
      <div className="mt-4">
        <h3 className="text-xl">Trending</h3>
        <div className="grid sm:grid-cols-2 py-0 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from(new Array(3)).map((_, i) => (
            <FundraiserCard key={i} />
          ))}
        </div>
      </div>
      <br></br>
      <div className="mt-4">
      <h3 className="text-xl">Recently created</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from(new Array(3)).map((_, i) => (
            <FundraiserCard key={i} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

const FundraiserCard = () => {
  return (
    <div className={styles.grid}>
    <a href="https://nextjs.org/docs" className={styles.card}>
      <Image className={styles.image}
        src='https://i.pinimg.com/originals/c1/6f/2f/c16f2fcbd9168e7047e48b09086738ed.jpg'
        radius="md"
        py='sm'
      />
      <h2>Clemson University &rarr;</h2>
      <p className={styles.desc}>Clemson University is a public land-grant research university in Clemson, South Carolina. Founded in 1889, Clemson is the second-largest university in student population in South Carolina.</p>
      <Button className={styles.button} variant='gradient' py="sm">Contribute</Button>
    </a>
    </div>
  );
};
