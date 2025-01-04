import {  CardContainer } from "../../components/Card/Card"


import { BannerNew } from "../../components/Banner/BannerNew";
import {
  VStack,
 
} from "@chakra-ui/react";

export const Inicio = () => {
  return (
    <VStack >
      <BannerNew img="home" color="#154580" />
      <CardContainer />
      
    </VStack>
  );
};
