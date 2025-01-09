import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import player from "/img/player.png";

export const BannerNew = ({ img, color }) => {
  return (
    <Box
      w="100%"
      minH="50vh"
      bgGradient="linear(to-r, blue.900, blue.700)"
      bgImage={`url(/img/banner-${img}.png)`}
      color="white"
   
      // overflow="hidden"
    >
      {/* Background image */}
      <Flex
        h="100%"
        direction={"column"}
       
        justify={"center"}
        bg="rgba(6, 1, 246, 0.37)"
      >
        <Flex 
          p="35px"
           boxSizing="border-box"
          direction={{ base: "column", lg: "row" }}
        >
          {/* Left section */}
          <Box h="100%" direction="column" >
            <HStack>
              <VStack w="50%" align="flex-start">
                <Badge
                  color='white'
                  fontSize="1.2em"
                  px={4}
                  py={2}
                  borderRadius="md"
                  bg="rgba(107, 209, 255, 1)"
                  _hover=	{{bg:'cyan.200',cursor:'pointer'}}

                >
                  FRONT END
                </Badge>

                <Heading fontSize="4xl" fontWeight="bold" mt={6}>
                  Challenge React
                </Heading>

                <Text fontSize="lg" mt={4}>
                  Este challenge es una forma de aprendizaje. Es un mecanismo
                  donde podrías comprometerte en la resolución de un problema
                  para poder aplicar todos los conocimientos adquiridos en la
                  formación React.
                </Text>
              </VStack>

              {/* Right section */}
              <Box
                w="50%"
                border="5px solid"
                borderColor={"cyan"}
                borderRadius="25px"
                boxShadow="lg"
                
              >
                <Image
                  src={player} // Reemplaza con tu imagen de perfil
                  alt="Profile"
                  borderRadius="20px"
                />
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
