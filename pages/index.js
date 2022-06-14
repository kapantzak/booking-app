import Head from "next/head";
import DefaultLayout from "@/layouts/DefaultLayout";
import DateTimePicker from "@/components/DateTimePicker";

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>PickMyTime | Home</title>
        <meta
          name="description"
          content="A simple booking application for small businesses"
        />
      </Head>
      <h1 className="text-3xl">Booking app</h1>
      <DateTimePicker />
    </DefaultLayout>
  );
}
