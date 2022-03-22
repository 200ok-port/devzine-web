import type { NextPage } from "next";
import Head from "next/head";
import { useApp } from "../libs/client/useApp";
import { useEffect } from "react";

const Mypage: NextPage = () => {
  useEffect(() => {
    useApp();
  }, []);

  return (
    <>
      <Head>
        <title>Mypage</title>
      </Head>
      <div>Mypage</div>
    </>
  );
};

export default Mypage;
