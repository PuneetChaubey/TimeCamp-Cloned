import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  FormControl,
  Input,
  Link,
} from "@chakra-ui/react";
import FounderCard from "../Pages/FounderCard";
import "../Pages/Css/Founder.css";
export default function FounderCard2() {
  return (
    <Box
      w={"full"}
      h={"130vh"}
      backgroundImage={"url(https://cdn-m.timecamp.com/img/backgroundTop.webp)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      padding="20px"
    >
      <Flex
        width="88%"
        margin="auto"
        justifyContent="space-between"
        // border="1px solid red"
      >
        <Box
          w="50%"
          bg="whiteAlpha.900"
          backdropFilter="blur"
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          mt="3.5rem"
        >
          <Box mt="2rem" padding="40px">
            <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
              Free time tracking software
            </Heading>

            <Box>
              <Heading size="3xl" fontSize="52px" className="heading">
                Increase project profitability with time tracking
              </Heading>
            </Box>

            <ul className="top_list">
              <li>✓ Unlimited users</li>
              <li>✓ Unlimited projects</li>
              <li>✓ 30+ integrations</li>
              <li>✓ Automated time tracking</li>
            </ul>
            <Box mt="3rem">
              <form mt="4rem" className="form-horizontal">
                <Box className="form-wrapper">
                  <input
                    placeholder="Your e-mail address"
                    type="email"
                    className="form"
                  />
                  <Text mt="1rem">
                    By signing up you agree to our{" "}
                    <Link color="#3cd471">Terms and Conditions</Link> and
                    <Link color="#3cd471"> Privacy Policy.</Link>
                  </Text>
                </Box>
                <Box className="btn-wrapper" mt="3rem">
                  <button>Start tracking Time</button>
                  <Box className="googlelog" ml="4rem">
                    <span>Or sign up with: </span>
                    <Image src="https://cdn-m.timecamp.com/img/logos/google.svg" />
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>

        <Box width="46%" align="center" mt="8rem">
          <FounderCard />
        </Box>
      </Flex>
    </Box>
  );
}
