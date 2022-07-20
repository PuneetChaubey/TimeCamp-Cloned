import React from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import "./css/feedback.css";
const Feedback = () => {
  return (
    <Box className="feedback-box" mb="4rem">
      <Box className="row">
        <Box className="feed-text">
          <h2>Use TimeCamp To Your Advantages</h2>
          <Text
            mb="1rem"
            p="0.5rem"
            fontWeight="600"
            fontSize="18px"
            w="55%"
            m="auto"
          >
            If you’re struggling to keep track of your work across different
            projects, you need a radical change. You need TimeCamp.{" "}
          </Text>

          <Box mt="1.5rem">
            <form>
              <Box w="60%" m="auto">
                <Flex alignItems="center" justifyContent="center" flexWrap={"wrap"}>
                  <input className="input-group" placeholder="Add your Email" type="email" />
                  <button className="btn-submit">start tracking time</button>
                </Flex>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Feedback;
