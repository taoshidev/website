"use client";

import NextImage from "next/image";

import {
  Container,
  Flex,
  Box,
  Text,
  List,
  Table,
  Center,
  Divider,
  Title,
  Stack,
  Image,
  Anchor,
} from "@mantine/core";

import { Header } from "@/components/Header";

import competition from "@/app/assets/competition.svg";

const elements = [
  {
    rank: 1,
    miner: "5EcGnpYpxXkjXquVBupn3jzpoSSLubHmTRGBtnH7PH9usTtL",
    score: 500.9284,
  },
  {
    rank: 2,
    miner: "5HGNsKUCz677KyCoN3WjMwktuGbhGR7zgZdBdLzYS59uPXre",
    score: 493.294,
  },
  {
    rank: 3,
    miner: "5CD4PEt5nfGHtSqfAtbmo4auJXZS7PdpqHdXHobPAK1uJK28",
    score: 490.224,
  },
  {
    rank: 4,
    miner: "5ELW9NqZPWh1kEaSEYPNnQaySLAj9PBFppLp23HiP4Yyx2Ro",
    score: 480.9894,
  },
  {
    rank: 5,
    miner: "5Dtm2ttHWn88NsDbgur47V2Fp6JfujdXR88g5aJHBjQyAMCy",
    score: 420.9894,
  },
  {
    rank: 1,
    miner: "5EcGnpYpxXkjXquVBupn3jzpoSSLubHmTRGBtnH7PH9usTtL",
    score: 400.9284,
  },
  {
    rank: 2,
    miner: "5HGNsKUCz677KyCoN3WjMwktuGbhGR7zgZdBdLzYS59uPXre",
    score: 393.294,
  },
  {
    rank: 3,
    miner: "5CD4PEt5nfGHtSqfAtbmo4auJXZS7PdpqHdXHobPAK1uJK28",
    score: 290.224,
  },
  {
    rank: 4,
    miner: "5ELW9NqZPWh1kEaSEYPNnQaySLAj9PBFppLp23HiP4Yyx2Ro",
    score: 180.9894,
  },
  {
    rank: 10,
    miner: "5Dtm2ttHWn88NsDbgur47V2Fp6JfujdXR88g5aJHBjQyAMCy",
    score: 10.9894,
  },
];

export default function Page() {
  const rows = elements.map((element, index) => (
    <Table.Tr key={element.miner}>
      <Table.Td
        c={index < 3 ? "orange" : "black"}
        fw={index < 3 ? "bold" : "normal"}
      >
        {element.rank}
      </Table.Td>
      <Table.Td
        c={index < 3 ? "orange" : "black"}
        fw={index < 3 ? "bold" : "normal"}
      >
        {element.miner}
      </Table.Td>
      <Table.Td
        align="right"
        c={index < 3 ? "orange" : "black"}
        fw={index < 3 ? "bold" : "normal"}
      >
        {element.score}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container maw="800px" mt="50px" mb="160px">
      <Flex direction="column" justify="center">
        <Box>
          <Header />

          <Stack align="center" my="100px">
            <Image
              component={NextImage}
              w={75}
              h={75}
              src={competition}
              alt="Competition Image"
            />
            <Title mb="xl" ta="center">
              Leaderboard
            </Title>
          </Stack>

          <Box my="xl" ta="center">
            <Text fw="bold" mb="sm">
              Welcome to the Taoshi Price Forecasting Testnet Competition!
            </Text>
            <Text size="sm">
              Are you ready to challenge yourself and revolutionize the way we
              predict financial markets? Taoshi invites you to join our latest
              initiative on the cutting-edge Price Forecasting subnet. Dive into
              a world where your data science and AI skills can earn you real
              rewards, all while contributing to the growth of the decentralized
              Bittensor network. Whether you&apos;re a student, a professional,
              or an AI enthusiast, this is your chance to make an impact and be
              recognized in the community.
            </Text>
          </Box>

          <Box my="50px">
            <Table verticalSpacing="md">
              <Table.Thead>
                <Table.Tr
                  bg="white"
                  style={{
                    borderTop: "1px dashed black",
                    borderBottom: "1px dashed black",
                  }}
                >
                  <Table.Th>Rank</Table.Th>
                  <Table.Th>Miner</Table.Th>
                  <Table.Th>Score</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Box>

          <Center my="50px">
            <Divider variant="dashed" w="50%" bg="black" />
          </Center>

          <Box mb="lg">
            <Text fw="bold" mb="sm">
              Competition Objectives & Mechanics
            </Text>
            <Text mb="sm">
              The Taoshi Subnet 8 Testnet Competition is designed to:
            </Text>
            <List withPadding>
              <List.Item>
                Empower and reward new miners within the Taoshi ecosystem.
              </List.Item>
              <List.Item>
                Provide a hands-on learning experience in a simulated
                environment akin to our mainnet.
              </List.Item>
              <List.Item>
                Encourage the transition of skilled testnet miners to active
                mainnet contributors.
              </List.Item>
            </List>
          </Box>
          <Box mb="lg">
            <Text>
              Participants will engage in predicting the intraday price
              movements of Bitcoin, leveraging Taoshi&apos;s advanced tools and
              resources. The competition will run continuously with weekly
              resets, allowing for fresh opportunities to climb the ranks.
              Weekly resets will occur every Friday at 1:00 PM eastern standard
              time. Registration for all competitors is{" "}
              <Text component="span" fw="bold" c="orange">
                COMPLETELY FREE.
              </Text>
            </Text>
          </Box>
          <Box mb="lg">
            <Text mb="sm">
              The top 3 miners at the time of the weekly reset will be rewarded
              in $TAO with the following payout structure:
            </Text>
            <List withPadding>
              <List.Item>
                1st place:{" "}
                <Text component="span" c="orange" fw="bold">
                  5 $TAO
                </Text>
              </List.Item>
              <List.Item>
                2nd place:{" "}
                <Text component="span" c="orange" fw="bold">
                  3 $TAO
                </Text>
              </List.Item>
              <List.Item>
                3rd place:{" "}
                <Text component="span" c="orange" fw="bold">
                  2 $TAO
                </Text>
              </List.Item>
            </List>
          </Box>
          <Box mb="xl">
            <Text>
              These tokens are not just a symbol of victory; they are a gateway
              to Taoshi&apos;s subnet and a testament to your skill. This reward
              should allow participants to pay completely or partially to
              register as a miner on main-net.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="sm">
              Stay on Top of Your Game
            </Text>
            <Text>
              Our dynamic leaderboard showcases the prowess of our participants
              in real-time. Track your weekly progress, compare results with
              peers, and aim for the top. With this data at your fingertips, you
              can learn from past competitions to refine your approach and
              dominate the leaderboard.
            </Text>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="sm">
              Your Path to Victory
            </Text>
            <Text mb="sm">Joining the competition is straightforward:</Text>
            <List type="ordered" withPadding>
              <List.Item>
                Register for Taoshi Price Forecasting Testnet Competition by
                setting up your miner using our comprehensive guide on{" "}
                <Anchor
                  href="https://github.com/taoshidev/time-series-prediction-subnet"
                  target="_blank"
                >
                  Github.
                </Anchor>
              </List.Item>
              <List.Item>Start predicting and submit your results.</List.Item>
              <List.Item>Earn Rewards</List.Item>
            </List>
          </Box>

          <Box mb="xl">
            <Text fw="bold" mb="sm">
              We&apos;ve Got You Covered
            </Text>
            <Text>
              Have questions? We have answers. Check out our{" "}
              <Anchor
                href="https://github.com/taoshidev/time-series-prediction-subnet"
                target="_blank"
              >
                README on Github{" "}
              </Anchor>
              for quick solutions to common queries. Need more help? Our
              dedicated{" "}
              <Anchor href="https://discord.gg/MKtKVYnCDh" target="_blank">
                Discord
              </Anchor>{" "}
              channel is ready to assist you every step of the way.
            </Text>
          </Box>

          <Box mb="40px">
            <Text fw="bold" mb="sm">
              Join the Taoshi Community
            </Text>
            <Text>
              Come join our growing community and stay connected. Follow us on{" "}
              <Anchor href="https://twitter.com/taoshiio" target="_blank">
                Twitter
              </Anchor>
              ,{" "}
              <Anchor
                href="https://www.linkedin.com/company/taoshi/"
                target="_blank"
              >
                LinkedIn
              </Anchor>
              , and join our Mining Community Hub on{" "}
              <Anchor href="https://discord.gg/MKtKVYnCDh" target="_blank">
                Discord
              </Anchor>{" "}
              to stay in the loop.
            </Text>
          </Box>

          <Box>
            <Text fw="bold" mb="sm">
              Know the Rules
            </Text>
            <Text>
              Participation in Taoshi&apos;s Testnet Competition is subject to
              our terms and conditions. Please review them carefully to ensure a
              fair and enjoyable experience for everyone involved.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}