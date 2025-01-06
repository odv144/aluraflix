import {  CardContainer } from "../../components/Card/Card"
import { BannerNew } from "../../components/Banner/BannerNew";
import {  VStack,} from "@chakra-ui/react";


export const Inicio = () => {
  return (
    <VStack boxSizing="border-box" gap={0} >
      <BannerNew img="home" color="#154580" />

      <CardContainer categoria={"BACKEND"} color={'rgba(255, 186, 5, 1)'}/>
      <CardContainer categoria={"FRONTEND"} color={'rgba(0, 200, 111, 1)'}/>
      
    </VStack>
  );
};
