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
import { isEmpty } from "lodash";
import { Header } from "@/components/Header";

import competition from "@/app/assets/competition.svg";

export const Competition = ({ leaderboard }: any) => {
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
            <Title order={2} mb="xl" ta="center">
              Welcome to the Taoshi Price <br />
              Forecasting Testnet Competition!
            </Title>
          </Stack>

          <Box my="xl" ta="center">
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

          <Box my="md" ta="center">
            <Text size="sm">Weekly Leaderboard</Text>
          </Box>
          <Box mb="50px">
            <Box>
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
                    <Table.Th ta="right">Score</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {leaderboard.map((item: any, index: number) => (
                    <Table.Tr key={item.id}>
                      <Table.Td
                        c={index < 3 ? "orange" : "black"}
                        fw={index < 3 ? "bold" : "normal"}
                      >
                        {index + 1}
                      </Table.Td>
                      <Table.Td
                        c={index < 3 ? "orange" : "black"}
                        fw={index < 3 ? "bold" : "normal"}
                      >
                        {item.id}
                      </Table.Td>
                      <Table.Td
                        align="right"
                        c={index < 3 ? "orange" : "black"}
                        fw={index < 3 ? "bold" : "normal"}
                      >
                        {item.score}
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
              {isEmpty(leaderboard) && (
                <Center h={200}>
                  <Title order={3} c="orange">
                    Empty. For now...
                  </Title>
                </Center>
              )}
            </Box>
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
              our terms and conditions. Please click{" "}
              <Anchor href="terms-and-conditions">here</Anchor> to carefully
              review the terms & conditions, and to ensure a fair & enjoyable
              experience for everyone involved.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
