import { Link } from "react-router-dom";
import logo from "./image 1.png";
import { CabeceraLink } from "../CabeceraLink/CabeceraLink";
import { Box, Divider, Flex,  Image, Text } from "@chakra-ui/react";
export const Cabecera = () => {
  return (
    <Flex as='header'
      w={"100%"}
    
      bgColor={"#333"}
      p={4}
      color={"white"}
      justifyContent={"space-between"}
     
     
     
    >
    
      <Link to="/">
        <Box>
          <Image src={logo} alt="logo" />
          <Divider />
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
