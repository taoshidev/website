"use client";

import NextImage from "next/image";
import {
  Box,
  Container,
  Center,
  Title,
  Text,
  Image,
  Divider,
  List,
  Flex,
  Group,
  Button,
  SimpleGrid,
  BackgroundImage, Card,
} from "@mantine/core";

import rnLogo from "@/assets/theta/logo-orange.svg";
import backgroundWhite from "@/assets/rn/bg-white.png";
import backgroundBlack from "@/assets/rn/bg-black.png";
import flywheel from "@/assets/theta/flywheel.png";

export default function Page() {
  return (
    <Box>
      <Box
        style={{ backgroundPosition: "center bottom", borderTop: '3px solid #E35F25' }}
      >
        <Container
          maw="1000px"
          w="100%"
          py={{ base: 50, sm: 75 }}
          px={{ sm: 20 }}
        >
          <Center mb="lg" flex="1">
            <Image
              component={NextImage}
              w={40}
              h="auto"
              fit="contain"
              src={rnLogo}
              alt="Hero Image"
            />
          </Center>
          <Box>
            <Title c="black" ta='center'>
              Introducing the Theta Token:
            </Title>
            <Title c="black" ta='center' mb='md'>
              Powering the Future of Decentralized Trading
            </Title>
            <Text ta='center'>
              The Theta token is the key to unlocking Taoshi&apos;s advanced Proprietary Trading Network (PTN), making it accessible to anyone who believes in Taoshi&apos;s vision and wants to participate in the future of decentralized trading.
            </Text>
          </Box>

          <Divider mt={{ base: '50px', md: '75px'}} />

        </Container>
      </Box>

      <Box mb={{ base: '50px', sm: '75px'}}>
        <Container
          maw="1000px"
          w="100%"
        >
          <Flex
            justify="space-between"
            direction={{ base: "column", sm: "row" }}
          >
            <Box flex="1">
              <Title order={3} mb="md">
                What Is the Theta Token?
              </Title>
              <Text mb="xl">
                Theta is the driving force behind Taoshi&apos;s  <a href='/ptn'>Proprietary Trading Network</a> (PTN), a revolutionary decentralized trading ecosystem built on the Bittensor blockchain. As part of Bittensor&apos;s dynamic TAO framework (dTAO), Theta enables the community to swap TAO for Theta, investing directly into PTN and fueling its growth.
              </Text>
              <Text>
                With the launch of Theta and dTAO, Taoshi is breaking down barriers to advanced trading strategies, making high-performance investing accessible while strengthening a decentralized financial ecosystem.              </Text>
            </Box>
          </Flex>

          <Divider mt={{ base: '50px', md: '75px'}} />

        </Container>
      </Box>

      <Box mb={{ base: '50px', sm: '75px'}}>
        <Container
          maw="1000px"
          w="100%"
          px={{ sm: 20 }}
        >
          <Flex
            justify="space-between"
            direction={{ base: "column", sm: "row" }}
          >
            <Box flex="1">
              <Title order={3} mb="md">
                Dynamic TAO: Redefining Decentralization on Bittensor
              </Title>
              <Text mb="xl">
                Bittensor&apos;s dTAO represents a major leap forward in blockchain governance and tokenomics, shifting value assignment from centralized validators to the broader community. This means:
              </Text>

              <SimpleGrid cols={{ base: 2, md: 3 }} mb='xl'>
                <Card withBorder>
                  <Text fw='bold'>Subnet-Specific Tokens</Text>
                  <Text>
                    Every Bittensor subnetwork, including Taoshi&apos;s PTN, has its own token, creating direct investment opportunities.
                  </Text>
                </Card>
                <Card withBorder>
                  <Text fw='bold'>Community Governance</Text>
                  <Text>
                    Value and rewards are determined collectively, ensuring transparency and fairness.
                  </Text>
                </Card>
                <Card withBorder>
                  <Text fw='bold'>Enhanced Flexibility</Text>
                  <Text>
                    Participants can invest in subnets that align with their financial goals and vision.
                  </Text>
                </Card>
              </SimpleGrid>

              <Text>
                Through dTAO, Theta embodies this shift, making decentralized finance more inclusive, transparent, and innovative.
              </Text>
            </Box>
          </Flex>

          <Divider mt={{ base: '50px', md: '75px'}} />

        </Container>
      </Box>

      <Box mb={{ base: '50px', sm: '75px'}}>
        <Container
          maw="1000px"
          w="100%"
          px={{sm: 20}}
        >
          <Box>
            <Box>
              <Title order={3} mb="md">
                Why Own Theta?
              </Title>
              <Group justify="flex-start" align='flex-start' gap='xl'>
                <Box flex='1'>
                  <Box mb='xl'>
                    <Text>
                      The Theta Flywheel Effect is designed to create a self-reinforcing cycle of growth and value for all participants of the Taoshi ecosystem:
                    </Text>
                  </Box>

                  <Box mb='sm'>
                    <Box mb='sm'>
                      <Text fw='bold'>1. Greater Competition on PTN</Text>
                      <Text>
                        Miners compete to deliver premium trading signals.
                      </Text>
                    </Box>
                    <Box mb='sm'>
                      <Text fw='bold'>2. Premium Strategies</Text>
                      <Text>
                        Theta fuels healthy competition among PTN contributors, inspiring the development of more powerful and innovative trading strategies. The result? A dynamic, ever-evolving trading ecosystem.
                      </Text>
                    </Box>
                    <Box>
                      <Text fw='bold'>3. Growing Subscription Revenue</Text>
                      <Text>
                        Validators holding Theta get priority access to PTN&apos;s advanced trading strategies, designed to deliver consistent, data-driven results with zero emotional bias - perfect for traders of all levels.
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Center mb="lg" flex="1" display={{ base: 'none', sm: 'flex'}}>
                  <Image
                    component={NextImage}
                    w={400}
                    h='auto'
                    fit="contain"
                    src={flywheel}
                    alt="Hero Image"
                  />
                </Center>
              </Group>
            </Box>

            <Group justify="flex-start" align="center" gap='xl'>
              <Box mb='xl' flex="1">
                <Box mb='xl'>
                  <Box mb='sm'>
                    <Text fw='bold'>4. Theta Token Treasury Allocation</Text>
                    <Text>
                      Theta holders play a key role in shaping the future of <a href='https://glitch.financial/' target='_blank'>Glitch Financial</a>. A portion of Glitch Financial&apos;s revenue is used to purchase Theta tokens, which are allocated to a DAO for strategic initiatives and ecosystem development. This empowers Theta participants to collectively drive innovation, fund new developments, and strengthen the ecosystem, making Glitch Financial a truly community-run project.                  </Text>
                  </Box>
                  <Box>
                    <Text fw='bold'>5. Increased PTN Emissions</Text>
                    <Text>
                      Higher emissions reward top contributors, fueling growth and innovation.
                    </Text>
                  </Box>
                </Box>
              </Box>

            </Group>
          </Box>

          <Text ta='center'>This cycle strengthens the entire Taoshi ecosystem, ensuring long-term success for all participants.</Text>
        </Container>
      </Box>

      <Box bg="#282828">
        <BackgroundImage
          src={backgroundBlack.src}
          radius={0}
          style={{ backgroundPosition: "center top" }}
        >
          <Container
            maw="1000px"
            w="100%"
            py={{ base: 50, sm: 75 }}
            px={{ sm: 20 }}
          >
            <Flex
              justify="space-between"
              align="center"
              direction={{ base: "column", sm: "row" }}
            >
              <Box flex="1">
                <Title ta="center" c="white" order={3} mb="sm">
                  How to Acquire the Theta Token
                </Title>
                <Center mx="auto">
                  <Text ta="center" c="white" size="sm">
                    The Taoshi team will publish details on how to acquire the Theta token as soon as they become available.
                  </Text>
                </Center>
              </Box>
            </Flex>
          </Container>
        </BackgroundImage>
      </Box>


      <Box bg="#ECEBE9">
        <BackgroundImage
          src={backgroundWhite.src}
          radius={0}
          style={{ backgroundPosition: "center top" }}
        >
          <Container
            maw="1000px"
            w="100%"
            py={{ base: 50, sm: 75 }}
            px={{ sm: 20 }}
          >
            <Box mb="xl" ta="center">
              <Title mb="sm" order={3}>
                Join the Theta Revolution
              </Title>
              <Text mb="lg" size="sm">
                Theta isn’t just a token, it’s a movement towards a more open and community-driven financial future. Take control of your financial destiny, access premium trading strategies, and be part of the next evolution of decentralized finance.
              </Text>
              <Text mb="lg" size="sm">
                Ready to join the revolution?
              </Text>
              <Center mt="xl">
                <Group gap="lg" mt="xl">
                  <Button color="#282828" variant="outline">
                    Buy Theta Now
                  </Button>
                  <Button href="/" component="a" color="orange">
                    Learn More
                  </Button>
                </Group>
              </Center>
            </Box>
          </Container>
        </BackgroundImage>
      </Box>
    </Box>
  );
}
