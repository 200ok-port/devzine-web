import type { NextPage } from "next";
import Head from "next/head";
import { useApp } from "../../libs/client/useApp";
import { useEffect } from "react";

const ArticlePage: NextPage = () => {
  useEffect(() => {
    useApp();
  }, []);

  return (
    <>
      <Head>
        <title>ArticlePage</title>
      </Head>
      <div>ArticlePage</div>
    </>
  );
};

export default ArticlePage;
