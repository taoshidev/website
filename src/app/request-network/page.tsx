"use client";

import NextImage from "next/image";
import {
  Anchor,
  Box,
  Container,
  Center,
  Title,
  Text,
  Image,
  Stack,
  List,
  Flex,
  Collapse,
  Group,
  Button,
  BackgroundImage,
  Accordion,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import rnLogo from "@/assets/rn/logo.svg";
import background from "@/assets/rn/bg.png";
import backgroundWhite from "@/assets/rn/bg-white.png";
import backgroundBlack from "@/assets/rn/bg-black.png";
import ecosystem from "@/assets/rn/ecosystem.png";
import zap from "@/assets/rn/zap.png";

const questions = [
  {
    value:
      "What is the Request Network, and how does it benefit the Bittensor ecosystem?",
    description: (
      <Text size="sm">
        The Request Network is an open-source platform that enables third
        parties to buy and receive data provided by validators, allowing them to
        use subnet data. It benefits the Bittensor ecosystem by increasing
        network usage, providing validators with financial incentives, and
        improving the overall health of the ecosystem.
      </Text>
    ),
  },
  {
    value:
      "How does the Request Network facilitate data exchange between validators and consumers?",
    description: (
      <Text size="sm">
        The Request Network serves as the underlying protocol that facilitates
        secure and efficient data transfer between validators and consumers. It
        provides a marketplace where validators can list their data offerings,
        and consumers can discover and acquire relevant data. The Request
        Network handles the handshake mechanism, payment coordination, and data
        delivery.
      </Text>
    ),
  },
  {
    value:
      "What role do validators play in the Request Network, and how can they participate?",
    description: (
      <Text size="sm">
        Validators are entities that verify and offer data for sale on the
        Request Network. They ensure the accuracy and availability of the data
        they provide. Validators can participate by listing their data
        offerings, setting their own pricing models, and maintaining a strong
        reputation within the network.
      </Text>
    ),
  },
  {
    value:
      "Who are the consumers in the Request Network, and how can they access subnet data?",
    description: (
      <Text size="sm">
        Consumers are third-party entities that utilize the Request Network to
        access and acquire valuable subnet data from validators. They can browse
        the marketplace, discover relevant data sources, agree to pricing terms,
        and provide financial incentives to validators in exchange for data
        access.
      </Text>
    ),
  },
  {
    value: "What types of data can be accessed through the Request Network?",
    description: (
      <Text size="sm">
        The Request Network enables access to a wide range of data types from
        various Bittensor subnets, such as financial data, healthcare data,
        consumer insights, supply chain data, environmental data, and more. It
        also supports specialized data from subnets focused on large language
        models and decentralized storage.
      </Text>
    ),
  },
  {
    value:
      "How does the Request Network ensure secure and efficient data transfer between validators and consumers?",
    description: (
      <Text size="sm">
        The Request Network provides the necessary infrastructure and protocols
        to facilitate secure and reliable data transfer. It ensures the
        integrity and confidentiality of the data exchanged, maintaining trust
        between validators and consumers.
      </Text>
    ),
  },
  {
    value:
      "What payment methods are supported by the Request Network for data exchange transactions?",
    description: (
      <Text size="sm">
        The Request Network primarily uses stablecoins as the means of payment
        for data exchange transactions. Stablecoins provide stability and
        mitigate the risks associated with cryptocurrency volatility.
      </Text>
    ),
  },
  {
    value:
      "How can validators customize their offerings and pricing models on the Request Network?",
    description: (
      <Text size="sm">
        Validators have the flexibility to customize their offerings and pricing
        models based on factors such as data quality, uniqueness, and demand.
        They can specialize in certain types of data or cater to specific
        industries or use cases.
      </Text>
    ),
  },
  {
    value:
      "What incentives do validators have to participate in the Request Network?",
    description: (
      <Text size="sm">
        Validators are incentivized to participate in the Request Network as
        they can earn stablecoins as payment for their services. They gain
        access to a broader consumer base and have the opportunity to monetize
        their data assets.
      </Text>
    ),
  },
  {
    value:
      "Can the Request Network be customized or modified by validators or subnet owners?",
    description: (
      <Text size="sm">
        Yes, the Request Network is designed to be an open-source platform,
        allowing for flexibility and customization. Validators and subnet owners
        have the freedom to tailor the platform to their specific needs, such as
        spinning up or down services, setting pricing models, and integrating
        additional features or functionalities.
      </Text>
    ),
  },
  {
    value:
      "What are some potential use cases for the data accessed through the Request Network?",
    description: (
      <Text size="sm">
        Potential use cases for data accessed through the Request Network
        include financial services, large language models, decentralized
        storage, healthcare and life sciences, marketing and advertising, supply
        chain and logistics, environmental monitoring, and more. The Request
        Network enables data-driven innovation and value creation across diverse
        industries and domains.
      </Text>
    ),
  },
  {
    value:
      "How does the Request Network contribute to the broader adoption of decentralized technologies?",
    description: (
      <Text size="sm">
        The Request Network contributes to the broader adoption of decentralized
        technologies by providing a standardized and incentivized platform for
        data exchange. It showcases the potential of decentralized solutions,
        attracts a diverse range of participants, and positions Bittensor as a
        leader in the decentralized data solutions space.
      </Text>
    ),
  },
  {
    value:
      "What future enhancements and developments are planned for the Request Network?",
    description: (
      <Text size="sm">
        Future enhancements and developments planned for the Request Network
        include validator enhancements, such as improved UI/UX and performance
        tracking, subnet inheritance, consumer enhancements, and the
        incorporation of a reputation and feedback system.
      </Text>
    ),
  },
  {
    value:
      "How can the Bittensor community contribute to the success and growth of the Request Network?",
    description: (
      <Text size="sm">
        The Bittensor community can contribute to the success and growth of the
        Request Network by actively participating in the platform, providing
        valuable data, and continuously improving the network. They can also
        spread awareness about the Request Network, provide feedback, and
        collaborate on future developments.
      </Text>
    ),
  },
];

export default function Page() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box>
      <BackgroundImage
        src={background.src}
        radius={0}
        style={{ backgroundPosition: "center bottom" }}
      >
        <Stack h={600} align="center" pt="100">
          <Stack align="center" maw={700}>
            <Image
              component={NextImage}
              w={40}
              h="auto"
              fit="contain"
              src={rnLogo}
              alt="Hero Image"
            />
            <Title c="black" order={1} style={{ fontSize: "3rem" }}>
              request network
            </Title>
            <Text ta="center" size="sm">
              The Request Network, architected by Taoshi, is a digital
              marketplace for decentralized data and services from the Bittensor
              network. Get started and become empowered with the tools to
              propel innovation, research, and development across various
              domains - all through the power of Bittensor.
            </Text>
            <Group gap="lg" mt="xl">
              <Button color="#282828" variant="outline">
                Learn More
              </Button>
              <Button href="/" component="a" color="orange">
                Sign Up
              </Button>
            </Group>
          </Stack>
        </Stack>
      </BackgroundImage>

      <Box>
        <Container
          maw="1000px"
          w="100%"
          py={{ base: 50, sm: 75 }}
          px={{ sm: 20 }}
        >
          <Flex
            justify="space-between"
            direction={{ base: "column", sm: "row" }}
          >
            <Box flex="1">
              <Title order={3} mb="md" ta="center">
                The Request Network<br />Your Gateway to Decentralized Innovation
              </Title>
              <Text mb="xl" size="sm" ta="center">
                Enter a new era of decentralized innovation with the Request Network, a versatile platform designed for the Bittensor ecosystem and crafted by Taoshi. This network serves as a hub for a dynamic marketplace, seamlessly connecting users to the vast array of specialized services offered by each Bittensor subnet. From intricate financial modeling to AI-driven solutions, the Request Network facilitates access to data, computational tasks, complex analyses, and more. It equips users with the necessary tools to drive innovation, research, and development across diverse domains, all while ensuring trust and efficiency through stablecoin transactions. As a portal to decentralized services, the Request Network stands at the forefront of a new paradigm, capable of integration with every subnet on the Bittensor network to harness their collective capabilities and propel the ecosystem forward.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container
        maw="1000px"
        w="100%"
        py={{ base: 50, sm: 75 }}
        px={{ sm: 20 }}
      >
        <Group>
          <Group justify="flex-start" align="center" gap='xl'>
            <Center mb="lg" flex="1">
              <Image
                component={NextImage}
                w="auto"
                h={300}
                fit="contain"
                src={zap}
                alt="Hero Image"
              />
            </Center>
            <Box flex="2">
              <Title order={3} mb="sm">
                How it Works
              </Title>
              <Text size="sm" mb='md'>
                The Request Network operates as a user-friendly marketplace where consumers can effortlessly purchase data, services, and more directly from validators. To get started, follow the below steps:
              </Text>

              <List mb='xl'>
                <List.Item>
                  <Text size='sm' fw='bold' component='span'>Registration: </Text>
                  <Text size='sm' component='span'>
                    Begin by visiting the Request Network marketplace and completing the registration process to create your user account.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text size='sm' fw='bold' component='span'>Subnet Selection: </Text>
                  <Text size='sm' component='span'>
                    Browse the marketplace to choose from a diverse range of subnets, each offering specialized services and capabilities to meet your specific needs.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text size='sm' fw='bold' component='span'>Validator Selection: </Text>
                  <Text size='sm' component='span'>
                    Select a validator within your chosen subnet. Validators are the service providers who will fulfill your data or service requests.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text size='sm' fw='bold' component='span'>Service Agreement: </Text>
                  <Text size='sm' component='span'>
                    Review and agree to the terms of service with your chosen validator, which will detail the scope and specifications of the services or data provided.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text size='sm' fw='bold' component='span'>Payment: </Text>
                  <Text size='sm' component='span'>
                    Complete the transaction by making a payment in stablecoins, ensuring a secure and trustworthy exchange.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text size='sm' fw='bold' component='span'>API Key Access: </Text>
                  <Text size='sm' component='span'>
                    Once the payment is confirmed, you will receive an API key, granting you direct peer-to-peer access to the validator&apos;s services or data for your project or research needs.
                  </Text>
                </List.Item>
              </List>

              <Button component='a' href='https://request.taoshi.io/login' target='_blank'>Request Network Marketplace</Button>
            </Box>
          </Group>
        </Group>
      </Container>

      <Box>
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
            gap='xl'
          >
            <Box flex="2">
              <Title order={3} mb="sm">
                Fostering a Synergistic Ecosystem
              </Title>
              <Text size="sm">
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
            <Center mb="lg" flex="1">
              <Image
                component={NextImage}
                w="auto"
                h={250}
                fit="contain"
                src={ecosystem}
                alt="Hero Image"
              />
            </Center>
          </Flex>
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
                  Ready to Integrate your Subnet with the Request Network?
                </Title>
                <Center mx="auto">
                  <Text ta="center" c="white" size="sm">
                    Any subnet within the Bittensor ecosystem can democratize
                    their highly valuable intelligence through the Request
                    Network. If you’d like to integrate your subnet with the
                    Request Network, please reach out to our team via email at{" "}
                    <Anchor href="mailto:support@taoshi.io">
                      support@taoshi.io
                    </Anchor>{" "}
                    - we’ll work with you to complete the integration as soon as
                    possible!
                  </Text>
                </Center>
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
        </BackgroundImage>
      </Box>

      <Container
        maw="1000px"
        w="100%"
        py={{ base: 50, sm: 75 }}
        px={{ sm: 20 }}
      >
        <Center>
          <Box ta="center" mb="xl">
            <Title order={2} fw="bold">
              Do You Have Questions?
            </Title>
            <Text>We Have The Answers</Text>
          </Box>
        </Center>
        <Accordion mb="lg" radius={0} variant="separated" defaultValue="Apples">
          {questions.slice(0, 5).map((item) => (
            <Accordion.Item bg="#ECEBE9" key={item.value} value={item.value}>
              <Accordion.Control>
                <Text size="sm">{item.value}</Text>
              </Accordion.Control>
              <Accordion.Panel>{item.description}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        <Collapse mb="lg" in={opened}>
          <Accordion radius={0} variant="separated" defaultValue="Apples">
            {questions.slice(5, questions.length).map((item) => (
              <Accordion.Item bg="#ECEBE9" key={item.value} value={item.value}>
                <Accordion.Control>
                  <Text size="sm">{item.value}</Text>
                </Accordion.Control>
                <Accordion.Panel>{item.description}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Collapse>
        <Center>
          <Button variant="subtle" onClick={toggle}>
            {opened ? "Less" : "More"} Questions
          </Button>
        </Center>
      </Container>

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
                How is Taoshi Using the Request Network?
              </Title>
              <Text mb="lg" size="sm">
                Taoshi is using the Request Network to help fulfill our vision
                to empower traders and institutions by democratizing access to
                trading signals from our Proprietary Trading Network (PTN). It
                will act as a digital marketplace where you can select and
                purchase the most relevant, world-class trading signals for your
                strategies, tailored to your preferred asset classes and
                currency pairs.
              </Text>
              <Center mt="xl">
                <Group gap="lg" mt="xl">
                  <Button color="#282828" variant="outline">
                    Learn More
                  </Button>
                  <Button href="/" component="a" color="orange">
                    Sign Up
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
