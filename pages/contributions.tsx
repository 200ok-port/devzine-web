import type { NextPage } from "next";
import Head from "next/head";
import { useApp } from "../libs/client/useApp";
import { useEffect } from "react";

const Contributions: NextPage = () => {
  useEffect(() => {
    useApp();
  }, []);

  return (
    <>
      <Head>
        <title>Contributions</title>
      </Head>
      <div>Contributions</div>
    </>
  );
};

export default Contributions;
