import { useState } from "react";
import "../timer/Crad.css";
import { Button, Center, Divider, Link, Text } from "@chakra-ui/react";
import { DeleteIcon, PlusSquareIcon } from "@chakra-ui/icons";
function Card() {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  //adding todo inpt
  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
    <div>
      <div className="rowTimer">
        <div className="rowOfinput timer-body rowpAnle">
          <div className="TimerinPut">
            <input
              className="formControl"
              type="text"
              placeholder="Select task and project"
            />
          </div>
          <Text>Note</Text>
          <div className="rowTimer2">
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Link color="blue" p="1rem" fontSize="14px">
              Add Manually
            </Link>
            <Button
              colorScheme="green"
              backgroundColor="green"
              color="white"
              p="1rem"
            >
              ADD TIMER ENTRY <PlusSquareIcon />
            </Button>
          </div>
        </div>
      </div>

      <form className="fffffffff" autoComplete="off">
        <div className="form-field">
          {serviceList.map((singleService, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <div className="inputdivsion">
                  {/* <input
                    name="service"
                    type="text"
                    id="service"
                    value={singleService.service}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                  /> */}
                  <p>(selecttag)</p>
                  <div className="second-division">
                    {serviceList.length !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleServiceRemove(index)}
                        className="remove-btn"
                      >
                        <DeleteIcon />
                      </button>
                    )}
                    <span className="calender-btn">
                      <svg
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="output">
          <h2>TodoList</h2>
          {serviceList &&
            serviceList.map((singleService, index) => (
              <ul key={index}>
                {singleService.service && <li>{singleService.service}</li>}
              </ul>
            ))}
          {serviceList && serviceList.length < 10 && (
            <button
              type="button"
              onClick={handleServiceAdd}
              className="add-btn"
            >
              <span>+</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Card;
