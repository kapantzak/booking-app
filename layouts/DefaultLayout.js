import BaseLayout from "@/layouts/BaseLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <BaseLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </BaseLayout>
  );
};

export default DefaultLayout;
