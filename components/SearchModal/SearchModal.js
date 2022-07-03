import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormControl,
  Input,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
export default function SearchModal({ open, close }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [test, setTest] = useState(true);
  const [check, setCheck] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const router = useRouter();
  // const initialRef = React.useRef(null);
  const ref = React.useRef(null);
  const searchPlace = (e) => {
    e.preventDefault();
    router.push(`/search?q=${searchTerm}`);
    // isOpenModal(false);
    ref.current.click();
  };

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
        <ModalOverlay ref={ref} closeOnOverlayClick={true} onClick={close} />
        <ModalContent mt={28}>
          <form onSubmit={searchPlace}>
            <FormControl>
              <InputGroup>
                <Input
                  focusBorderColor="none"
                  type="text"
                  placeholder="Search destination here"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaSearch color="#a1a1a1" />}
                />
              </InputGroup>
            </FormControl>
          </form>
        </ModalContent>
        {/* <Button ref={ref} onClick={close}>
          Cancel
        </Button> */}
      </Modal>
    </>
  );
}
