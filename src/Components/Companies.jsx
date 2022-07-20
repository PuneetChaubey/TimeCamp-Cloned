import { Box, Flex, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import "../Components/css/companies.css";
const Companies = ({ img, alt }) => {
  return (
    <Box mb="1rem" width="80%" pt="1rem">
      <Box className="img-box-comp">
        <Image src={img} alt={alt} />
      </Box>
    </Box>
  );
};

export default Companies;
