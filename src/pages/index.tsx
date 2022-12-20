import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "../components/hero";
import Layout from "../components/layouts";

import { trpc } from "../utils/trpc";

const Home: NextPage = (props) => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Admond Tamang</title>
        <meta name="description" content="Admond tamang portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
