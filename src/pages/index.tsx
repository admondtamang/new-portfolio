import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "../components/hero";
import Header from "../components/layouts/header";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Admond Tamang</title>
        <meta name="description" content="Admond tamang portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-mono ">
        <Header />
        <Hero />
      </main>
    </>
  );
};

export default Home;
