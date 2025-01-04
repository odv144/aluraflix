import { Button, ButtonGroup, Card, CardBody, CardFooter, Flex, Image, Stack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import iconBorrar from "/img/borrar.png";
import iconEditar from "/img/editar.png";
import videos from "/src/data/db.json";

export const CardContainer = () => {

  return (
    <VStack
     as='section' 
     w={"100%"}
   
     >
        <Text
          as="h1"
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          // mt={10}
        >
          Un lugar para guardar tus videos favoritos
        </Text>
        <Flex as='article'>
          <Wrap justify={'center'} spacing={4}>
                {videos.map((video) => (
              <WrapItem key={video.id}>
                <Card>
                  <CardBody>
                    <Image src={video.imagen} alt={video.titulo} />
                  </CardBody>
                  <Stack>
                    <Text>{video.titulo}</Text>
                  </Stack>
                 <CardFooter >
                 <ButtonGroup spacing={4}>
                  <Button variant={'solid'} colorScheme="red" >Eliminar </Button>
                  <Button variant={'solid'} colorScheme="yellow" >Editar </Button>
                 
                 </ButtonGroup>
                 
                
                 </CardFooter>
                </Card>
              </WrapItem>
            ))}
          </Wrap>
          </Flex>
      </VStack>
  );
};
