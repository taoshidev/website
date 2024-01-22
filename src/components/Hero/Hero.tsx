import { Box, Center, Text, Divider } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box my="14">
      <Box textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          Velit proident ut adeconsectetur deserunt.
        </Text>
      </Box>
      <Center my="10">
        <Divider w="50px" />
      </Center>
    </Box>
  );
};
