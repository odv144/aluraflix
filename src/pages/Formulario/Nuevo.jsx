import React from "react";
import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightElement,
  Icon,
  Button,
  Text,
  Container,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

export const Nuevo = () => {
  return (
    <FormControl
      m="15px"
      backgroundColor="#262626"
      opacity={1}
      color="whiteAlpha.800"
    >
      <Text fontWeight="bold" textAlign="center" fontSize="3xl">
        NUEVO VIDEO
      </Text>
      <Text textAlign="center" fontWeight="bold" fontSize="sm">
        COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
      </Text>
      <FormErrorMessage>Error message</FormErrorMessage>
      <Container
        opacity={1}
        width="1240px"
        m={5}
        p={5}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
      >
        <Text fontWeight="bold" fontSize="md" p={15} m={5}>
          Crear Tarjeta
        </Text>
        <InputGroup m={5} p={15}>
          <InputLeftAddon>Email</InputLeftAddon>
          <Input />
          <InputRightElement>
            <CopyIcon name="email" />
          </InputRightElement>
        </InputGroup>
        <FormControl
          p={15}
          m={5}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="outline"
            size="md"
            backgroundColor="#202020"
            color="whiteAlpha.800"
            fontWeight="bold"
          >
            GUARDAR
          </Button>
          <Button
            variant="outline"
            size="md"
            backgroundColor="#222222"
            fontWeight="bold"
          >
            LIMIPIAR
          </Button>
        </FormControl>
      </Container>
    </FormControl>
  );
};
