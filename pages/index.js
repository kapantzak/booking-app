import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Booking app</title>
        <meta
          name="description"
          content="A simple booking application for small businesses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl">Booking app</h1>
        <p>Manage your bookings now!</p>
      </main>
    </div>
  );
}
