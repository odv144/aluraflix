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
import { useEffect, useState } from "react";



export const CardContainer = ({categoria,color}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [videos,setVideos]=useState([])

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/odv144/alura-cinema-api/videos")
    .then(response=> response.json())
    .then(data=>{setVideos(data)})
  },[])

  const guardar=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
  }
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

           <Nuevo fondo={"rgba(34, 113, 209, 1)"}></Nuevo>
          </ModalBody>

          <ModalFooter>
            <Button variant={'alura'} mr={3} onClick={guardar}>
              Guardar
            </Button>
            <Button variant='alura'>Cancelar</Button>
          </ModalFooter>
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
              <Card>
                <CardBody>
                  <Image src={video.imagen} alt={video.titulo} />
                </CardBody>
                <Stack>
                  <Text>{video.titulo}</Text>
                </Stack>
                <CardFooter>
                  <ButtonGroup spacing={4}>
                    <Button variant={"solid"} colorScheme="red"onClick={()=>alert(video.id)} >
                      Eliminar{" "}
                    </Button>
                    <Button variant={"solid"} colorScheme="yellow" onClick={onOpen}>
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
