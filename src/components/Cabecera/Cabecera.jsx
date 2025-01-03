import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./image 1.png";
import { CabeceraLink } from "../CabeceraLink/CabeceraLink";
import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
export const Cabecera = () => {
  return (
    <Flex
    w={"100%"}
    position={'relative'}
     zIndex={1}
      bgColor={"#333"}
      p={4}
      color={"white"}
      justifyContent={"space-between"}
    >
    
      <Link to="/">
        <Box>
          <Image src={logo} alt="logo" />
          <Text as="span">Cinema</Text>
        </Box>
      </Link>

      <Box
        as="nav"
        display="flex"
        justifyContent="space-between"
        cursor={"pointer"}
      >
        <CabeceraLink url="./">Home</CabeceraLink>
        <CabeceraLink url="./nuevo">Nuevo Video</CabeceraLink>
      </Box>
    </Flex>
  );
};
