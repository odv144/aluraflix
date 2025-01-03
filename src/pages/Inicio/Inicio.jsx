import { Card } from "../../components/Card/Card"


import { BannerNew } from "../../components/Banner/BannerNew";
import {
  VStack,
 
} from "@chakra-ui/react";

export const Inicio = () => {
  return (
    <VStack align={"center"} justify={"center"}>
      <BannerNew img="home" color="#154580" />
      <Card />
      
    </VStack>
  );
};
