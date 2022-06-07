import Head from "next/head";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default BaseLayout;
