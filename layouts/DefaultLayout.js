import BaseLayout from "@/layouts/BaseLayout";

const DefaultLayout = ({ children }) => {
  return (
    <BaseLayout>
      <main>{children}</main>
      <footer>This is a footer</footer>
    </BaseLayout>
  );
};

export default DefaultLayout;
