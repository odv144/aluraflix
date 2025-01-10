import { Box, Center, Container, Heading, Text } from "@chakra-ui/react"
import { BannerNew } from "../../components/Banner/BannerNew"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { VideosContext } from "../../Context/VideosContext"

export const Player=()=>{
const parametros = useParams()
const {state} =useContext(VideosContext)

// const [videos,setVideos]=useState([])
const {videos} = state;

const video=videos.find(video=>video.id===parametros.id)


    return(
        <Center w='100%'>
        
            <Box  w='100%' p={4} bg="blue.400" color="#eee">
                <Container w="80vw" h={"75vh"}>
                <Heading>
                  Reproducir {video.titulo} 
                </Heading>
                <iframe 
                width="500px"
                 height="480px"
                  src={video.video} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="same-origin"                   
                  allowfullscreen >

                  </iframe>
                <Text>
                    {video.descripcion}
                </Text>
                </Container>
            </Box>
       
        </Center>
    )
}