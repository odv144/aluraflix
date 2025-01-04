import { Flex } from "@chakra-ui/react";

export const Container=({children})=>{
    return (
        <Flex as='main' w={'100vw'} boxSizing={'border-box'} p={4} >
            {children}
        </Flex>
    )
}