import {
  background,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Image,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import iconBorrar from "/img/borrar.png";
import iconEditar from "/img/editar.png";
import reproductor from "/img/reproductor.png";
// import videos from "/src/data/db.json";
import { Nuevo } from "/src/pages/Formulario/Nuevo";
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "../../Context/VideosContext";
import { Link } from "react-router-dom";

export const CardContainer = ({ categoria, color, videos }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state, deleteData } = useContext(VideosContext);
  // const {videos}=state;
  const [edit, setEdit] = useState();

  const [r, g, b] = color.match(/\d+/g);
  const fondo = `rgba(${r}, ${g}, ${b}, 0.3)`; // Alfa reducido a 0.5

  const modificacion = (video) => {
    setEdit(video);
    onOpen();
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };
  return (
    <>
      {/* inicio del modal */}
      <form>
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent bg={"rgba(34, 113, 209, 1)"}>
            <ModalHeader>EDITAR CARD</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Nuevo
                fondo={"rgba(34, 113, 209, 1)"}
                dato={edit}
                cerrar={onClose}
              ></Nuevo>
            </ModalBody>
          </ModalContent>
        </Modal>
      </form>
      {/* fin del modal */}
      {videos.length > 0 && (
        <Flex as="section" w={"100%"} px={4} pb={5} bgColor={fondo}>
          <Flex direction={"column"}>
            <Badge
              alignSelf={"self-start"}
              color={"white"}
              fontSize="1.6em"
              px={6}
              py={2}
              mb={4}
              borderRadius="md"
              bg={color}
              _hover={{ bg: "cyan.200", cursor: "pointer" }}
            >
              {categoria}
            </Badge>

            <Flex as="article" justifyContent={"center"}>
              <Wrap justify={"center"} spacing={5}>
                {videos.map((video) => (
                  <WrapItem key={video.id}>
                    <Card
                      m="10px"
                      w="430px"
                      h={"320px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      flexShrink={0}
                      borderRadius={"15px 15px 0px 0px"}
                      border={`5px solid ${color}`}
                      // background={url({video.imagen}) lightgray 50% / cover no-repeat}
                      boxShadow={`0px 0px 17px 8px ${color} inset`}
                    >
                      {/* <Stack align={"center"} pt="5px">
                        <Text>{video.titulo}</Text>
                      </Stack> */}
                      <CardBody
                        w="460px"
                        h="260px"
                        p="0"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box
                          borderRadius={"1s5px 15px 0px 0px"}
                          // bgImage={video.imagen}
                          // src={video.imagen}
                          alt={video.titulo}
                          w="420px"
                          h="240px"
                        >
                          <Img src={video.imagen}
                          
                          />
                         
                        </Box>
                      </CardBody>
                      {/* <Stack align={"center"}>
                        <Text maxW="240px" px="5px">
                          {video.descripcion}
                        </Text>
                      </Stack> */}
                      <CardFooter h="70px" w="100%" bg={"rgb(0, 0, 0)"}>
                        <ButtonGroup justify={"space-around"}>
                          <HStack>
                            <Button
                              variant={"solid"}
                              colorScheme="red"
                              onClick={() => handleDelete(video.id)}
                            >
                              Eliminar
                            </Button>
                            <Button
                              variant={"solid"}
                              colorScheme="yellow"
                              onClick={() => modificacion(video)}
                            >
                              Editar
                            </Button>
                            <Link to={`./player/${video.id}`}>
                              <Image
                                h="55px"
                                src={reproductor}
                                atl={"Reproducto de video"}
                              />
                            </Link>
                          </HStack>
                        </ButtonGroup>
                      </CardFooter>
                    </Card>
                  </WrapItem>
                ))}
              </Wrap>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};
