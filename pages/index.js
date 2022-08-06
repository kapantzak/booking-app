import { useState } from "react";
import Head from "next/head";
import DefaultLayout from "@/layouts/DefaultLayout";
import { PROJECT_NAME } from "@/lib/constants";

export default function Home() {
  const [value, setValue] = useState(new Date());

  return (
    <DefaultLayout>
      <Head>
        <title>{PROJECT_NAME.condensed} | Home</title>
        <meta
          name="description"
          content="A simple booking application for small businesses"
        />
      </Head>
      <h1 className="text-3xl">Booking app</h1>
    </DefaultLayout>
  );
}
