import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  OrderedList,
  ListItem,
  UnorderedList,
  Heading,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import "./css/faq.css";
const AccordionPage = () => {
  return (
    <Box mt="15rem" w="80%" m="auto">
      <Text align="center" fontWeight="bold" fontSize="3xl" mt="1rem" mb="2rem">
        FAQ
      </Text>
      <Accordion defaultIndex={[0]} allowMultiple >
        <Box className="faq">
          {" "}
          <AccordionItem p="1rem">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box flex="1" textAlign="left" ml="20px">
                      <Heading size="md"> What is Time Tracker ?</Heading>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text className="faqtext">
                    A time tracker is computer software or a web app that allows
                    teams, managers, and freelancers to measure time spent on
                    tasks and projects. It is used in many industries (law
                    firms, accounting, creative agencies, IT teams) for settling
                    up with hourly workers and billing clients for work.{" "}
                  </Text>
                  <Text className="faqtext">
                    You can integrate a time tracker with third-party tools for
                    project management, accounting, customer service, to-do
                    lists, and many more. Speaking shortly, a time tracker helps
                    you understand which practices in your business lead to time
                    waste.
                  </Text>
                  <Text className="faqtext">
                    With this knowledge, you can reduce bad practices and
                    optimize workflow.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Box>

        <AccordionItem p="1rem">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box flex="1" textAlign="left" ml="20px">
                    <Heading size="md"> Why use Time Tracker ?</Heading>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight="600">
                <Text>
                  There are many reasons to use time tracking software. Here are
                  the main use cases for a time tracker:
                </Text>
                <OrderedList>
                  <ListItem>
                    Tracking billable hours: helps freelancers and employees who
                    are paid on an hourly basis measure time spent on work with
                    accuracy up to every second.
                  </ListItem>
                  <ListItem>
                    Improving productivity: employees who struggle with poor
                    time management and distractions can work on their
                    efficiency, understand how they work, and what takes most of
                    their time.
                  </ListItem>
                  <ListItem>
                    Timesheet management: one of the most common features of
                    time tracker is a timesheet – a digital version of a paper
                    timesheet. With a time tracker, your team can have it filled
                    out automatically.
                  </ListItem>
                  <ListItem>
                    Work automation: time tracker helps to save time on
                    administrative and repetitive tasks, better allocate
                    resources, cut costs, and smoothen teams’ workflow.
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem p="1rem">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box flex="1" textAlign="left" ml="20px">
                    <Heading size="md">
                      {" "}
                      What are benifits of Time Tracker ?
                    </Heading>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontWeight="600">
                <UnorderedList>
                  <ListItem>Increased productivity</ListItem>
                  <ListItem>Accurate timesheets</ListItem>
                  <ListItem>Real-time updates on projects status</ListItem>
                  <ListItem>Easy attendance management</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem p="1rem">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box flex="1" textAlign="left" ml="20px">
                    <Heading size="md"> How to save Time on Time Sheet ?</Heading>
                   
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text className="faqtext">
                  With TimeCamp, you can set up billing rates for your team
                  members, projects, and clients.
                </Text>

                <Text className="faqtext">
                  Have the time tracker record billable time and easily turn
                  timesheet data into invoices, adjust the tax rates for your
                  country and profession. And then, simply export the document
                  or send it straight to your clients.
                </Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem p="1rem">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box flex="1" textAlign="left" ml="20px">
                    <Heading size="md">
                      {" "}
                      How to Bill Client hourly Work ?
                    </Heading>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text className="faqtext">
                  There is nothing better than having your timesheet filled out
                  automatically!
                </Text>

                <Text className="faqtext">
                  Edit your time logs any time or add time manually for even
                  more accuracy. Approve your team’s daily or weekly timesheets
                  with one click without effort.
                </Text>

                <Text className="faqtext">
                  TimeCamp’s non-intrusive desktop app works in the background
                  so you and your team can focus on what really matters, while
                  the time tracker collects all the data for timesheets.
                </Text>
                <Text className="faqtext">
                  Quick, easy, and painless timesheet management!
                </Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AccordionPage;
