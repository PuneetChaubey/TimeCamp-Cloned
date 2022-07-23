import React from "react";
import {
    Text,
    Heading,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Box,
} from "@chakra-ui/react";


export const Review=()=> {

const Review=({ data }) =>{


    return (
      <>
      <Text
      textTransform={"uppercase"}
      color="#3cd471"
      fontWeight={700}
      fontSize={"md"}
      w="40%"
      mb={10}
      textAlign="center"
      m="auto"
      >
      REVIEWS
  </Text>
  <Heading fontWeight="700" fontSize="36px" textAlign="center" w="50%" m="auto" mb={10}>
  Time tracking software for businesses across all industries and sizes
  </Heading>
 
      <Tabs>
        <Box>
            <TabList h={30} w="60%" m="auto" justifyContent="center" boxShadow="rgba(0, 0, 0, 0.45) 0px 25px 20px -20px">
              {data.map((tab, index) => (
                <Tab key={index}>{tab.label}</Tab>
              ))}
            </TabList>
        </Box>
        <Box h="auto" w="30%" m="auto" justifyContent="center" mt={10} textAlign="left" boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <TabPanels>
              {data.map((tab, index) => (
                <TabPanel p={4} key={index}>
                  {tab.content}
                </TabPanel>
              ))}
            </TabPanels>
            <TabPanels>
              {data.map((tab, index) => (
                <TabPanel key={index} fontWeight="bold" textAlign="right">
                  {tab.customer}
                </TabPanel>
              ))}
            </TabPanels>
        </Box>
      </Tabs>
      </>
    )
  }


  const ReviewData = [
    {
      label: 'Marketing Agencies',
      content: 'The primary reason I chose TimeCamp was the direct timekeeping-to-invoicing function, which has been a tremendous timesaver.I love the way it shows me what I am spending my time on even when I am not logging billable hours.',
      customer:'-Kathryn'
      // content:'Great asset to managing our marketing agency. We love the ease it takes to input times. We never have to worry about time record keeping because TimeCamp does it so accurately. It makes creating our invoices at the end of each month so much easier.'
    },
    {
      label: 'IT & Software Houses',
      content:'Our business problem was simple - at any given time we have 20 or so contractors working on a handful of different projects and we needed to be scientific about knowing how many of whose hours were being spent on which project.TimeCamp solved this problem well and simply.',
      customer:'-Noah'
      // content:"We have tried a lot of tools and the integration, flexibility and fast array of features that come with TimeCamp have really made this tool stand out and pay for itself. It connects to a number of tools we use like our in house project management tools, our client's project management tools and our accounting software."
    },
    {
        label: 'Designers',
        content:'We have tried a lot of tools and the integration, flexibility and fast array of features that come with TimeCamp have really made this tool stand out and pay for itself. It connects to a number of tools we use like our in house project management tools, our clients project management tools and our accounting software.',
        customer:'-Jakes'
      },
    {
        label: 'Accounting',
        content:'Great asset to managing our marketing agency. We love the ease it takes to input times. We never have to worry about time record keeping because TimeCamp does it so accurately. It makes creating our invoices at the end of each month so much easier.',
        customer:'-GetApp.com'
    }
  ]

 
  return <Review data={ReviewData} />

 
}


