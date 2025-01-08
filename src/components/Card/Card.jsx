import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
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
// import videos from "/src/data/db.json";
import {Nuevo} from "/src/pages/Formulario/Nuevo"
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "../../Context/VideosContext";



export const CardContainer = ({categoria,color}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const{state,deleteData}=useContext(VideosContext)
  const {videos}=state;
  const [edit,setEdit]=useState();
 


  const modificacion=(video)=>{
    setEdit(video);
    onOpen();

  }

   const handleDelete = async (id) => {
    try {
      await deleteData('http://localhost:5000/videos', id);
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };
  return (
    <>
    {/* inicio del modal */}
      <form>
      <Modal isOpen={isOpen} onClose={onClose} size='2xl' >
        <ModalOverlay />
        <ModalContent bg={'rgba(34, 113, 209, 1)'} >
          <ModalHeader>EDITAR CARD</ModalHeader>
          <ModalCloseButton />
          <ModalBody >

           <Nuevo fondo={"rgba(34, 113, 209, 1)"} dato={edit} cerrar={onClose}></Nuevo>
          </ModalBody>

         
        </ModalContent>
      </Modal>
      </form>
    {/* fin del modal */}

    <Flex as="section" w={"100%"} px={4} pb={5} bgColor={"rgba(0,0,0,0.9)"}>
      <Flex direction={'column'}>
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
      
     
      <Flex as="article">
        <Wrap justify={"center"} spacing={4}>
          {videos.map((video) => (
            <WrapItem key={video.id}>
              <Card h={'450px'}>
                <Stack align={'center'} pt='5px'>
                  <Text>{video.titulo}</Text>
                </Stack>
                <CardBody >
                  <Image src={video.imagen} alt={video.titulo} h='250px'/>
                </CardBody>
                <Stack align={'center'}>
                  <Text maxW='240px' px='5px'>{video.descripcion}</Text>
                </Stack>
                <CardFooter>
                  <ButtonGroup justify={'space-around'}>
                    <Button variant={"solid"} colorScheme="red"onClick={()=>handleDelete(video.id)} >
                      Eliminar{" "}
                    </Button>
                    <Button variant={"solid"} colorScheme="yellow"  onClick={()=>modificacion(video)}>
                      Editar{" "}
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
      </Flex>
    </Flex>
    </>
  );
};
