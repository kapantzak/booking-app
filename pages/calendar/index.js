import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "@/layouts/DefaultLayout";
import DateTimePicker from "@/components/DateTimePicker";

export default function Calendar() {
  const { query } = useRouter();
  const { service } = query;
  const [state, setState] = useState({});

  const dateTimeSelectionHandler = (dateTime) => {
    setState({ service, ...dateTime });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <DefaultLayout>
      <Head>
        <title>PickMyTime | Calendar</title>
        <meta
          name="description"
          content="A simple booking application for small businesses"
        />
      </Head>
      <h1 className="text-3xl">Pick a date and time slot</h1>
      <DateTimePicker onDateTimeSelect={dateTimeSelectionHandler} />
    </DefaultLayout>
  );
}
