import Head from "next/head";
import { PROJECT_NAME } from "@/lib/constants";
import DefaultLayout from "@/layouts/DefaultLayout";
import Flow from "@/flows/Flow";

export default function FlowPage() {
  const handleComplete = (state) => console.log(state);

  return (
    <DefaultLayout>
      <Head>
        <title>{PROJECT_NAME.condensed} | Flow</title>
        <meta
          name="description"
          content="A simple booking application for small businesses"
        />
      </Head>
      <Flow />
    </DefaultLayout>
  );
}
