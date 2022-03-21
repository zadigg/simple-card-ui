import Head from "next/head";
import Cssbattle from "../components/Cssbattle";
import FlexGrow from "../components/FlexGrow";
import Sharingan from "../components/Sharingan";
import Upwork from "../components/Upwork";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>UI by Abel kIbebe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Upwork /> */}
        {/* <FlexGrow /> */}
        {/* <Cssbattle /> */}
        <Sharingan className="" />
        
      </main>
    </div>
  );
}
