import { Center, Flex } from "@chakra-ui/react";

export const Container=({children})=>{
    return (
        <Center as='main' >
            {children}
        </Center>
    )
}