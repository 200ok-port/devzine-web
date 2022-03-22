import type { NextPage } from "next";
import Head from "next/head";
import { useApp } from "../libs/client/useApp";
import { useEffect } from "react";

const FAQ: NextPage = () => {
  useEffect(() => {
    useApp();
  }, []);

  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <div>FAQ</div>
    </>
  );
};

export default FAQ;
