import React, { useState } from "react";
import "./css/pricing.css";
import { Box, Heading, Text } from "@chakra-ui/react";
import Plan1 from "./Plan1";
import Plan2 from "./Plan2";

const Pricing = () => {
  const [state, setState] = useState(false);

  if (state == true) {
  }
  const [classname, setClassName] = useState(state);

  return (
    <Box className="pricing-box" m="10rem">
      <Box textAlign="center">
        <Text className="pricing-text" mb="2rem">
          pricing
        </Text>
        <Heading mb="0.5rem" fontSize="2rem" fontWeight="500">
          Your time cost more
        </Heading>
        <Text className="prcing-para">
          Use free forever plan or subscribe to a paid plan to get more
          features!
        </Text>
      </Box>

      <Box textAlign="center">
        <Box w="80%" m="auto">
          <Box className="toggle-prices">
            <span className="switcher-price">
              <label
                // className="switcher-text"

                className={state ? "toggleraction" : "switcher-text"}
                onClick={() => setState(true)}
              >
                Annually 
                 <span className={state ? "" : "switcher-tttt"}>
                10% discount
                </span>
              </label>
              <label
                // className="switcher-text-2 toggleraction"
                className={state ? "switcher-text-2" : "toggleraction"}
                onClick={() => setState(false)}
              >
                Monthly
              </label>
            </span>
          </Box>
        </Box>
        {state ? <Plan1 /> : <Plan2 />}
      </Box>
    </Box>
  );
};

export default Pricing;
