import {
  Box,
  Link,
  Text,
  // Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  // Stack,
  // StackDivider,
  // Icon,
  // useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
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
            <Box mb="3rem" mt="2rem">
              <Text
                textTransform={"uppercase"}
                color="#3cd471"
                fontWeight={700}
                fontSize={"md"}
                w="40%"
                alignSelf={"flex-start"}
                mb="1rem"
                textAlign="left"
              >
                FOR EMPLOYEES
              </Text>

              <Heading w="60%" fontSize="48px" fontWeight="700" p="1rem" textAlign="left">
                Track your employees working time
              </Heading>
              <Text fontSize="16px" fontWeight="600" p="1rem" textAlign="left">
                Log working hours of your employees automatically or manually
                and make sure they are billed fairly.
              </Text>
              <Box mt="10px" minH={240}>
                <Accordion>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Check logged time on the handy timesheet
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    Enjoy the transparency - check your employees time records
                    with more detailed information on the handy timesheet or a
                    graphical, calendar-like view.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        try our easy-to-use desktop app
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    TimeCamp desktop app is reliable and easy to use time tracking 
                    tool that works in the background and seamlessly fills the timesheets.
                    All you have to do is to focus on your work!
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Track Your activities automatically
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    Fill your timesheets with the daily activities 
                    and time entries with just one click.
                    Easy time tracking app is here!
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>

            <Box mt="5rem">
              <Image
                alt={"feature image"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.png"
                }
                mt="10rem"
              />
            </Box>
            <Button colorScheme='whatsapp' size='md' height="58px" w="50%" borderRadius={30}>Track employees time</Button>
          </SimpleGrid>
        </Box>
      </Box>
      <Box w="80%" m="auto">
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box mb="3rem" mt="2rem">
              <Text
                textTransform={"uppercase"}
                color="#3cd471"
                fontWeight={700}
                fontSize={"md"}
                w="40%"
                alignSelf={"flex-start"}
                mb="1rem"
                textAlign="left"
              >
                FOR MANAGERS
              </Text>

              <Heading w="60%" fontSize="48px" fontWeight="700" p="1rem" textAlign="left">
                Track project time and budget easier than ever before
              </Heading>
              <Text fontSize="16px" fontWeight="600" p="1rem" textAlign="left">
              Stay on top of your team’s performance and create accurate 
              resource estimates for all the projects.
              </Text>
              <Box mt="10px" minH={240}>
                <Accordion>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Ensure project profitability by analyzing reports
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    TimeCamp provides you with all the data you need to analyze the projects’ performance 
                    to ensure your team always stays on track. 
                    Look at the clear graphics and get a better view of the time tracked!
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Integrate with other tools for better performence
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    Use seamless and quick setup to track time directly from a tool you already use, 
                    or import your project structure into TimeCamp.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Take advantage of simple,accurate budgeting
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    No more guessing! With TimeCamp you will get reasonable estimates 
                    for your projects and keep an eye on the resources usage.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>

            <Box mt="5rem">
              <Image
                alt={"feature image"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/tools-integrations.png"
                }
                mt="10rem"
              />
            </Box>
            <Button colorScheme='whatsapp' size='md' height="58px" w="50%" borderRadius={30}>Increase Team Productivity</Button>
          </SimpleGrid>
        </Box>
      </Box>
      <Box w="80%" m="auto">
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box mb="3rem" mt="2rem">
              <Text
                textTransform={"uppercase"}
                color="#3cd471"
                fontWeight={700}
                fontSize={"md"}
                w="40%"
                alignSelf={"flex-start"}
                mb="1rem"
                textAlign="left"
              >
                ENTERPRISE
              </Text>

              <Heading w="60%" fontSize="48px" fontWeight="700" p="1rem" textAlign="left">
              Try enterprise time tracking at the highest level
              </Heading>
              <Text fontSize="16px" fontWeight="600" p="1rem" textAlign="left">
              Custom needs? No problem! Contact us, and 
              we will definitely find a perfect solution for your enterprise.
              </Text>
              <Box mt="10px" minH={240}>
                <Accordion>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Transfer Multilevel Project Structures
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    No matter how many projects your team is currently working on, 
                    with TimeCamp you'll be able to organize work time without any problem.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Achieve full complaince withdata regulations
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    Our time tracking tool is fully GDPR compliant so that you can leave personal data and its privacy on us.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Get Help from our customer success manager
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    Does your organization have more advanced or extraordinary needs? 
                    Our team would be happy to ensure you a private cloud implementation and help with dedicated onboarding.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>

            <Box mt="5rem">
              <Image
                alt={"feature image"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/compilance-enterprise.png"
                }
                mt="10rem"
              />
            </Box>
            <Button colorScheme='whatsapp' size='md' height="58px" w="50%" borderRadius={30}>Contact for customized solution</Button>
          </SimpleGrid>
        </Box>
      </Box>
      <Box w="80%" m="auto">
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box mb="3rem" mt="2rem">
              <Text
                textTransform={"uppercase"}
                color="#3cd471"
                fontWeight={700}
                fontSize={"md"}
                w="40%"
                alignSelf={"flex-start"}
                mb="1rem"
                textAlign="left"
              >
                FOR HR
              </Text>

              <Heading w="60%" fontSize="48px" fontWeight="700" p="1rem" textAlign="left">
              Check Timesheets and control attendance in one place
              </Heading>
              <Text fontSize="16px" fontWeight="600" p="1rem" textAlign="left">
              With TimeCamp you can forget about endless stacks of papers! 
              Take advantage of convenient and easy to use tools to support your daily HR and payroll work.
              </Text>
              <Box mt="10px" minH={240}>
                <Accordion>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Track attendence automatically
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    TimeCamp allows both you and your employees to keep an eye on their absence, 
                    sick days, or vacation leaves. Track attendance and working hours easily as never before.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Check and approve employees Timesheets
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    Enjoy the benefits of fully automated timesheet submissions - quickly approve or reject them and 
                    leave notes to make sure the employees understand what needs to be done to get approved.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h4>
                      <AccordionButton>
                      <Box flex='1' textAlign='left' textColor="#3cd471">
                        Integrate with payroll tools to work faster
                      </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} textAlign='left'>
                    Make sure your employees are paid fairly!
                    Use TimeCamp to connect the attendance data with payroll tools to create payroll lists with just a few clicks.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>

            <Box mt="5rem">
              <Image
                alt={"feature image"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/attendance-features.png"
                }
                mt="10rem"
              />
            </Box>
            <Button colorScheme='whatsapp' size='md' height="58px" w="50%" borderRadius={30}>Make HR's Work Easier</Button>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
    
  );
};

export default Information;
