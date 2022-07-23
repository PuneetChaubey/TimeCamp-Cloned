import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "./Css/land-int.css";
const LandingIntegration = () => {
  return (
    <Box mt="6rem" className="integration">
      <Box className="int-box-1">
        <Box className="int-Subbox-1">
          <Text className="special-paragraph">Time Tracking Integration</Text>
          <Heading fontWeight="600" fontSize="36px">
            Easy and quick integration with more than 100 apps and work tools
          </Heading>

          <Text
            mt="1rem"
            mb="1rem"
            fontWeight="400"
            fontSize="18px"
            color="#1b1b20"
          >
            TimeCamp works great alongside with all of the most popular work
            management tools.
          </Text>
          <Text
            mt="1rem"
            mb="1rem"
            fontWeight="400"
            fontSize="18px"
            color="#1b1b20"
          >
            Now, you can also track time directly from your go-to apps such as
            Trello or Asana thanks to our Chrome extension.
          </Text>

          <Link className="btn-check-integrations">
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/chrome-white.png" />
            <Text color="white" ml="25px">
              Track time in Chrome
            </Text>
          </Link>

          <Text
            mt="1rem"
            mb="1rem"
            fontWeight="400"
            fontSize="18px"
            color="#1b1b20"
          >
            Maintain your current workflow and connect TimeCamp, the best time
            tracking software, with your currently used apps.
          </Text>

          <Link color="#25cf60" fontWeight="700" mt="3rem" mb="2rem">
            Check Integration <ArrowForwardIcon />{" "}
          </Link>
        </Box>

        <Box p="2rem" ml="3rem">
          <SimpleGrid columns={3}>
            <Box className="box-shasow-grid">
              {" "}
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              {" "}
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png"
              />{" "}
            </Box>
            <Box className="box-shasow-grid">
              <Image
                w="40px"
                h="40px"
                src="https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png"
              />{" "}
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingIntegration;
