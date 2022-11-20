import Head from "next/head";
import Image from "next/image";
import icon from "../public/assets/icon.ico";
export default function Meta(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta
        name="description"
        content="List of freshwater aquarium fish species"
      />
      <link rel="icon" href="/fish.ico" />
    </Head>
  );
}
