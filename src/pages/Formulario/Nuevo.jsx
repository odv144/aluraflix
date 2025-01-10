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
  FormHelperText,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, CopyIcon } from "@chakra-ui/icons";
import { VideosContext } from "../../Context/VideosContext";
import { useNavigate } from "react-router-dom";

export const Nuevo = ({ fondo = "#333", dato = "", cerrar }) => {
  const { state, category, postData, updateData } = useContext(VideosContext);
  const navigate = useNavigate();
  //estado inicial del dataForm
  const initialData={
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  }
  //valores iniciales para los errores
  const initialErrors={
    titulo: false,
    categoria: false,
    imagen: false,
    video: false,
    descripcion: false,
  }

  const [formData, setFormData] = useState(
    dato === ""
      ? initialData
      
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
    const fieldName = Object.keys(value)[0];
    const fieldValue = value[fieldName];
    //ver si se lo toco
    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
    // Validar el campo
    const error = validateField(fieldName, fieldValue);

    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));

    setFormData((prevData) => ({
      ...prevData,
      ...value,
    }));
  };

  //manejador del envio del submint
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Si hay errores, no enviar el formulario
      alert("el formulario tiene problemas");
      return;
    }
    //enviar el formulario
    if (dato === "") {
      try {
        await postData(formData);
        setFormData(initialData);
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

  // Validación del formulario completo antes de enviar
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validar cada campo
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  //variable de estado para manejar los errores
  const [errors, setErrors] = useState(initialData);
  const [touched, setTouched] = useState(initialErrors);

  // Función de validación
  const validateField = (name, value) => {
    switch (name) {
      case "titulo":
        if (!value.trim()) return "El título es obligatorio";
        if (value.length < 3)
          return "El título debe tener al menos 3 caracteres";
        if (value.length > 50)
          return "El título no puede exceder 50 caracteres";
        return "";

      case "categoria":
        if (!value) return "Debe seleccionar una categoría";
        return "";

      case "imagen":
        if (!value) return "La URL de la imagen es obligatoria";
        const imagePattern = /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i;
        if (!imagePattern.test(value))
          return "Ingrese una URL de imagen válida";
        return "";

      case "video":
        if (!value) return "La URL del video es obligatoria";
        const videoPattern =
          /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
        if (!videoPattern.test(value))
          return "Ingrese una URL de YouTube válida";
        return "";

      case "descripcion":
        if (!value.trim()) return "La descripción es obligatoria";
        if (value.length < 10)
          return "La descripción debe tener al menos 10 caracteres";
        if (value.length > 200)
          return "La descripción no puede exceder 200 caracteres";
        return "";

      default:
        return "";
    }
  };

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
        {(dato==='')&&
        <VStack>
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
        </VStack>
        }
        <Container
          maxW="60%"
          m={5}
          p={5}
          display="flex"
          flexDirection="column"
          alignItems="stretch"
        >
          <Wrap justify={"center"} spacing={6}>
            <WrapItem>
              <FormControl
                m="2px"
                p="5px"
                w="350px"
                isInvalid={touched.titulo && errors.titulo}
              >
                <FormLabel>Titulo</FormLabel>
                <Input
                  value={formData.titulo}
                  onChange={(e) => handleChange({ titulo: e.target.value })}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, titulo: true }))
                  }
                  placeholder="Ingrese el titulo"
                  name="titulo"
                />
                {touched.titulo && errors.titulo && (
                  <FormErrorMessage color="red.500">
                    {errors.titulo}
                  </FormErrorMessage>
                )}
              </FormControl>
            </WrapItem>

            <WrapItem>
              <FormControl
                m="2px"
                p="5px"
                isInvalid={touched.categoria && errors.categoria}
              >
                <FormLabel>Categoria</FormLabel>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant={"alura2"}
                    rightIcon={<ChevronDownIcon />}
                    name="categoria"
                    color="gray.400"
                    borderColor={"white"}
                    onBlur={() =>
                      setTouched((prev) => ({ ...prev, categoria: true }))
                    }
                  >
                    {formData.categoria || "Selececcione Categoria"}
                  </MenuButton>
                  <MenuList>
                    {category.map((cat) => (
                      <MenuItem
                        key={cat.id}
                        onClick={() => handleChange({ categoria: cat.nombre })}
                        textTransform={"uppercase"}
                      >
                        {cat.nombre}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                {touched.categoria && errors.categoria && (
                  <FormErrorMessage color="red.500">
                    {errors.categoria}
                  </FormErrorMessage>
                )}
              </FormControl>
            </WrapItem>
            <WrapItem>
              <FormControl
                m="2px"
                p="5px"
                w="500px"
                isInvalid={touched.imagen && errors.imagen}
              >
                <FormLabel>Imagen</FormLabel>
                <Input
                  value={formData.imagen}
                  onChange={(e) => handleChange({ imagen: e.target.value })}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, imagen: true }))
                  }
                  placeholder="Url de la imagen"
                  name="imagen"
                />
                {touched.imagen && errors.imagen && (
                  <FormErrorMessage>{errors.imagen}</FormErrorMessage>
                )}
              </FormControl>
            </WrapItem>
            <WrapItem>
              <FormControl
                m="2px"
                p="5px"
                w="500px"
                isInvalid={touched.video && errors.video}
              >
                <FormLabel>Video</FormLabel>
                <Input
                  value={formData.video}
                  onChange={(e) => handleChange({ video: e.target.value })}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, video: true }))
                  }
                  placeholder="Url del video a subir"
                  name="video"
                />
                {touched.video && errors.video && (
                  <FormErrorMessage>{errors.video}</FormErrorMessage>
                )}
              </FormControl>
            </WrapItem>
            <WrapItem>
              <FormControl
                m="2px"
                p="5px"
                w="500px"
                isInvalid={touched.descripcion && errors.descripcion}
              >
                <FormLabel>Descripcion</FormLabel>
                <Textarea
                  value={formData.descripcion}
                  onChange={(e) =>
                    handleChange({ descripcion: e.target.value })
                  }
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, descripcion: true }))
                  }
                  placeholder="Descripcion del video"
                  name="descripcion"
                />
                {touched.descripcion && errors.descripcion && (
                  <FormErrorMessage>{errors.descripcion}</FormErrorMessage>
                )}
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
            <Button color="red.500" onClick={()=>{setFormData(initialData);setTouched(initialErrors)}}>LIMIPIAR</Button>
          </FormControl>
        </Container>
      </Center>
    </form>
  );
};
