//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { Flex, Spacer, Box, Heading, ButtonGroup } from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";
import { Button } from "@chakra-ui/react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { GrStatusGood } from "react-icons/gr";
import { BsTags } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { AiFillDashboard, AiTwotoneProject } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { MdOutlineComputer } from "react-icons/md";
//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div className="flx">
        <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
              <div className="logotext">
                {/* small and big change using menucollapse state */}
                <p>
                  {
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorLogo.svg"
                      alt=""
                      width="120px"
                    />
                  }
                </p>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <p>TRACK</p>
                <MenuItem active={true} icon={<BiTimeFive />}>
                  Timesheet
                </MenuItem>

                <p>ANALYZE</p>
                <MenuItem icon={<AiFillDashboard />}>Dashboard</MenuItem>
                <MenuItem icon={<GoReport />}>Reports</MenuItem>
                <MenuItem icon={<MdOutlineComputer />}>Computer Time</MenuItem>
                <p>MANAGE</p>
                <MenuItem icon={<AiTwotoneProject />}>Projects</MenuItem>
                <MenuItem icon={<BsTags />}>Tages</MenuItem>
                <p>TEAM</p>
                <MenuItem icon={<FiUsers />}>Users</MenuItem>
                <MenuItem icon={<GrStatusGood />}>Users</MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
        <div className="main">
          <div className="btn">
            <h2>
              {" "}
              12 days left in your Pro trial{" "}
              <Button
                marginStart="8px"
                height="40px"
                border="none"
                backgroundColor="yellow"
                colorScheme="red"
              >
                Subscribe to Pro
              </Button>
              <Button marginStart="8px" height="40px" colorScheme="black">
                Book a demo
              </Button>
            </h2>
          </div>
          <div>
            <Flex minWidth="max-content" alignItems="center"  gap="2">
              <Box p="2">
                <Heading size="md">TimeSheet</Heading>
              </Box>
              <Spacer />
              <ButtonGroup gap="1">
                <Button colorScheme="teal">Sign Up</Button>
                <Button colorScheme="teal">Log in</Button>
              </ButtonGroup>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
