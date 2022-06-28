import Head from "next/head";
import DefaultLayout from "@/layouts/DefaultLayout";
import Services from "@/components/Services";

const services = [
  { id: 1, name: "Mens haircut" },
  { id: 2, name: "Womens haircut" },
];

export default function ServicesPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>PickMyTime | Services</title>
        <meta
          name="description"
          content="A simple booking application for small businesses"
        />
      </Head>
      <h1 className="text-3xl">Pick a service</h1>
      <Services services={services} />
    </DefaultLayout>
  );
}
