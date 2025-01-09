import { Link } from "react-router-dom";

import {  Button, Flex } from "@chakra-ui/react";

export const CabeceraLink = ({ url, children }) => {
  return (
    <Flex fontSize={"18px"} fontWeight={"400"} padding={"1em"}>
      <Button variant='outline'>
      <Link to={url}>{children}</Link>
      </Button>
    </Flex>
  );
};
