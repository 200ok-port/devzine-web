import type { NextPage } from "next";
import Head from "next/head";
import { useApp } from "../libs/client/useApp";
import { useEffect } from "react";

const Signup: NextPage = () => {
  useEffect(() => {
    useApp();
  }, []);

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div>Signup</div>
    </>
  );
};

export default Signup;
