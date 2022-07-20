import {
  Box,
  Link,
  Text,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
const Information = () => {
  return (
    <Box mt="3rem">

      <Box p={15} m="auto" w="100%" mb="5rem">
        <Box>
          <Box mt="2rem" mb="4rem">
            <Flex justifyContent="center" alignItems="center">
              <Text fontWeight="700" pr="1rem">
                Want to track time in your team ?
              </Text>{" "}
              <Link fontWeight="700" color="#3cd471">
                Book a Demo <ChevronRightIcon />{" "}
              </Link>
            </Flex>
          </Box>
          <Box width="70%" margin="auto">
            <Flex justifyContent="center" alignItems="center">
              <Heading fontWeight="700" fontSize="36px" textAlign="center">
                Try an automatic, easy-to-use time tracker for the entire
                organization!
              </Heading>
            </Flex>
          </Box>
        </Box>
      </Box>


{/* sridhar work from here  */}
      <Box w="80%" m="auto">
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box mb="3rem" mt="2rem" border="1px solid black">
              <Text
                textTransform={"uppercase"}
                color="#3cd471"
                fontWeight={700}
                fontSize={"md"}
                w="40%"
                alignSelf={"flex-start"}
                mb="1rem"
              >
                FOR EMPLOYEES
              </Text>

              <Heading w="60%" fontSize="48px" fontWeight="700" p="1rem">
                Track your employees working time
              </Heading>
              <Text fontSize="16px" fontWeight="600" p="1rem">
                Log working hours of your employees automatically or manually
                and make sure they are billed fairly.
              </Text>
              <Box mt="10px" minH={240}>
                <Text></Text>
                <Text>
                  Enjoy the transparency - check your employees time records
                  with more detailed information on the handy timesheet or a
                  graphical, calendar-like view.
                </Text>
                <Text></Text>
                <Text></Text>
              </Box>
            </Box>

            <Box border="1px solid black" mt="5rem">
              <Image
                alt={"feature image"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.png"
                }
                mt="10rem"
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Information;
