import { Box, Text, ButtonGroup, Button, Link } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box>
      <Box textAlign="center" my="100px">
        <Text fontSize="xl" fontWeight="bold" mb="6">
          Decentralized Forecasting Through the Power of Artificial
          Intelligence.
        </Text>
        <ButtonGroup spacing="5">
          <Link
            href="https://github.com/taoshidev/time-series-prediction-subnet"
            isExternal
          >
            <Button variant="primary" size="sm" width="150px">
              Get Started
            </Button>
          </Link>
          <Link
            href="https://github.com/taoshidev/time-series-prediction-subnet"
            isExternal
          >
            <Button variant="primary" size="sm" width="150px">
              Documentation
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
    </Box>
  );
};