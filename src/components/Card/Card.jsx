import { CardBody, Flex, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import styles from "./Card.module.css";
import iconBorrar from "/img/borrar.png";
import iconEditar from "/img/editar.png";
import videos from "/src/data/db.json";

export const Card = () => {

  return (
    <Flex w={"100%"} boxSizing={"border-box"} p={4}>
        <Text
          as="h1"
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          // mt={10}
        >
          Un lugar para guardar tus videos favoritos
        </Text>
        <Flex>
          <Wrap>
          {
            videos.map((video) => {<Text>{video.titulo}</Text>})
          }      
                {/* {videos.map((video) => (
              <WrapItem key={video.id}>
                <Card>
                  <CardBody>
                    <Image src={video.imagen} alt={video.titulo} />
                  </CardBody>
                  <Stack>
                    <Text>{video.titulo}</Text>
                  </Stack>
                  titulo={video.titulo}
                </Card>
              </WrapItem>
            ))} */}
          </Wrap>
        </Flex>
      </Flex>
  );
};
