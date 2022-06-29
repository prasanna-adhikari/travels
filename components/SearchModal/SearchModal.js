import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormControl,
  Input,
  useDisclosure,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchModal({ open, close }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [test, setTest] = useState(open);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        closeOnOverlayClick={onClose}
        isOpen={open}
        onClose={close}
        motionPreset="slideInRight"
        preserveScrollBarGap={true}
        size={"xl"}
      >
        <ModalOverlay
          closeOnOverlayClick={true}
          onClick={() => setTest(false)}
        />
        <ModalContent mt={28}>
          {/* <ModalBody py="5"> */}
          <FormControl>
            {/* <FormLabel>First name</FormLabel> */}
            <InputGroup>
              <Input
                focusBorderColor="none"
                type="text"
                placeholder="Search destination here"
              />
              <InputRightAddon
                children={<FaSearch />}
                style={{ cursor: "pointer" }}
              >
                {/* <IconButton aria-label="Search database" icon={<FaSearch />} /> */}
              </InputRightAddon>
            </InputGroup>
          </FormControl>

          {/* <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl> */}
          {/* </ModalBody> */}
        </ModalContent>
      </Modal>
    </>
  );
}
