import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import "./Css/productdemo.css";
const ProdctCallDemo = () => {
  return (
    <Box mt="6rem" className="demoBox">
      <Box m="auto" className="demoBox-1">
        <Box w="42%" ml="20">
          <Box className="demoTextMain">
            <Heading fontWeight="700" fontSize="52px" pb="2rem">
              Want a product tour? Here you can book a call demo with our expert
            </Heading>
            <Text mt="2rem" mb="2rem" fontSize="20px">
              Learn all of the time tracking basics of TimeCamp and track time
              like a true pro.
            </Text>
            <Button
              rounded={"full"}
              bg={useColorModeValue("#f7b801", "#25cf60")}
              p="15px 40px"
              color="white"
              size="lg"
            >
              Book a Demo
            </Button>
          </Box>
        </Box>
        <Box classname="demoImgMain" ml="10rem" boxSize="xl">
          <Image
            mt="18rem"
            verticalAlign={"middle"}
            src="https://cdn-m.timecamp.com/img/greenbranding/features/black_cta_img-platform.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProdctCallDemo;
