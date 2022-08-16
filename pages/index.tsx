import type { NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import styles from "../styles/Home.module.css";
import { Group, Button, Image } from "@mantine/core";
import Link from "next/link";

const navItems = [
  {
    title: "Explore",
    href: "explore",
  },
  {
    title: "Learn more",
    href: "about",
  },
  {
    title: "Create a fundraiser",
    href: "create",
  },
];
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mobius | Funding Without Barriers</title>
        <meta name="Mobius Protocol" content="Funding Without Barriers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full px-5 max-w-5xl mx-auto">
        <nav className="flex justify-between w-full">
          <NextImage src="/logo.png" alt="" width={50} height={50} />
          <ul className="flex gap-3 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={{
                    pathname: `/${item.href}`,
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Funding Without <a href="https://nextjs.org">Barriers.</a>
        </h1>
        <p className={styles.description}>Get started with Mobius.</p>
        <Group position="center" spacing="lg">
          <Button
            className={styles.herobutton}
            radius="lg"
            variant="gradient"
            py="sm"
          >
            Create a Fundraiser
          </Button>
        </Group>
        <br></br>
        <hr></hr>
        <br></br>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image
              className={styles.image}
              src="https://i.pinimg.com/originals/c1/6f/2f/c16f2fcbd9168e7047e48b09086738ed.jpg"
              radius="md"
              py="sm"
            />
            <h2>Clemson University &rarr;</h2>
            <p className={styles.desc}>
              Clemson University is a public land-grant research university in
              Clemson, South Carolina. Founded in 1889, Clemson is the
              second-largest university in student population in South Carolina.
            </p>
            <Button className={styles.button} variant="gradient" py="sm">
              Contribute
            </Button>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image
              className={styles.image}
              src="https://i.pinimg.com/originals/c1/6f/2f/c16f2fcbd9168e7047e48b09086738ed.jpg"
              radius="md"
              py="sm"
            />
            <h2>Clemson University &rarr;</h2>
            <p className={styles.desc}>
              Clemson University is a public land-grant research university in
              Clemson, South Carolina. Founded in 1889, Clemson is the
              second-largest university in student population in South Carolina.
            </p>
            <Button className={styles.button} variant="gradient" py="sm">
              Contribute
            </Button>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image
              className={styles.image}
              src="https://i.pinimg.com/originals/c1/6f/2f/c16f2fcbd9168e7047e48b09086738ed.jpg"
              radius="md"
              py="sm"
            />
            <h2>Clemson University &rarr;</h2>
            <p className={styles.desc}>
              Clemson University is a public land-grant research university in
              Clemson, South Carolina. Founded in 1889, Clemson is the
              second-largest university in student population in South Carolina.
            </p>
            <Button className={styles.button} variant="gradient" py="sm">
              Contribute
            </Button>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image
              className={styles.image}
              src="https://i.pinimg.com/originals/c1/6f/2f/c16f2fcbd9168e7047e48b09086738ed.jpg"
              radius="md"
              py="sm"
            />
            <h2>Clemson University &rarr;</h2>
            <p className={styles.desc}>
              Clemson University is a public land-grant research university in
              Clemson, South Carolina. Founded in 1889, Clemson is the
              second-largest university in student population in South Carolina.
            </p>
            <Button
              className={styles.button}
              radius="lg"
              variant="gradient"
              py="sm"
            >
              Contribute
            </Button>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
