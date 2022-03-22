import type { NextPage } from "next";
import Head from "next/head";
import { useApp } from "../libs/client/useApp";
import { useEffect } from "react";

const Subscribe: NextPage = () => {
  useEffect(() => {
    useApp();
  }, []);

  return (
    <>
      <Head>
        <title>Subscribe</title>
      </Head>
      <div>Subscribe</div>
    </>
  );
};

export default Subscribe;
