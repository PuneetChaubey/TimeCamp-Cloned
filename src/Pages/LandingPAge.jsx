import React from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  useColorModeValue,
  Text,
  Heading,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import FounderCard2 from "./FounderCart2";
import Companies from "../Components/Companies";
import Information from "./Information";
import ProdctCallDemo from "./ProdctCallDemo";
import LandingIntegration from "./LandingIntegration";
import AccordionPage from "../Components/Accordion";
import Footer from "../Components/Footer";
import Feedback from "../Components/Feedback";
import {Review} from "./Review"

const LandingPAge = () => {
  const company = [
    {
      id: 2,
      img: "https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png",
      alt: "imges",
    },
    {
      id: 1,
      img: "https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png",
      alt: "imges",
    },
    {
      id: 3,
      img: "https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png",
      alt: "imges",
    },
    {
      id: 4,
      img: "https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png",
      alt: "imges",
    },
    {
      id: 5,
      img: "https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png",
      alt: "imges",
    },
    {
      id: 6,
      img: "https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png",
      alt: "imges",
    },
  ];

  const logo = [
    {
      id: 1,
      img: "https://cdn-m.timecamp.com/img/greenbranding/features/crozdesk.png",
    },
    {
      id: 2,
      img: "https://cdn-m.timecamp.com/img/greenbranding/features/capterra.png",
    },
    {
      id: 3,
      img: "https://cdn-m.timecamp.com/img/greenbranding/features/crowd.png",
    },
    {
      id: 4,
      img: "https://cdn-m.timecamp.com/img/greenbranding/features/get-app.png",
    },
  ];
  return (
    <Box>
      <Navbar />
      <FounderCard2 />
      <Box bg={useColorModeValue("#25cf60", "#25cf60")}>
        <Box pt="2rem" pb="1rem">
          <Heading color="white" fontSize="lg" textAlign="center">
            Trusted by 18,000 teams from all over the world (and still growing!)
          </Heading>
        </Box>

        <Box className="compnie-grid">
          {company.map((c) => (
            <Companies key={c.id} {...c} />
          ))}
        </Box>
      </Box>

      <Information />
      <ProdctCallDemo />
      <Review/>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} w="80%" m="auto" mb="2rem" mt={100}>
        <GridItem w="60%">
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/crozdesk.png" />
        </GridItem>
        <GridItem w="60%">
          {" "}
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/capterra.png" />
        </GridItem>
        <GridItem w="60%">
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/crowd.png" />
        </GridItem>
        <GridItem w="60%">
          <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/get-app.png" />
        </GridItem>
      </Grid>


      <LandingIntegration />
      <Feedback />
      <AccordionPage />
      <Footer />
    </Box>
  );
};

export default LandingPAge;
