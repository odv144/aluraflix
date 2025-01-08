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
      {/* {videos
        .filter(video => nombresCategorias.includes(video.categoria))
        .map(video => (
          <CardContainer key={video.id} categoria={video.categoria} color={video.color} />
        ))}    */}

      { 
        
        category.map((categoria) =>
        videos.filter((video) => video.categoria === categoria.nombre).map((video) => (
            <CardContainer
              key={video.id}
              categoria={video.categoria}
              // color={categoria.color}
            />
          ))
      
      )
     
      }
    </VStack>
  );
};
