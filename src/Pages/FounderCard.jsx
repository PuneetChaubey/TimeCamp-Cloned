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
} from "@chakra-ui/react";
import "../Pages/Css/Founder.css";
export default function FounderCard() {
  return (
    <Box
      w={"full"}
      bg="whiteAlpha.900"
      backdropFilter="blur"
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      mt="15rem"
    >
      <Flex justifyContent={"center"} alignItems="center" direction="column">
        <Avatar
          size={"xl"}
          src={"https://cdn-m.timecamp.com/img/person.jpg"}
          alt={"Author"}
          css={{
            border: "1px solid white",
          }}
          mb="3rem"
        />

        <Box>
          <Text fontWeight="700" mb="1rem">
            Adam Wagner, Co-owner and Chief Strategy Officer
          </Text>
          <Text className="founderInfo">
            „TimeCamp proved to be an essential management tool that gives us
            clear insight into a project’s efficiency and helps to avoid an
            overblown workload for our team.”
          </Text>
          <Image
            src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
            loader="lazy"
            width="20%"
            mb="3rem"
          />
        </Box>
      </Flex>
    </Box>
  );
}
