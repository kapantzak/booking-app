import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
