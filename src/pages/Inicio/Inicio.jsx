import { CardContainer } from "../../components/Card/Card";
import { BannerNew } from "../../components/Banner/BannerNew";
import { VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "../../Context/VideosContext";

export const Inicio = () => {
  const { state,category } = useContext(VideosContext);
  const { videos } = state;

  return (
    <VStack boxSizing="border-box" gap={0}>
      <BannerNew img="home" color="#154580" />
      {category.map((categoria) => (
        <CardContainer
          key={categoria.id}
          categoria={categoria.nombre}
          color={categoria.color}
          videos={videos.filter(
            (video) => video?.categoria === categoria.nombre
          )}
        />
      ))}
    </VStack>
  );
};
