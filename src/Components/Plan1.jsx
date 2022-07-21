import {
  Box,
  Button,
  Divider,
  Heading,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
const Plan1 = () => {
  return (
    <Box>
      <SimpleGrid columns={4} spacing={8}>
        <Box
          borderRadius="1.5rem"
          bg={useColorModeValue("white", "white")}
          boxShadow={"2xl"}
          height="100%"
        >
          <Box textAlign="center" p="25px">
            <Heading color="#25cf60" p="1rem" fontSize="5xl">
              Free
            </Heading>
            <Text>Free Foreve Plan</Text>
            <Divider
              colorScheme="#25cf60"
              p="10px"
              orientation="horizontal"
              w="80%"
              m="auto"
              opacity="2"
            />

            <Text mt="25px" className="text-onfo-plane">
              Measure on which activities you spend time while working
            </Text>
            <Link className="btn-check-integrationss">
              <Text color="white" fontWeight="600">
                Contact Us
              </Text>
            </Link>
            <UnorderedList className="listofplan">
              <ListItem>Unlimited users</ListItem>
              <ListItem>Unlimited Projects & tasks</ListItem>
              <ListItem>Desktop & Mobile app</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box
          borderRadius="1.5rem"
          bg={useColorModeValue("white", "white")}
          boxShadow={"2xl"}
          height="100%"
        >
          <Box textAlign="center" p="25px">
            <Heading color="black" p="1rem">
              $ 6.3
            </Heading>
            <Text>user/mo</Text>
            <Divider
              colorScheme="#25cf60"
              p="10px"
              orientation="horizontal"
              w="80%"
              m="auto"
              opacity="2"
            />

            <Text mt="25px">Be more transparent and gain customers' trust</Text>
            <Link className="btn-check-integrationss">
              <Text color="white" fontWeight="600" textAlign="center">
                Start you Free trial
              </Text>
            </Link>
            <UnorderedList className="listofplan">
              <ListItem>Time rounding</ListItem>
              <ListItem>Hide time from users</ListItem>
              <ListItem>Management roles</ListItem>
              <ListItem>Team productivity tracking </ListItem>
              <ListItem>XLS reports export</ListItem>
              <ListItem> Unlimited integrations </ListItem>
              <ListItem>Billable time & budgeting</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box
          bg="#25cf60;"
          borderRadius="1.5rem"
          boxShadow={"2xl"}
          height="100%"
        >
          <Box textAlign="center" p="25px">
            <Heading color="white" p="1rem">
              $ 9
            </Heading>
            <Text color="white">user/mo</Text>
            <Divider
              colorScheme="#25cf60"
              p="10px"
              orientation="horizontal"
              w="80%"
              m="auto"
              opacity="2"
            />

            <Text mt="25px" color="white">
              Get full control over your business
            </Text>
            <Link className="btn-check-integrationss btn-btn">
              <Text color="#25cf60" fontWeight="600">
                Join For Free
              </Text>
            </Link>
            <UnorderedList className="listofplan" color="white">
              <ListItem>Custom user roles</ListItem>
              <ListItem>Billing rates</ListItem>
              <ListItem>Invoicing</ListItem>
              <ListItem>Timesheet approvals</ListItem>
              <ListItem>Screenshots</ListItem>
              <ListItem>SSO</ListItem>
              <ListItem>2-factor authentication</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box
          borderRadius="1.5rem"
          bg={useColorModeValue("white", "white")}
          boxShadow={"2xl"}
          height="100%"
        >
          <Box textAlign="center" p="25px">
            <Heading color="black" p="1rem" fontSize="25px">
              Let's discuss
            </Heading>
            <Text>Customize TimeCamp to your custom needs</Text>
            <Divider
              colorScheme="#25cf60"
              p="10px"
              orientation="horizontal"
              w="80%"
              m="auto"
              opacity="2"
            />

            <Text mt="25px">
              Measure on which activities you spend time while working
            </Text>
            <Link className="btn-check-integrationss">
              <Text color="white" fontWeight="600">
                Join For Free
              </Text>
            </Link>
            <UnorderedList className="listofplan">
              <ListItem>Personalized training</ListItem>
              <ListItem>Private cloud </ListItem>
              <ListItem>Self hosted server</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Plan1;
