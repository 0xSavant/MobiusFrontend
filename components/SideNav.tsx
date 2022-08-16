import Link from "next/link";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
} from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface NavbarLinkProps {
  label: string;
  route?: string;
  icon?: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon, label, onClick, route, active }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  console.log(active, route)

  return (
    <Link
      href={{
        pathname: `/${route}`,
      }}
    >
      <a>
        <Tooltip label={label} position="right" transitionDuration={250}>
          <UnstyledButton
            onClick={onClick}
            className={cx(classes.link, { [classes.active]: active })}
          >
            <Image
              src={`/side_nav/${icon ?? route}.svg`}
              alt=""
              width={50}
              height={50}
            />
          </UnstyledButton>
        </Tooltip>
      </a>
    </Link>
  );
}

const navItems = [
  {
    label: "Explore",
    route: "explore",
  },
  {
    label: "For Fundraisers",
    route: "fundraisers",
  },
  {
    label: "For Contributors",
    route: "contributors",
  },
  {
    label: "How It Works",
    route: "how_it_works",
  },
  {
    label: "Create a Fundraiser",
    route: "create",
  },
];

const SideNav = () => {
  const router = useRouter();

  const links = navItems.map((link, index) => (
    <NavbarLink
      {...link}
      key={index}
      active={router.pathname.includes(link.route)}
    />
  ));

  return (
    <>
      <div className="max-w-xs fixed bg-green-300">
        <Navbar width={{ base: 80 }} p="md">
          <Center>
            <Image src="/logo.png" alt="" width={50} height={50} />
          </Center>
          <Navbar.Section grow mt={50}>
            <Stack justify="center" spacing={4}>
              {links}
            </Stack>
          </Navbar.Section>
          <Navbar.Section>
            <Stack justify="center" spacing={0}>
              <NavbarLink label="Connect wallet" icon="wallet" />
            </Stack>
          </Navbar.Section>
        </Navbar>
      </div>

      <div className="w-40"></div>
    </>
  );
};

export default SideNav;
