import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./routers.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { themePropio } from "./assets/themePropio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={themePropio}>
      <AppRoutes />
    </ChakraProvider>
  </StrictMode>
);
