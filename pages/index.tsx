import type { NextPage } from "next";
import Head from "next/head";
import { useApp } from "../libs/client/useApp";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    useApp();
  }, []);

  return (
    <>
      <Head>
        <title>DEVzine</title>
      </Head>
      <div>Home</div>
    </>
  );
};

export default Home;
