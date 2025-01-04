import { Flex, Text } from '@chakra-ui/react'

export const Footer = () => {
    return (
        <Flex as='footer' position={'fixed'} bottom={0} w={'100%'} bg={'gray.800'} boxSizing={'border-box'} color={'white'}>
            <Text>© 2025 - Todos los derechos reservados</Text>
        </Flex>
        
    )
}