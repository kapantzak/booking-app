import useMediaQuery from "@mui/material/useMediaQuery";

const useViewPort = () => {
  const largeViewPort = useMediaQuery("(min-width:900px)");

  return { largeViewPort };
};

export default useViewPort;
