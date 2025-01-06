import { Box } from "@chakra-ui/react";

export const Separador = ({ pos = "5px" }) => {
  return (
    <Box position="relative" w="100%" h="5px">
      {/* Línea sólida azul */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="3px"
        bg="rgba(34, 113, 209, 1)"
      />
      {/* Gradiente inferior */}
      <Box
        position="absolute"
        top="2px"
        left="0"
        w="100%"
        h="26px"
        bgGradient="linear(to-b, rgba(34, 113, 209, 1), transparent)"
      />
    </Box>
  );
};
