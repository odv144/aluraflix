import React, { useContext, useEffect, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Text,
  Container,
  Divider,
  FormLabel,
  Center,
  Heading,
  Wrap,
  WrapItem,
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, CopyIcon } from "@chakra-ui/icons";
import { VideosContext } from "../../Context/VideosContext";
import { useNavigate } from "react-router-dom";

export const Nuevo = ({ fondo = "#333", dato = "", cerrar }) => {
  const { state, category, postData, updateData } = useContext(VideosContext);
  const navigate = useNavigate();
  //estado inicial del dataForm
  
  const [formData, setFormData] = useState(
    dato === ""
      ? {
          titulo: "",
          categoria: "",
          imagen: "",
          video: "",
          descripcion: "",
        }
      : {
          titulo: dato.titulo,
          categoria: dato.categoria,
          imagen: dato.imagen,
          video: dato.video,
          descripcion: dato.descripcion,
        }
  );
  //manejador para el cambio de estado

  const handleChange = (value) => {
    
    setFormData(prevData=>({
      ...prevData,
      ...value,
      
    }));
  };

  //manejador del envio del submint
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dato === "") {
      try {
        await postData( formData);
       
        setFormData({
          titulo: "",
          categoria: "",
          imagen: "",
          video: "",
          descripcion: "",
        });
      } catch (error) {
        console.error("error al enviar:", error);
      }
      navigate("/");
    } else {
      try {
        await updateData(dato.id, formData);
      } catch (error) {
        console.error("error al enviar:", error);
      }
      cerrar();
    }
  };

  const flag = false;

  return (
    <form onSubmit={handleSubmit}>
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
                  value={formData.titulo}
                  onChange={(e)=>handleChange({ titulo: e.target.value })}
                  placeholder="Ingrese el titulo"
                  name="titulo"
                />
                {flag && <FormErrorMessage>Error message</FormErrorMessage>}
              </FormControl>
            </WrapItem>
            <WrapItem>
              <FormControl m="2px" p="5px">
                <FormLabel>Categoria</FormLabel>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant={"outline"}
                    rightIcon={<ChevronDownIcon />}
                    name='categoria'
                  >
                    Actions
                  </MenuButton>
                  <MenuList>
                    {category.map((cat) => (
                      <MenuItem
                        key={cat.id}
                       onClick={()=>handleChange({ categoria: cat.nombre })}
                        textTransform={'uppercase'}
                      >
                        {cat.nombre}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                {flag && <FormErrorMessage>Error message</FormErrorMessage>}
              </FormControl>
            </WrapItem>
            <WrapItem>
              <FormControl m="2px" p="5px" w="500px">
                <FormLabel>Imagen</FormLabel>
                <Input
                  value={formData.imagen}
                  onChange={(e)=>handleChange({ imagen: e.target.value })}
                  placeholder="Url de la imagen"
                  name="imagen"
                />
                {flag && <FormErrorMessage>Error message</FormErrorMessage>}
              </FormControl>
            </WrapItem>
            <WrapItem>
              <FormControl m="2px" p="5px" w="500px">
                <FormLabel>Video</FormLabel>
                <Input
                  value={formData.video}
                  onChange={(e)=>handleChange({ video: e.target.value })}
                  placeholder="Url del video a subir"
                  name="video"
                />
                {flag && <FormErrorMessage>Error message</FormErrorMessage>}
              </FormControl>
            </WrapItem>
            <WrapItem>
              <FormControl m="2px" p="5px" w="500px">
                <FormLabel>Descripcion</FormLabel>
                <Textarea
                  value={formData.descripcion}
                  onChange={(e)=>handleChange({ descripcion: e.target.value })}
                  placeholder="Descripcion del video"
                  name="descripcion"
                />
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
            <Button color="green" type="submit">
              GUARDAR
            </Button>
            <Button color="red.500">LIMIPIAR</Button>
          </FormControl>
        </Container>
      </Center>
    </form>
  );
};
