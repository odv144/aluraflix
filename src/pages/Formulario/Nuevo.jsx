import React, { useState } from "react";
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
  Divider,
  FormLabel,
  FormHelperText,
  Center,
  Heading,
  Select,
  Flex,
  VStack,
  Wrap,
  WrapItem,
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, CopyIcon } from "@chakra-ui/icons";

export const Nuevo = ({fondo='#333'}) => {
  const [titulo,setTitulo]=useState("");
  const [categoria,setCategoria]=useState("");
  const [imagen,setImagen]=useState("");
  const [video,setVideo]=useState("");
  const [comentario,setComentario]=useState("");

  const [dataForm,setDataForm]=useState({});


  const flag = false;

  const guardar=(e)=>{
    e.preventDefault()

    setDataForm({titulo,categoria,imagen,video,comentario})
    console.log(dataForm);
  }

  return (
    <form onSubmit={guardar}>

    
    <Center
      w="100%"
      display="flex"
      flexDirection="column"
      bgColor={fondo}
      p={6}
      color={"white"}
      letterSpacing={1}
    >
      <Heading>NUEVO VIDEO</Heading>
      <Text
        as="h2"
        textAlign="center"
        fontWeight="bold"
        fontSize="sm"
        display="flex"
      >
        COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
      </Text>
      <Container
        as="container"
        maxW="50%"
        m={5}
        p={5}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
      >
        <Divider
          borderColor="white"
          height="1px"
          backgroundColor="white"
          border="1px "
        />
        <Text fontWeight="bold" fontSize="md" p={15}>
          Crear Tarjeta
        </Text>
        <Divider
          borderColor="white"
          height="1px"
          backgroundColor="white"
          border="1px "
        />
        <Wrap justify={"center"} spacing={6}>
          <WrapItem>
            <FormControl m="2px" p="5px" w="300px">
              <FormLabel>Titulo</FormLabel>
              <Input 
              value={titulo}
              onChange={(e)=>setTitulo(e.target.value)}
              placeholder="Ingrese el titulo" 
              />
              {flag && <FormErrorMessage>Error message</FormErrorMessage>}
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl m="2px" p="5px">
              <FormLabel>Categoria</FormLabel>
              <Menu>
                <MenuButton as={Button} variant={'outline'} rightIcon={<ChevronDownIcon />}>
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {flag && <FormErrorMessage>Error message</FormErrorMessage>}
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl m="2px" p="5px" w="500px">
              <FormLabel>Imagen</FormLabel>
              <Input 
              value={imagen}
              onChange={(e)=>setImagen(e.target.value)}
              placeholder="Url de la imagen" />
              {flag && <FormErrorMessage>Error message</FormErrorMessage>}
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl m="2px" p="5px" w="500px">
              <FormLabel>Video</FormLabel>
              <Input 
              value={video}
              onChange={(e)=>setVideo(e.target.value)}
              placeholder="Url del video a subir" />
              {flag && <FormErrorMessage>Error message</FormErrorMessage>}
            </FormControl>
          </WrapItem>
          <WrapItem>
            <FormControl m="2px" p="5px" w="500px">
              <FormLabel>Descripcion</FormLabel>
              <Textarea 
              value={comentario}
              onChange={(e)=>setComentario(e.target.value)}
              placeholder="Descripcion del video" />
              {flag && <FormErrorMessage>Error message</FormErrorMessage>}
            </FormControl>
          </WrapItem>
        </Wrap>

        <FormControl
          m="2px"
          p="5px"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Button color="green" type="submit">GUARDAR</Button>
          <Button color="red.500">LIMIPIAR</Button>
        </FormControl>
      </Container>
    </Center>
  </form>
  );
};
