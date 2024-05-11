import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "../utils/api";
import HomepageComponent from "../../features/homepage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Amalia Medical Center</title>
        <meta name="description" content="Amalia Medical Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageComponent />
    </>
  );
};

export default Home;

