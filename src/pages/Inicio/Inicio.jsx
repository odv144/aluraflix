import { CardContainer } from "../../components/Card/Card";
import { BannerNew } from "../../components/Banner/BannerNew";
import { VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "../../Context/VideosContext";

export const Inicio = () => {
  const { state } = useContext(VideosContext);
  const { videos } = state;
  const [category, setCategory] = useState([]);

  const nombresCategorias = category.map((categoria) => categoria.nombre);
  console.log(nombresCategorias);
  useEffect(() => {
    const categoria = () => {
      fetch("http://localhost:5000/categoria")
        .then((response) => response.json())
        .then((data) => setCategory(data));
    };
    categoria();
  }, []);

  return (
    <VStack boxSizing="border-box" gap={0}>
      <BannerNew img="home" color="#154580" />
      {category.map((categoria) => (
        <CardContainer
          key={categoria.id}
          categoria={categoria.nombre}
          color={categoria.color}
          videos={videos.filter(
            (video) => video.categoria === categoria.nombre
          )}
        />
      ))}
    </VStack>
  );
};
