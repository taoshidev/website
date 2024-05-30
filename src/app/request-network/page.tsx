"use client";

import NextImage from "next/image";
import {
  Anchor,
  Box,
  Container,
  Center,
  Card,
  Title,
  Text,
  Image,
  Stack,
  Flex,
  List,
  Group,
  Button,
} from "@mantine/core";

import nasa from "@/assets/nasa.png";
import vision from "@/assets/vision.png";
import saturn from "@/assets/saturn.png";
import rnHero from "@/assets/rn-hero.png";
import integrate from "@/assets/integrate.png";
import flywheel from "@/assets/flywheel.png";
import sneakPeak from "@/assets/sneak-peak.png";

export default function Page() {
  return (
    <Box>
      <Container maw="1000px" h="100%" mb={170}>
        <Group justify="space-between">
          <Box flex="1" mr="lg">
            <Text c="orange" size="xs">
              Coming June 2nd
            </Text>
            <Title c="black">request network</Title>
            <Text c="#282828">A digital marketplace, built for Bittensor</Text>
            {/* <Group mt="xl" gap="xl">
              <Button bg="#282828" c="white">
                Get Started
              </Button>
              <Button bg="white" c="#282828">
                White Paper
              </Button>
            </Group> */}
          </Box>
          <Box flex="1" display={{ base: "none", sm: "block" }}>
            <Image
              component={NextImage}
              w="auto"
              h={489}
              fit="contain"
              src={rnHero}
              alt="Hero Image"
            />
          </Box>
        </Group>
      </Container>

      <Box bg="orange">
        <Container
          maw="1000px"
          w="100%"
          py={{ base: 50, sm: 100 }}
          px={{ sm: 20 }}
        >
          <Flex
            justify="space-between"
            direction={{ base: "column", sm: "row" }}
          >
            <Center
              mr={{ base: 0, sm: 50 }}
              display={{ base: "none", sm: "block" }}
            >
              <Image
                component={NextImage}
                w={300}
                h="auto"
                fit="contain"
                src={sneakPeak}
                alt="Hero Image"
              />
            </Center>
            <Box flex="1">
              <Title order={3} c="white" mb="sm">
                A Hub for Decentralized Services and Data
              </Title>
              <Text c="#F7F6F3" mb="xl" size="sm">
                Enter a new era of service and data exchange with the Request
                Network, a versatile platform built for the Bittensor ecosystem,
                and architected by Taoshi. The Request Network heralds a new
                paradigm in decentralized services, offering a dynamic
                marketplace that can be integrated with every subnet built on
                Bittensor. Whether you seek data, computational tasks, or
                complex analyses, the Request Network facilitates these
                exchanges with the trust and efficiency of stablecoin
                transactions.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container
        maw="1000px"
        w="100%"
        py={{ base: 50, sm: 100 }}
        px={{ sm: 20 }}
      >
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: "column", sm: "row" }}
        >
          <Box flex="1">
            <Title order={3} mb="sm">
              Harnessing the Collective Capabilities of Subnets
            </Title>
            <Text mb="xl" size="sm">
              The Request Network is your portal to the vast array of services
              offered by Bittensor&apos;s subnets. Each subnet is a powerhouse
              of specialized functions, delivering not just data, but also
              performing tasks that span from intricate financial modeling and
              predictions to the generation of AI-driven solutions. The Request
              Network equips users with the tools to propel innovation,
              research, and development across various domains.
            </Text>
          </Box>
          <Center
            ml={{ base: 0, sm: 50 }}
            display={{ base: "none", sm: "block" }}
          >
            <Image
              component={NextImage}
              w={275}
              h="auto"
              fit="contain"
              src={vision}
              alt="Hero Image"
            />
          </Center>
        </Flex>
      </Container>

      <Box bg="#282828">
        <Container
          maw="1000px"
          w="100%"
          py={{ base: 50, sm: 100 }}
          px={{ sm: 20 }}
        >
          <Flex
            justify="space-between"
            align="center"
            direction={{ base: "column", sm: "row" }}
          >
            <Center mr={{ sm: 50 }} display={{ base: "none", sm: "flex" }}>
              <Image
                component={NextImage}
                w={427}
                h="auto"
                fit="contain"
                src={flywheel}
                alt="Hero Image"
              />
            </Center>
            <Box flex="1">
              <Title c="white" order={3} mb="sm">
                Fostering a Synergistic Ecosystem
              </Title>
              <Text c="white" mb="xl" size="sm">
                At the heart of the Bittensor network is a thriving community
                where every participant&apos;s contribution is valued. The
                Request Network catalyzes a virtuous cycle within each
                subnet&apos;s ecosystem; miners are incentivized to offer not
                only data but also their computational services, while consumers
                access a comprehensive suite of resources to elevate their
                endeavors. Validators, a backbone of the Bittensor ecosystem,
                are remunerated with 100% of the Request Network&apos;s
                transactional revenue, acknowledging their critical role in
                maintaining network integrity and facilitating its operations.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="white">
        <Container
          maw="1000px"
          w="100%"
          py={{ base: 50, sm: 100 }}
          px={{ sm: 20 }}
        >
          <Flex
            justify="space-between"
            align="center"
            direction={{ base: "column", sm: "row" }}
          >
            <Center mr={{ sm: 50 }} display={{ base: "none", sm: "flex" }}>
              <Image
                component={NextImage}
                w="auto"
                h={300}
                fit="contain"
                src={integrate}
                alt="Hero Image"
              />
            </Center>
            <Box flex="1">
              <Title c="#282828" order={3} mb="sm">
                Ready to Integrate your Subnet with the Request Network?
              </Title>
              <Text c="#282828" mb="xl" size="sm">
                Any subnet within the Bittensor ecosystem can democratize their
                highly valuable intelligence through the Request Network. If
                you’d like to integrate your subnet with the Request Network,
                please reach out to our team via email at{" "}
                <Anchor href="mailto:support@taoshi.io">
                  support@taoshi.io
                </Anchor>{" "}
                - we’ll work with you to complete the integration as soon as
                possible!
              </Text>
              <Group justify="flex-end">
                <Button
                  href="mailto:support@taoshi.io"
                  component="a"
                  variant="outline"
                  color="#282828"
                  size="sm"
                >
                  Connect with Us
                </Button>
              </Group>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container
        maw="1000px"
        w="100%"
        py={{ base: 50, sm: 100 }}
        px={{ sm: 20 }}
      >
        <Group justify="space-between">
          <Box flex="1">
            <Title mb="xl">Roadmap</Title>
            <Stack
              gap="xl"
              style={{ sm: { borderLeft: "1px dashed #282828" } }}
              pl={{ sm: "xl" }}
            >
              <Card>
                <Text c="orange" mb="md">
                  April 2024
                </Text>
                <Text size="xs" fw="bold" mb="xs">
                  Core Functionality
                </Text>
                <List size="xs">
                  <List.Item>
                    Validator Onboarding
                    <List size="xs" withPadding>
                      <List.Item>Endpoint Setup</List.Item>
                    </List>
                  </List.Item>
                  <List.Item>
                    Consumer Onboarding
                    <List size="xs" withPadding>
                      <List.Item>Subnet Selection</List.Item>
                    </List>
                  </List.Item>
                  <List.Item>Dashboard</List.Item>
                  <List.Item>Payment Relay</List.Item>
                  <List.Item>Open-Source ReqNet API</List.Item>
                </List>
              </Card>
              <Card>
                <Text c="orange" mb="md">
                  May 2024
                </Text>
                <Text size="xs" fw="bold" mb="xs">
                  Validator Experience Enhancements
                </Text>
                <List size="xs">
                  <List.Item>Payment Relay Optimization</List.Item>
                  <List.Item>
                    Dashboard Enhancements
                    <List size="xs" withPadding>
                      <List.Item>Statistics</List.Item>
                      <List.Item>Taoshi Score</List.Item>
                    </List>
                  </List.Item>
                  <List.Item>Consumer API</List.Item>
                  <List.Item>Documentation</List.Item>
                  <List.Item>Tutorials</List.Item>
                </List>
              </Card>
              <Card>
                <Text c="orange" mb="md">
                  June 2024
                </Text>
                <Text size="xs" fw="bold" mb="xs">
                  Subnet API
                </Text>
                <List size="xs">
                  <List.Item>Dashboard</List.Item>
                  <List.Item>Validator Inheritance</List.Item>
                </List>
              </Card>
              <Card>
                <Text size="xs">more to come...</Text>
              </Card>
            </Stack>
          </Box>
          <Center flex="1" display={{ base: "none", sm: "flex" }}>
            <Image
              component={NextImage}
              w="auto"
              h={400}
              fit="contain"
              src={nasa}
              alt="Hero Image"
            />
          </Center>
        </Group>
      </Container>

      <Container maw="1000px" w="100%" mb={170}>
        <Center mb="xl">
          <Image
            component={NextImage}
            w={200}
            h="auto"
            fit="contain"
            src={saturn}
            alt="Hero Image"
          />
        </Center>
        <Box mb="xl" ta="center">
          <Title mb="sm" order={3}>
            How is Taoshi Using the Request Network?
          </Title>
          <Text mb="lg" size="sm">
            Taoshi is using the Request Network to help fulfill our vision to
            empower traders and institutions by democratizing access to trading
            signals from our Proprietary Trading Network (PTN). It will act as a
            digital marketplace where you can select and purchase the most
            relevant, world-class trading signals for your strategies, tailored
            to your preferred asset classes and currency pairs.
          </Text>
          <Center mt="xl">
            <Button
              bg="orange"
              component="a"
              href="https://discord.gg/epEZf4s3"
              target="_blank"
            >
              Join Discord
            </Button>
          </Center>
        </Box>
      </Container>
    </Box>
  );
}
