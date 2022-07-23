//import useState hook to create menu collapse state
import React, { useState } from "react";
import Card from "../timer/Card";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons

import { FiUsers } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiSettings,
} from "react-icons/fi";
import { GrStatusGood } from "react-icons/gr";
import {
  BsTags,
  BsHourglassTop,
  BsCalendarDateFill,
  BsArrowClockwise,
  BsThreeDotsVertical,
} from "react-icons/bs";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { BiTimeFive, BiUserCircle, BiUserPlus } from "react-icons/bi";
import {
  AiFillDashboard,
  AiTwotoneProject,
  AiFillStop,
  AiOutlineUser,
} from "react-icons/ai";
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
              <Menu>
                <p>TRACK</p>
                <div
                  style={{
                    display: "flex",
                    height: "39px",
                    marginLeft: "10px",
                  }}
                >
                  <div>
                    <h1>{<BiTimeFive />}</h1>
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "20px" }}>
                    <p>Timesheet</p>
                  </div>
                </div>

                <hr />
                <p>ANALYZE</p>
                <div
                  style={{
                    display: "flex",
                    height: "39px",
                    marginLeft: "10px",
                  }}
                >
                  <div>
                    <h1>{<AiFillDashboard />}</h1>
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "20px" }}>
                    <p>Dashboard</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    height: "39px",
                    marginLeft: "10px",
                  }}
                >
                  <div>
                    <h1>{<GoReport />}</h1>
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "20px" }}>
                    <p>Reports</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    height: "39px",
                    marginLeft: "10px",
                  }}
                >
                  <div>
                    <h1>{<MdOutlineComputer />}</h1>
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "20px" }}>
                    <p>Computer Time</p>
                  </div>
                </div>
                <hr />
                <p>MANAGE</p>
                <div
                  style={{
                    display: "flex",
                    height: "39px",
                    marginLeft: "10px",
                  }}
                >
                  <div>
                    <h1>{<AiTwotoneProject />}</h1>
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "20px" }}>
                    <p>Projects</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    height: "39px",
                    marginLeft: "10px",
                  }}
                >
                  <div>
                    <h1>{<BsTags />}</h1>
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "20px" }}>
                    <p>Tages</p>
                  </div>
                </div>
                <hr />
                <p>TEAM</p>
                <div
                  style={{
                    display: "flex",
                    height: "39px",
                    marginLeft: "10px",
                  }}
                >
                  <div>
                    <h1>{<FiUsers />}</h1>
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "20px" }}>
                    <p>Users</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    height: "39px",
                    marginLeft: "10px",
                  }}
                >
                  <div>
                    <h1>{<GrStatusGood />}</h1>
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "20px" }}>
                    <p>Attendance</p>
                  </div>
                </div>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
        <div className="main">
          <div className="btn">
            <h2>
              {<BsHourglassTop />}
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
          <hr />
          <div className="logo">
            <div>
              <h1>TimeSheet</h1>
            </div>
            <div className="logo1">
              <h1>
                {" "}
                {<FiSettings />} {<AiFillStop />} {<BiUserCircle />}{" "}
                {<BiUserPlus />}{" "}
              </h1>
            </div>
          </div>
          <hr />
          <div
            style={{
              textAlign: "center",
              fontSize: "22px",
              fontFamily: "sans-serif",
            }}
          >
            {" "}
            <p>
              <img
                src="https://cdn.timecamp.com/res/css/dashboard/gcalendar.svg"
                alt=""
              />{" "}
              <span style={{color:"blue"}}>Enable Calendar Integration to</span> pull all your Calendar events into
              your timesheet Don't show this again
            </p>
          </div>
          <hr />
          <div className="logo">
            <div>
              <Button>
                <h1>
                  {<IoIosArrowBack />} {<BsCalendarDateFill />}{" "}
                  {<IoIosArrowDown />} {<IoIosArrowForward />}
                </h1>
              </Button>
            </div>
            <div>
              <Button>
                <h2>Day</h2>
              </Button>
              <Button>
                <h2>calendar</h2>
              </Button>
              <Button>
                <h2>{<BsArrowClockwise />} </h2>
              </Button>
              <Button>
                <h2>
                  {<AiOutlineUser />} {<IoIosArrowDown />}
                </h2>
              </Button>
              <Button>
                <h2>{<FaRegEdit />} Builk Edit</h2>
              </Button>
              <Button>
                <h2>{<BsThreeDotsVertical />}</h2>
              </Button>
            </div>
          </div>
          <hr />
          <div>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
