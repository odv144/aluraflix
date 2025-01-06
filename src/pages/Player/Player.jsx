import { Box, Center, Container, Heading } from "@chakra-ui/react"
import { BannerNew } from "../../components/Banner/BannerNew"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const Player=()=>{
const parametros = useParams()

  const [videos,setVideos]=useState([])

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/odv144/aluraflix/videos")
    .then(response=> response.json())
    .then(data=>{setVideos(data)})
  },[])

  const video=videos.find(video=>video.id===Number(parametros.id))
  console.log(video)
    return(
        <Center>
        
            <Box w="100%" h="100vh" bg="blue.500" color="#eee">
                <Heading>Reproductor de Video</Heading>
                <Container>
                <iframe 
                width="100%"
                 height="100%"
                  src={video.video} 
                  title="YouTube video player" 
                 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 
                  allowfullscreen></iframe>
                </Container>
            </Box>
       
        </Center>
    )
}