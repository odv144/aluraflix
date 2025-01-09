import { Box, Center, Container, Heading } from "@chakra-ui/react"
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
        <Center >
        
            <Box  w='100%' bg="blue.500" color="#eee">
                <Heading>Reproductor de Video</Heading>
                <Container w="80vw" h={"70vh"}>
                <iframe 
                width="500px"
                 height="480px"
                  src={video.video} 
                  title={video.titulo} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="same-origin"                   
                  allowfullscreen >

                  </iframe>
                </Container>
            </Box>
       
        </Center>
    )
}