import { Text } from "@chakra-ui/react";

export const Titulo = ({ children}) => {
  return (
    <Text fontSize={"2xl"} textAlign={"center"} fontWeight={500} color={'#333'}mb={4}>
      {children}
    </Text>
  );
};
