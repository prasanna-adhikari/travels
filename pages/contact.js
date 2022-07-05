import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Slide,
  ScaleFade,
  SimpleGrid,
  Center,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
export default function contact() {
  return (
    <Container maxW={"7xl"} py={5}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
        animateOpacity
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box p={2}>
            <Heading>Contact</Heading>
            <Text mt={{ sm: 2, md: 2, lg: 3 }} color="gray.500">
              If you have any query or want to renown your place, filling up the
              form below.
            </Text>
            <VStack spacing={5} mt={{ sm: 3, md: 4, lg: 5 }}>
              <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.800" />}
                  />
                  <Input type="text" size="md" />
                </InputGroup>{" "}
              </FormControl>
              <FormControl id="name">
                {" "}
                <FormLabel>Mail</FormLabel>{" "}
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineEmail color="gray.800" />}
                  />
                  <Input type="text" size="md" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel>Place Description</FormLabel>
                <Textarea
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="message"
                />
              </FormControl>
              <FormControl id="name" float="right">
                <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                  Send
                </Button>
              </FormControl>
            </VStack>
          </Box>{" "}
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          {/* <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("blue.50", "blue.400")}
          /> */}
          <Box
            position={"relative"}
            height={"450px"}
            rounded={"2xl"}
            // boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            {/* <IconButton
                aria-label={"Play Button"}
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                icon={<PlayIcon w={12} h={12} />}
                size={"lg"}
                color={"white"}
                position={"absolute"}
                left={"50%"}
                top={"50%"}
                transform={"translateX(-50%) translateY(-50%)"}
              /> */}
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1656986194~exp=1656986794~hmac=adc15b3ee62e83b5dbf367b9a8c38100ea056d345eaa1c54ac3dd18ff2f94515&w=740"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
// import {
//   Container,
//   Flex,
//   Box,
//   Heading,
//   Text,
//   IconButton,
//   Button,
//   VStack,
//   HStack,
//   Wrap,
//   WrapItem,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Textarea,
// } from "@chakra-ui/react";
// import {
//   MdPhone,
//   MdEmail,
//   MdLocationOn,
//   MdFacebook,
//   MdOutlineEmail,
// } from "react-icons/md";
// import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

// export default function contact() {
//   return (
//     <Container
//       maxW="100%"
//       height="89vh"
//       mt={0}
//       centerContent
//       overflow="hidden"
//       justifyContent={"center"}
//     >
//       <Flex alignItems={"center"}>
//         <Box
//           bg={"blue.800"}
//           color="white"
//           borderRadius="lg"
//           m={{ sm: 5, md: 20, lg: 20, xl: 15 }}
//           p={{ sm: 15, md: 15, lg: 16 }}
//           w={{ sm: "1xl", md: "2xl" }}
//         >
//           <Box p={2}>
//             <Heading>Contact</Heading>
//             <Text mt={{ sm: 2, md: 2, lg: 3 }} color="gray.300">
//               Fill up the form below to contact
//             </Text>
//             <VStack spacing={5} mt={{ sm: 3, md: 4, lg: 5 }}>
//               <FormControl id="name">
//                 <FormLabel>Your Name</FormLabel>
//                 <InputGroup borderColor="#E0E1E7">
//                   <InputLeftElement
//                     pointerEvents="none"
//                     children={<BsPerson color="gray.800" />}
//                   />
//                   <Input type="text" size="md" />
//                 </InputGroup>
//               </FormControl>
//               <FormControl id="name">
//                 <FormLabel>Mail</FormLabel>
//                 <InputGroup borderColor="#E0E1E7">
//                   <InputLeftElement
//                     pointerEvents="none"
//                     children={<MdOutlineEmail color="gray.800" />}
//                   />
//                   <Input type="text" size="md" />
//                 </InputGroup>
//               </FormControl>
//               <FormControl id="name">
//                 <FormLabel>Place Description</FormLabel>
//                 <Textarea
//                   borderColor="gray.300"
//                   _hover={{
//                     borderRadius: "gray.300",
//                   }}
//                   placeholder="message"
//                 />
//               </FormControl>
//               <FormControl id="name" float="right">
//                 <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
//                   Send
//                 </Button>
//               </FormControl>
//             </VStack>
//           </Box>
//         </Box>
//       </Flex>
//     </Container>
//   );
// }
