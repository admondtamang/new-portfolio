import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "../components/hero";
import Layout from "../components/layouts";

import { trpc } from "../utils/trpc";
import MetaTags from "../components/common/meta";

const Home: NextPage = (props) => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <MetaTags
        currentPageTitle="Admond Tamang"
        title="Admond Tamang"
        description="Portfolio of Admond Tamang. A Developer based in Nepal"
        image="/favicon.ico"
        url={"https://admondtamang.com.np"}
      />

      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
