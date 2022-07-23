import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AddIcon,
  DragHandleIcon,
  InfoIcon,
  QuestionOutlineIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import React, { useRef } from "react";


const Project = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <Flex
        w="90%"
        h={70}
        border="0.5px solid black"
        m="auto"
        justifyContent="space-between"
        borderLeft="none"
        borderRight="none"
      >
        <Heading fontSize="24px" mt={15} ml={5}>
          Project
        </Heading>

        <Box mt={15}>
          <Menu isLazy>
            <MenuButton mr={6}>
              <SettingsIcon w={7} h={7} />
            </MenuButton>
            <MenuList>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Integrations</MenuItem>
              <MenuItem>Billing</MenuItem>
            </MenuList>
          </Menu>
          <Menu isLazy>
            <MenuButton mr={6}>
              <QuestionOutlineIcon w={7} h={7} />
            </MenuButton>
            <MenuList>
              <MenuItem>Help</MenuItem>
              <MenuItem>Knowledge base</MenuItem>
              <MenuItem>Send feedback</MenuItem>
              <MenuItem>Become a partner</MenuItem>
            </MenuList>
          </Menu>
          <Menu isLazy>
            <MenuButton mr={6}>
              <AddIcon w={7} h={7} />
            </MenuButton>
            <MenuList>
              <MenuItem>Invite your team</MenuItem>
            </MenuList>
          </Menu>
          <Menu isLazy>
            <MenuButton mr={6}>
              <InfoIcon w={7} h={7} />
            </MenuButton>
            <MenuList>
              <MenuItem>User</MenuItem>
              <MenuItem>Download App</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Flex w="90%" h={90} m="auto" mt={6}>
        <Input placeholder="search" w="25%" mt={17} mr={4} />
        <Button colorScheme="whatsapp" mt={17} onClick={onOpen} mr={4}>
          Add project
        </Button>

        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input
                  ref={initialRef}
                  placeholder="Enter the name for a new project or task"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Create new project
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Select placeholder="Fliter" size="md" width="10%" mt={17} mr={4}>
          <option value="All Tasks">All Tasks</option>
          <option value="My Tasks">My Tasks</option>
        </Select>
        <Button colorScheme="black" variant="outline" mt={17} mr={4}>
          Collapse
        </Button>
        <Button colorScheme="black" variant="outline" mt={17} mr={4}>
          Archieved
        </Button>
        <Menu isLazy>
          <MenuButton mr={4} mb={7} mt={2}>
            <DragHandleIcon w={6} h={6} />
          </MenuButton>
          <MenuList>
            <MenuItem>Import From CSV</MenuItem>
            <MenuItem>Import from add-ons</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex ml={20}>
        <Box
          h={100}
          w="40%"
          textAlign="center"
          mr={20}
          boxShadow="rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
        >
          <Heading as="h4" size="md" mt={35}>
            No Projects
          </Heading>
        </Box>
        <Box
          h={150}
          w="40%"
          boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
          textAlign="center"
        >
          <Heading as="h6" size="sm" mt={55}>
            Choose project or task to edit
          </Heading>
        </Box>
      </Flex>
    </>
  );
};

export default Project;
