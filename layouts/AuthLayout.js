import BaseLayout from "@/layouts/BaseLayout";

const AuthLayout = ({ children }) => {
  return (
    <BaseLayout>
      <main>{children}</main>
    </BaseLayout>
  );
};

export default AuthLayout;
