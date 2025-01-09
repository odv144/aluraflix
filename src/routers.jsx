import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio.jsx";
import { Nuevo } from "./pages/Formulario/Nuevo.jsx";
import { Cabecera } from "./components/Cabecera/Cabecera.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Container } from "./components/Container/Container.jsx";
// import { VideoProvider } from "./Context/Videos.jsx";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { Separador } from "./components/Separador/Separador.jsx";
import { Player } from "./pages/Player/Player.jsx";
import { VideosProvider } from "./Context/VideosProvider.jsx";

export const AppRoutes = () => {
  return (
    <Flex direction={"column"}>
      <BrowserRouter>
        <Cabecera />
        <Separador />
        <Container>
          <VideosProvider>
            <Routes>
              <Route path="/" element={<Inicio />}></Route>
              <Route path="/nuevo" element={<Nuevo />}></Route>
              <Route path="/player/:id" element={<Player />}></Route>
            </Routes>
          </VideosProvider>
        </Container>

        <Footer />
      </BrowserRouter>
    </Flex>
  );
};
