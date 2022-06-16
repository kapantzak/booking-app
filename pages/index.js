import Head from "next/head";
import DefaultLayout from "@/layouts/DefaultLayout";
import DateTimePicker from "@/components/DateTimePicker";

export default function Home() {
  const dateTimeSelectionHandler = (dateTime) => console.log(dateTime);

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
      <DateTimePicker onDateTimeSelect={dateTimeSelectionHandler} />
    </DefaultLayout>
  );
}
