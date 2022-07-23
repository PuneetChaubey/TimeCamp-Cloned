import React from "react";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { AuthNavbar } from "../Components/AuthNavbar";
import { Link } from "react-router-dom";

export const OnBoarding = () => {
  return (
    <Box>
      <AuthNavbar />
      <Stack
        textAlign="center"
        width="390px"
        margin="auto"
        spacing={3}
        mt="4rem"
      >
        <img
          src="https://app.timecamp.com/res/wizard/onboarding/images/welcome.svg"
          alt=""
        />
        <Heading size="lg" fontWeight="md">
          Let’s set up your account.
        </Heading>
        <Text>This will only take a minute.</Text>
        <Stack direction="row" margin="auto">
          <Button width="50%">
            <Link to="/">Use default settings</Link>
          </Button>
          <Button width="50%" color="white" backgroundColor="green.400">
            Let's do it!
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
