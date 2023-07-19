import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
