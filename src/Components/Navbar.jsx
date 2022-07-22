import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

import "../Components/Navbar.css";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* #25cf60 */}
      <Box bg={useColorModeValue("#25cf60", "#25cf60")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"center"}>
          <Text color="white" fontSize="lg">
            Want to become a Reseller, Affiliate, or Integration Partner? We are
            recruiting for our new Partner Programs.
            <Link fontWeight="bold" borderBottom="2.5px solid white">
              Learn more and apply here ➡️
            </Link>
          </Text>
        </Flex>
      </Box>

      <Box p={2} zIndex={-1}>
        <Flex
          width="82%"
          margin="auto"
          height="100px"
          justifyContent="space-between"
          alignItems="center"
          //   border="1px solid red"
        >
          <Box width="10%" cursor="pointer">
            <Image
              src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
              alt="logo"
            />
          </Box>
          <Box width="30%">
            <Flex justifyContent="space-between" cursor="pointer">
              <ReactRouterLink to="/features">
                <Text className="textcolor">Features</Text>
              </ReactRouterLink>
              <Text className="textcolor">Pricing</Text>
              <ReactRouterLink to="/integrations">
                <Text className="textcolor">Integration</Text>
              </ReactRouterLink>
              <Text className="textcolor">Blog</Text>
            </Flex>
          </Box>
          <Box width="32%">
            <Flex
              justifyContent="space-between"
              cursor="pointer"
              alignItems="center"
            >
              <Text className="textcolor border" borderEnd="1px solid green">
                Book a Demo
              </Text>

              <ReactRouterLink to="/auth/login">
                <Text className="textcolor">Sign in</Text>
              </ReactRouterLink>

              <Button
                colorScheme="yellow"
                color="white"
                size="lg"
                rounded={"full"}
              >
                Go to App
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
