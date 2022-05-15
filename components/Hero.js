import {
  Button,
  createStyles,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    backgroundBlendMode: "multiply",
    backgroundImage:
      "url('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2018%2F01%2Fsustainable-sushi-bamboo-interior-FT-BLOG0118.jpg')",
    backgroundPosition: "0% 45%",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 800,

    [theme.fn.smallerThan("sm")]: {
      backgroundPosition: "25% 75%",
    },
  },

  title: {
    color: theme.white,
    filter: `drop-shadow(0 0 2px ${theme.colors.cyan[8]})`,
    fontSize: "48px",
    [theme.fn.smallerThan("xl")]: {
      fontSize: "30px",
    },

    [theme.fn.smallerThan("md")]: {
      fontSize: "28px",
    },

    [theme.fn.smallerThan("sm")]: {
      fontSize: "40px",
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: "24px",
    },
  },

  heading: {
    height: "300px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: `${theme.spacing.xl}px ${theme.spacing.md}px`,
    borderBottom: `2px solid ${theme.colors[theme.primaryColor][8]}`,

    [theme.fn.smallerThan("sm")]: {
      height: "20vh",
    },
  },

  headingOverlay: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",

    [theme.fn.smallerThan("sm")]: {
      width: "100vw",
    },
  },

  button: {
    fontWeight: 400,
  },

  content: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.dark,
    textAlign: "center",
    borderBottom: `2px solid ${theme.colors[theme.primaryColor][8]}`,
  },

  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.xl,
  },

  subtitle: {
    filter: `drop-shadow(0 0 2px ${theme.colors.cyan[8]})`,
    color: theme.white,
  },

  description: {
    fontFamily: "Oswald",
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <div className={classes.headingOverlay}>
          <Title className={classes.title}>Banzai Sushi and Bar</Title>
        </div>
      </div>
      <Grid className={classes.content} gutter={0} grow>
        <Grid.Col sm={12} md={6} className={classes.contentWrapper}>
          <Title order={1} mb="md" className={classes.subtitle}>
            An Authentic Japanese Experience
          </Title>
          <Text weight={300} size="sm" mb="md" className={classes.description}>
            Banzai Sushi strives to source local, sustainable and organic when
            possible. We work hard to source premium ingredients and we cook
            everything from scratch with love.
          </Text>
          <Group position="left">
            <Link href="/menu" passHref>
              <Button size="lg" component="a" className={classes.button}>
                Order Now
              </Button>
            </Link>
            <Link href="#contact" passHref>
              <Button
                size="lg"
                href="#contact"
                variant="light"
                className={classes.button}
              >
                Contact Us
              </Button>
            </Link>
          </Group>
        </Grid.Col>
        <Grid.Col sm={12} md={6}>
          <SimpleGrid cols={2} spacing={0}>
            <Image
              fit="cover"
              height={isMobile ? 180 : 250}
              src="https://www.kaiyosushiandbar.com/images/restaurant/portfolio/grid/no-margins/project-12-square.jpg"
            />
            <Image
              fit="cover"
              height={isMobile ? 180 : 250}
              src="https://www.kaiyosushiandbar.com/images/restaurant/portfolio/grid/no-margins/project-13-square.jpg"
            />
            <Image
              fit="cover"
              height={isMobile ? 180 : 250}
              src="https://www.kaiyosushiandbar.com/images/restaurant/portfolio/grid/no-margins/project-14-square.jpg"
            />
            <Image
              fit="cover"
              height={isMobile ? 180 : 250}
              src="https://www.kaiyosushiandbar.com/images/restaurant/portfolio/grid/no-margins/project-15-square.jpg"
            />
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
