import { Badge, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import player from "/img/player.png";

export const BannerNew = ({ img, color }) => {
  return (
    <Flex
      bgGradient="linear(to-r, blue.900, blue.700)"
      w="100%"
      
      color="white"

      // overflow="hidden"
    >
      {/* Background image */}
      <Box
      
        w="full"
        h="full"
        bgImage={`url(/img/banner-${img}.png)`} // Reemplaza con tu URL de imagen
        bgSize="cover"
        bgPosition="center"
        opacity="0.4"
       
      >
        <Flex
          
          px='35'
          h="100%"
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="center"
        
        >
          {/* Left section */}
          <Box flex="1" textAlign={{ base: "center", lg: "left" }}>
            <Badge
              colorScheme="blue"
              fontSize="1.2em"
              px={4}
              py={2}
              borderRadius="md"
              bg="blue.500"
              position={"absolute"}
              zIndex={0}
            >
              FRONT END
            </Badge>

            <Text fontSize="4xl" fontWeight="bold" mt={6}>
              Challenge React
            </Text>

            <Text fontSize="lg" mt={4}>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrías comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </Text>
          </Box>

          {/* Right section */}
          <Box
            flex="1"
            // mt={{ base: 10, lg: 0 }}

            // bg="blue.800"
            border="5px solid"
            borderColor={"cyan"}
            borderRadius="25px"
            boxShadow="lg"
            textAlign="center"
          >
            <Image
              src={player} // Reemplaza con tu imagen de perfil
              alt="Profile"
              borderRadius="20px"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
