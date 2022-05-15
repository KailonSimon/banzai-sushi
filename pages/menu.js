import MenuList from "../components/Menu/MenuList";
import { menuItems } from "../components/data/data";
import Head from "next/head";

export default function Menu() {
  return (
    <>
      <Head>
        <title>Our Menu</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width user-scalable=no"
        />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MenuList menuItems={menuItems} />
      </div>
    </>
  );
}
