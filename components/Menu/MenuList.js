import MenuItem from "./MenuItem";
import { Grid, Title, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "16px",
    width: "100%",
    maxWidth: 800,
  },

  title: {
    marginBottom: theme.spacing.xl,
    filter: `drop-shadow(0 0 2px ${theme.colors.cyan[8]})`,
    color: theme.white,
  },
}));

const MenuList = ({ menuItems }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Title order={1} className={classes.title}>
        Our Menu
      </Title>
      <Grid>
        {menuItems.map((menuItem) => (
          <Grid.Col sm={6} md={4} lg={3} key={menuItem.id}>
            <MenuItem item={menuItem} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default MenuList;
