import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio.jsx";
import { Favoritos } from "./pages/Favorito/Favoritos.jsx";
import { Cabecera } from "./components/Cabecera/Cabecera.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Container } from "./components/Container/Container.jsx";
import { FavoritoProvider } from "./Context/Favoritos.jsx";
import { Box, Flex, VStack } from "@chakra-ui/react";

export const AppRoutes = () => {
  return (
    <VStack boxSizing="border-box">
    <BrowserRouter>
      <Cabecera  />
      <Container  >
        <FavoritoProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </FavoritoProvider>
      </Container>
      <Footer />
    </BrowserRouter>
    </VStack>
  );
};
