import {
  createStyles,
  Grid,
  Image,
  SimpleGrid,
  Title,
  List,
} from "@mantine/core";
import { At, MapPin, Phone } from "tabler-icons-react";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 800,
  },

  content: {
    width: "100%",
    display: "flex",
    backgroundColor: theme.colors.dark,
    textAlign: "center",
    borderBottom: `2px solid ${theme.colors[theme.primaryColor][8]}`,
  },

  imageGridWrapper: {
    width: "100%",

    [theme.fn.smallerThan("sm")]: {
      order: 1,
    },
  },

  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.md,
  },

  list: {
    fontWeight: 300,
    marginBottom: theme.spacing.sm,

    [theme.fn.smallerThan("sm")]: {
      marginBottom: theme.spacing.xl,
    },
  },

  inner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
  },

  contactAnchor: {
    display: "block",
    height: "200px",
    marginTop: "-200px",
    visibility: "hidden",
  },

  subtitle: {
    filter: `drop-shadow(0 0 2px ${theme.colors.cyan[8]})`,
    color: theme.white,
  },

  mapContainer: {
    height: "70%",
    width: "100%",
    border: `2px solid ${theme.colors.cyan[8]}`,

    [theme.fn.smallerThan("sm")]: {
      height: "300px",
    },
  },
}));

export default function ContactInfo() {
  const { classes } = useStyles();
  const mapContainer = useRef(null);
  const isMobile = useMediaQuery("(max-width: 900px)");

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      center: [-97.288361, 32.690044],
      style: "mapbox://styles/mapbox/dark-v10",
      zoom: 15,
    });

    new mapboxgl.Marker({ color: "#006166" })
      .setLngLat([-97.288361, 32.690044])
      .addTo(map);

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: false,
        },
        trackUserLocation: false,
        showUserHeading: false,
      })
    );
    return () => map.remove();
  }, []);

  return (
    <div className={classes.container}>
      <Grid className={classes.content} gutter={0} grow>
        <Grid.Col sm={12} md={6} className={classes.imageGridWrapper}>
          <SimpleGrid cols={2} spacing={0} sx={{}}>
            <Image
              fit="cover"
              height={isMobile ? 180 : 250}
              src="https://www.kaiyosushiandbar.com/images/restaurant/portfolio/grid/no-margins/project-16-square.jpg"
            />
            <Image
              fit="cover"
              height={isMobile ? 180 : 250}
              src="https://www.kaiyosushiandbar.com/images/restaurant/portfolio/grid/no-margins/project-17-square.jpg"
            />
            <Image
              fit="cover"
              height={isMobile ? 180 : 250}
              src="https://www.kaiyosushiandbar.com/images/restaurant/portfolio/grid/no-margins/project-18-square.jpg"
            />
            <Image
              fit="cover"
              height={isMobile ? 180 : 250}
              src="https://www.kaiyosushiandbar.com/images/restaurant/portfolio/grid/no-margins/project-19-square.jpg"
            />
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col sm={12} md={6} className={classes.contentWrapper}>
          <div className={classes.inner}>
            <div className={classes.contactAnchor} id="contact" />
            <Title order={1} mb="md" className={classes.subtitle}>
              Contact us
            </Title>
            <List spacing="xs" size="sm" center className={classes.list}>
              <List.Item icon={<At />}>banzaisushi@gmail.com</List.Item>
              <List.Item icon={<Phone />}>(555) 555-5555</List.Item>
              <List.Item icon={<MapPin />}>
                2038 Oliver Street, Fort Worth, TX 76102
              </List.Item>
            </List>
            <div ref={mapContainer} className={classes.mapContainer} />
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
