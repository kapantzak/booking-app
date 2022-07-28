import { Container } from "@mui/material";
import BaseLayout from "@/layouts/BaseLayout";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <BaseLayout>
      <AppHeader />
      <main>
        <Container fixed sx={{ marginTop: 4 }}>
          {children}
        </Container>
      </main>
      <Footer />
    </BaseLayout>
  );
};

export default DefaultLayout;
